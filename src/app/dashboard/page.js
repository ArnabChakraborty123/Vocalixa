"use client"
import Header from "../components/header";
import Section from "../components/section";
import { Download } from "lucide-react";
import { AWS } from "aws-sdk"
import { useState, useEffect } from "react";
// AWS.config.update({
//   accessKey: ,
//   secretaccessKey: ,
//   region: "us-east-1"
// })
const Dashboard = () => {
  const [text, setText] = useState('');

  useEffect(() => {
    console.log(text); // log the updated text state
  }, [text]);
  return (
    <div
      className="h-screen w-screen bg-[url('/images/speakerimage.jpg')] bg-cover bg-center"
      style={{ paddingTop: 0, paddingBottom: 0 }}

    >
    <div>
    <Header />
    </div>
      <div className="mt-20 ml-20 mr-10 pl-10 pr-20 sm:mx-20">
        
        <Section text={text}  setText={setText}/>
      </div>
    </div>
  );
};

export default Dashboard;