"use client";
import Header from "../components/header";
import Section from "../components/section";
import Audioplayer from "../components/audioplayer";
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly"; // ES Modules import
import { useState, useEffect } from "react";

const pollyClient = new PollyClient({
  region: process.env.NEXT_PUBLIC_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_CLIENT_ID,
    secretAccessKey: process.env.NEXT_PUBLIC_SECRET_ACCESS_KEY,
  },
});

const Dashboard = () => {
  const [text, setText] = useState("");
  const [speechConverted, setSpeechConverted] = useState(false);
  const [audioFile, setAudioFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const convertTexttoSpeech = async () => {
    setLoading(true);
    try {
      const params = {
        OutputFormat: "mp3",
        Text: text,
        VoiceId: "Salli",
      };
      const command = new SynthesizeSpeechCommand(params);
      const response = await pollyClient.send(command);
      console.log("Text converted to speech successfully!");
      console.log("Response:", response);
      setSpeechConverted(true);
      setAudioFile(response);
    } catch (error) {
      console.error("Error converting text to speech:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="h-screen w-screen bg-[url('/images/speakerimage.jpg')] bg-cover bg-center overflow-hidden"
      style={{ paddingTop: 0, paddingBottom: 0 }}
    >
      <div>
        <Header />
      </div>
      <div className="mt-20 ml-20 mr-10 pl-10 pr-20 sm:mx-20">
        <Section
          text={text}
          setText={setText}
          convertTexttoSpeech={convertTexttoSpeech}
        />
        {speechConverted && (
        <div>
          {/* Render something when speechConverted is true */}
          <p>Text converted to speech successfully!</p>
        </div>
      )}
      </div>
      <div className="pt-9 mt-2">
      <Audioplayer audioFile={audioFile} isTextEntered={text.length > 0} />
      {/* <Audioplayer audioFile={audioFile} isTextEntered={text.length > 0} /> */}
      </div>
    </div>
  );
};

export default Dashboard;
