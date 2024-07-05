import { useEffect, useRef, useState } from "react"
import { Pause } from 'lucide-react';
import { Play } from 'lucide-react';

const Audioplayer = ({ audioFile, isTextEntered}) => {
  const[isPlaying, SetIsPlaying] = useState()
  const audioRef = useRef()
  const progressBarRef = useRef()
  useEffect(() => {
    if(audioFile) {
        const audioArrayBuffer = audioFile.AudioStream.buffer;
        const audioUrl = URL.createObjectURL(new Blob([audioArrayBuffer], { type: "audio/mpeg"}));

        const audio = audioRef.current;
        audio.src = audioUrl;
        return () => {
          URL.revokeObjectURL(audioUrl);
        }
    }
  }, [audioFile])
  const togglePlay = () => {
    if(isPlaying) {
      audioRef.current.pause();
    }
    else {
      audioRef.current.play();
      }
      SetIsPlaying(!isPlaying)
      };
  return (
    <div className="audio-container">
    <audio ref={audioRef}/>
    <div>
      <button 
      onClick={() => togglePlay()}
      className={`rounded-full p-4 ${
            isTextEntered
              ? "bg-gradient-to-r from-blue-500 to-blue-700 text-black"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
          disabled={!isTextEntered} //disabled button if no text entered
      >
        {
           isPlaying? <Pause className="text-black" /> : <Play className="text-black" />
        }
      </button>
    </div>
      {/* <audio controls src={audioFile} type="audio/mpeg"></audio> */}
    </div>
  )
}

export default Audioplayer
