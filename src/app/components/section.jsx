import { Download } from "lucide-react";

const Section = ({text,setText}) => {
    return (
      <div
        className="bg-white shadow-lg rounded-lg p-4 transition-all duration-300 ease-in-out hover:shadow-2xl "
        style={{
          backdropFilter: "blur(30px)",
          WebkitBackdropFilter: "blur(30px)",
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          boxShadow: "0px 4px 30px rgba(0, 0, 0, 0.1)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
        }}
      >
        <textarea
        value={text}
        onChange={(e)=>setText(e.target.value)}
          id="message"
          rows="10"
          className="block p-2.5 w-full  text-sm text-gray-900  rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 pr-10"
          placeholder="Write your thoughts here..."
        ></textarea>
        <div className="flex  mt-4">
        <button
          className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-2 px-4 rounded items-center mt-4 flex transition-all duration-300 ease-in-out hover:shadow-xl mr-6"
          style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.3)" }}
        >
          Convert to speech
        </button>
        <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-4 mt-4 rounded-full flex items-center justify-center shadow-lg transition duration-300 ease-in-out transform hover:scale-110"
      style={{ width: "50px", height: "50px" }}
    >
      <Download size={24} />
    </button>
        </div>
      </div>
    );
  };
  
  export default Section;
  