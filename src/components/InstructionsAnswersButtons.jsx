import instructions from "../assets/instructions.svg";
import information from "../assets/information.svg";

const InstructionsAnswersButtons = ({ text, setModalMenu, setModalTitle, setPdfUrl, setModalOpen }) => (
  <div className="flex w-full md:w-1/2 flex-row items-center justify-around px-4 space-x-3">
    <button
      onClick={() => {
        setModalMenu('instructions');
        setModalTitle(text('instructionsButtonText'));
        setPdfUrl("");
        setModalOpen(true);
      }}
      className="group flex flex-col w-44 h-32 rounded-lg bg-[#99d2f0]/50 backdrop-blur-md 
        items-center justify-center shadow-[3px_3px_7px_rgba(0,70,100,0.7)] 
        transform hover:scale-105 hover:shadow-lg transition-all duration-300"
    >
      <img className="w-12 h-auto" src={instructions} alt="Logo" />
      <span
        className="italic font-normal text-xl sm:text-2xl text-white 
          opacity-80 group-hover:opacity-100 px-1 text-center"
      >
        {text('instructionsButtonText')}
      </span>
    </button>
    <button
      onClick={() => {
        setModalMenu('answers');
        setModalTitle(text('answersButtonText'));
        setPdfUrl("");
        setModalOpen(true);
      }}
      className="group flex flex-col w-44 h-32 rounded-lg bg-[#99d2f0]/50 backdrop-blur-md 
        items-center justify-center shadow-[3px_3px_7px_rgba(0,70,100,0.7)] 
        transform hover:scale-105 hover:shadow-lg transition-all duration-300"
    >
      <img className="w-12 h-auto" src={information} alt="Logo" />
      <span
        className="italic font-normal text-xl sm:text-2xl text-white 
          opacity-80 group-hover:opacity-100 px-1 text-center"
      >
        {text('answersButtonText')}
      </span>
    </button>
  </div>
);

export default InstructionsAnswersButtons;