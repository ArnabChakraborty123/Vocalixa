import { Download } from "lucide-react";

const Section = ({ text, setText, convertTexttoSpeech }) => {
  return (
    <div
      className="bg-white shadow-lg rounded-lg p-4 transition-all duration-300 ease-in-out hover:shadow-2xl"
      style={{
        backdropFilter: "blur(30px)",
        WebkitBackdropFilter: "blur(30px)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxWidth: "100%",
        boxSizing: "border-box"
      }}
    >
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        id="message"
        rows="10"
        className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Write your thoughts here..."
        style={{ maxWidth: "100%" }}
      ></textarea>
      <div className="flex mt-4 justify-center flex-wrap">
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded mt-4 flex transition-all duration-300 ease-in-out hover:shadow-xl mr-4"
          style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)" }}
          onClick={() => convertTexttoSpeech()}
        >
          Convert to speech
        </button>
        
      </div>
    </div>
  );
};

export default Section;
