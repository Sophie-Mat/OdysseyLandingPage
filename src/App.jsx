import backgroundLogo from "./assets/map.png";
import nileLogo from "./assets/nile_logo_ship.png";
import greekflag from "./assets/greek_flag.png";
import ukflag from "./assets/uk_flag.png";
import instructions from "./assets/instructions.svg";
import information from "./assets/information.svg";
// import downloadGame from './assets/letsPlayOdyssey.zip';
import "./App.css";
import { useState } from "react";

import { useTranslation } from './TranslationProvder';

function App() {
  const customStyles = {
    transform: "rotateX(65deg) rotateY(0deg) rotateZ(35deg)",
  };


  const { text, language, setLanguage } = useTranslation();

  const languageSelect = () => {
    if (language === 'el') {
      setLanguage('en')
    } else if (language === 'en') {
      setLanguage('el')
    }
    console.log(language)
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMenu, setModalMenu] = useState(null); // null, 'instructions', or 'answers'
  const [pdfUrl, setPdfUrl] = useState("");

  /*const handleClick = (url) => {
      setPdfUrl(`/${url}`);
      setModalOpen(true);
  };*/

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = "/letsPlayOdyssey.zip"; // Resolved path from the import.
    link.download = "letsPlayOdyssey.zip"; // Optional: Rename the file during download.
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <div className="w-screen md:h-screen bg-regal-blue flex flex-col items-center justify-start relative overfloww-y-auto overflow-x-hidden">

      <div className="w-full flex flex-row items-center justify-end mr-20 mt-10">
        <p className="mr-2 text-white">{text('languageText')}</p>
        {/* <img src={ukflag} alt="language Flag" className="w-12 flex-shrink-0" /> */}
        <button
          type="button"
          onClick={languageSelect}
          className="flex items-center justify-center p-2 bg-transparent border-none cursor-pointer focus:outline-none"
        >
          <img src={language=="en"? ukflag : greekflag} alt="Language Flag" className="w-12 flex-shrink-0" />
        </button>
      </div>


      <div className="flex font-luckiest-guy mt-10">
        <p className="text-3xl text-white tracking-wider font-bold md:text-6xl lg:text-8xl flex space-x-1 [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)]">
          <span className="relative top-8">Π</span>
          <span className="relative top-6">α</span>
          <span className="relative top-4">ί</span>
          <span className="relative top-2">ζ</span>
          <span className="relative top-4">ο</span>
          <span className="relative top-2">υ</span>
          <span className="relative top-1">μ</span>
          <span className="relative top-0">ε</span>
          <span className="relative top-0"> </span>
          <span className="relative top-0"> </span>
          <span className="relative top-0"> </span>
          <span className="relative top-0"> </span>
          <span className="relative top-0"> </span>
          <span className="relative top-0"> </span>
          <span className="relative top-0"> </span>
          <span className="relative top-1">Ο</span>
          <span className="relative top-4">δ</span>
          <span className="relative top-5">ύ</span>
          <span className="relative top-6">σ</span>
          <span className="relative top-4">σ</span>
          <span className="relative top-2">ε</span>
          <span className="relative top-0">ι</span>
          <span className="relative top-1">α</span>
          <span className="relative top-3">;</span>
        </p>
      </div>

      {/*md:pl-20*/}
      <div className="w-full flex-1 mt-10 md:mt-20 mb-8 px-2 md:px-20 md:mb-0">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
          {/* Text Section */}
          <div className="flex flex-col md:w-3/5 w-full items-center md:items-start">
            <p className="text-white font-semibold text-lg md:text-xl text-justify leading-relaxed md:leading-normal">
              {text('gameDescription')}
            </p>
          </div>

          {/* Button Section */}
          <div className="flex flex-col md:w-3/5 w-full items-center justify-center">
            <button
              // onClick={() => handleClick(text('downloadLink'))}
              onClick={handleDownload}
              className="bg-orange-400 hover:bg-orange-100 text-white hover:text-regal-blue font-bold py-4 px-6 md:py-6 md:px-12 rounded 
              inline-flex items-center justify-center shadow-[3px_3px_7px_rgba(0,70,100,0.7)] transition-all duration-200 ease-in-out"
            >
              <svg
                className="fill-current w-10 h-10 md:w-16 md:h-16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span className="font-bold text-2xl md:text-4xl ml-4">
                {text('downloadButtonText')}
              </span>
            </button>
            {/* Installation Guide */}
            {text('instalationGuide') !== "NULL" && (
              <button
                className="mt-4 bg-orange-400 hover:bg-orange-100 text-white hover:text-regal-blue font-semibold py-2 px-4 rounded shadow transition-all duration-200 outline-none border-none"
                onClick={() => {
                  setModalMenu(null);
                  setModalTitle(text('installationText'));
                  setPdfUrl(text('instalationGuide'));
                  setModalOpen(true);
                }}
                style={{ boxShadow: "none" }}
              >
                {text('installationText')}
              </button>
            )}
          </div>
        </div>
      </div>



      <div className="flex flex-col md:flex-row w-full bg-regal-blue md:px-20 md:right-0 items-center justify-center">
        
        {/* Modal for PDF */}
        {modalOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
            onClick={() => setModalOpen(false)}
          >
            <div
              className="bg-white rounded-lg shadow-lg p-4 max-w-3xl w-full h-[80vh] flex flex-col relative"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-black">{modalTitle}</h2>
                <button
                className="absolute top-3 right-5 text-black text-2xl font-bold"
                onClick={() => setModalOpen(false)}
                aria-label="Close"
              >
                &times;
              </button>
              </div>
              {/* Modal Content */}
              {modalMenu === 'instructions' && !pdfUrl && (
                <div className="flex flex-col space-y-4">
                  <button
                    className="bg-blue-200 hover:bg-blue-300 text-black font-bold py-2 px-4 rounded"
                    onClick={() => setPdfUrl(text('instructionsPrimaryLink'))}
                  >
                    {text('instructionsPrimaryText')}
                  </button>
                  <button
                    className="bg-blue-200 hover:bg-blue-300 text-black font-bold py-2 px-4 rounded"
                    onClick={() => setPdfUrl(text('instructionsHighLink'))}
                  >
                    {text('instructionsHighText')}
                  </button>
                </div>
              )}
              {modalMenu === 'answers' && !pdfUrl && (
                <div className="flex flex-col space-y-4">
                  <button
                    className="bg-green-200 hover:bg-green-300 text-black font-bold py-2 px-4 rounded"
                    onClick={() => setPdfUrl(text('answersPrimaryLink'))}
                  >
                    {text('answersPrimaryText')}
                  </button>
                  <button
                    className="bg-green-200 hover:bg-green-300 text-black font-bold py-2 px-4 rounded"
                    onClick={() => setPdfUrl(text('answersHighLink'))}
                  >
                    {text('answersHighText')}
                  </button>
                </div>
              )}
              {pdfUrl && (
                <iframe
                  src={pdfUrl}
                  title="PDF Viewer"
                  className="flex-1 w-full h-full"
                />
              )}
              {/* Back button if viewing PDF */}
              {pdfUrl && (
                <button
                  className="mt-4 bg-gray-200 hover:bg-gray-300 text-black font-bold py-2 px-4 rounded"
                  onClick={() => setPdfUrl("")}
                >
                  {text('backButtonText')}
                </button>
              )}
            </div>
          </div>
        )}

        <div className="flex w-full md:w-1/2 flex-row items-center justify-around px-4 space-x-3">
          {/* Button 1 */}
          <button
          onClick={() => {
            //handleClick(text('instructionsPrimaryLink'));
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

          {/* Button 2 */}
          <button
            onClick={() => {
              //handleClick(text('answersPrimaryLink'));
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

        <div className="flex w-1/2 justify-around">
          {/*md:w-2/5*/}
          <img
            className="w-3/5 object-fit  h-auto"
            style={customStyles}
            src={backgroundLogo}
            alt="Logo"
          />
        </div>
      </div>

      <div className="bg-opacity-100 flex w-full items-center justify-center py-5">
        <div className="flex items-center justify-center md:mr-20"> 
        {/* md:justify-end  */}
          {/* <span className="fill-white text-1xl text-regal-blue tracking-wider font-bold md:text-1xl lg:text-2xl shape-wave mr-10">Created By</span>
        <img className="w-3/12 md:w-1/12 h-auto" src={creatorsLogo} alt="Logo" /> */}
          {/* <span className="text-1xl text-white tracking-wider font-bold md:text-1xl lg:text-2xl shape-wave mr-40">
            Developed By
          </span>
          <img className="w-2/12 md:w-2/12 h-auto" src={nileLogo} alt="Logo" /> */}
          <span className="text-white text-1xl tracking-wider font-bold md:text-1xl">
          Copyright © 2025  Hellenic Mediterranean University, Katerina Damianaki, Zoi Lekka All rights reserved
          <br/>NILE Lab unit of AISE Lab
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
