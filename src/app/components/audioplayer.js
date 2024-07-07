
import React, { useState, useEffect, createRef } from "react";
import { Play } from "lucide-react";
import { Pause } from "lucide-react";
import { Download } from "lucide-react";

const Audioplayer = ({ audioFile, isTextEntered }) => {
  const audioRef = React.createRef();
  const progressBarRef = React.createRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (audioFile) {
      const audioStream = audioFile.AudioStream;
      const response = new Response(audioStream);
      response.blob().then((blob) => {
        const audioUrl = URL.createObjectURL(blob);
        const audio = audioRef.current;
        audio.src = audioUrl;
        audio.addEventListener("loadedmetadata", () => {
          setDuration(audio.duration);
        });
        audio.addEventListener("loadedmetadata", () => {
          audio.addEventListener("timeupdate", () => {
            setCurrentTime(audio.currentTime);
          });
        });
      });
    }
  }, [audioFile]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const downloadAudio = () => {
    const audioBlob = new Blob([audioFile], { type: "audio/mpeg" });
    const audioURL = URL.createObjectURL(audioBlob);
    const link = document.createElement("a");
    link.href = audioURL;
    link.download = "audio.mp3";
    link.click();
  };

  return (
    <div className="flex flex-col justify-center items-center ">
      <div className="w-3/4 bg-gray-200 rounded-full h-2.5 mb-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-purple-500 to-red-700 h-2.5"
          ref={progressBarRef}
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>
      <div className="flex gap-6">
      <button
        onClick={() => togglePlay()}
        className={`rounded-full p-4 ${
          isTextEntered
            ? "bg-purple-500 hover:bg-red-700 text-white font-bold p-4 mt-4 rounded-full flex items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
            : "bg-gray-300 text-gray-500 cursor-not-allowed font-bold p-4 mt-4 rounded-full flex items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
        }`}
        style={{ width: "50px", height: "50px" }}
        disabled={!isTextEntered}
      >
        <audio ref={(element) => { audioRef.current = element; }} />

        {/* <audio ref={audioRef} /> */}
        {isPlaying ? (
          <Pause className="text-black" />
        ) : (
          <Play className="text-black" />
        )}
      </button>
      <button
        className="bg-purple-500 hover:bg-red-700 text-white font-bold p-4 mt-4 rounded-full flex items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
        style={{ width: "50px", height: "50px" }}
        onClick={downloadAudio}
      >
        <Download size={24} />
      </button>
      </div>
    </div>
  );
};

export default Audioplayer;