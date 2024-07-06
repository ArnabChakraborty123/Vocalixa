import { useEffect, useRef, useState } from "react";
import { Pause } from 'lucide-react';
import { Play } from 'lucide-react';
import { Download } from "lucide-react";

const Audioplayer = ({ audioFile, isTextEntered }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef();
  const progressBarRef = useRef();

  useEffect(() => {
    if (audioFile) {
      const audioBlob = new Blob([audioFile], { type: "audio/mpeg" });
      const audioURL = URL.createObjectURL(audioBlob);
      audioRef.current.src = audioURL;

      audioRef.current.addEventListener('loadeddata', () => {
        setDuration(audioRef.current.duration);
      });

      audioRef.current.addEventListener('timeupdate', updateProgressBar);
      audioRef.current.addEventListener('ended', () => {
        setIsPlaying(false);
      });

      return () => {
        URL.revokeObjectURL(audioURL);
        audioRef.current.removeEventListener('timeupdate', updateProgressBar);
        // audioRef.current.removeEventListener('ended', () => {
        //   setIsPlaying(false);
        // });
      };
    }
  }, [audioFile]);

  const updateProgressBar = () => {
    const audio = audioRef.current;
    const progress = (audio.currentTime / audio.duration) * 100;
    setCurrentTime(audio.currentTime);
    progressBarRef.current.style.width = `${progress}%`;
  };

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
    const link = document.createElement('a');
    link.href = audioURL;
    link.download = 'audio.mp3';
    link.click();
  };

  return (
    <div className="audio-container flex flex-col items-center justify-center h-screen absolute top-1/4 w-full">
      <audio ref={audioRef} />
      <div className="w-3/4 bg-gray-200 rounded-full h-2.5 mb-4 overflow-hidden">
        <div
          className="bg-gradient-to-r from-blue-500 to-blue-700 h-2.5"
          ref={progressBarRef}
          style={{ width: `${(currentTime / duration) * 100}%` }}
        />
      </div>
      <div className="flex gap-6">
        <button
          onClick={togglePlay}
          className={`rounded-full p-4 ${
            isTextEntered
             ? "bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 mt-4 rounded-full flex items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
              : "bg-gray-300 text-gray-500 cursor-not-allowed font-bold p-4 mt-4 rounded-full flex items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
          }`}
          style={{ width: "50px", height: "50px" }}
          disabled={!isTextEntered}
        >
          {isPlaying? <Pause className="text-black" /> : <Play className="text-black" />}
        </button>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 mt-4 rounded-full flex items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
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