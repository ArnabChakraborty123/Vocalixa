"use client";
import Header from "../components/header";
import Section from "../components/section";
import Audioplayer from "../components/adioplayer"
import { PollyClient, SynthesizeSpeechCommand } from "@aws-sdk/client-polly"; // ES Modules import
import { useState, useEffect } from "react";

// Initialize the Polly client
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
  // Function to convert text to speech using AWS Polly
  const convertTexttoSpeech = async () => {
    try {
      // Define the parameters for the SynthesizeSpeechCommand
      const params = {
        OutputFormat: "mp3",
        Text: text,
        VoiceId: "Salli",
      };
      // Create a new SynthesizeSpeechCommand with the specified parameters
      const command = new SynthesizeSpeechCommand(params);
      // Send the command to Polly and wait for the response
      const response = await pollyClient.send(command);

      // Log the details of the response to the console
      console.log("Text converted to speech successfully!");
      console.log("Response:", response);

      // Set the state to indicate that the speech conversion was successful
      setSpeechConverted(true);
      // setAudioFile(response.AudioStream);
      setAudioFile(response);
    } catch (error) {
      // Log any errors that occur during the conversion process
      console.error("Error converting text to speech:", error);
    }
  };

  // Return the component structure
  return (
    <div
      className="h-screen w-screen bg-[url('/images/speakerimage.jpg')] bg-cover bg-center"
      style={{ paddingTop: 0, paddingBottom: 0 }}
    >
      <div>
        <Header />
      </div>
      <div className="mt-20 ml-20 mr-10 pl-10 pr-20 sm:mx-20">
        {/* Pass the text, setText function, and convertTexttoSpeech function to the Section component */}
        <Section text={text} setText={setText} convertTexttoSpeech={convertTexttoSpeech} />
        {/* Conditionally render a message if speech conversion was successful */}
        {speechConverted && <p>Text converted to speech successfully!</p>}
      </div>
      <Audioplayer audioFile={audioFile} isTextEntered={text.length > 0}/>
    </div>
  );
};

export default Dashboard;
