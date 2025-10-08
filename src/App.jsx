// import downloadGame from './assets/letsPlayOdyssey.zip';
import "./App.css";
import { useState } from "react";
import { useTranslation } from './TranslationProvder';
import LanguageSwitcher from "./components/LanguageSwitcher";
import Header from "./components/Header";
import DownloadSection from "./components/DownloadSection";
import InstructionsAnswersButtons from "./components/InstructionsAnswersButtons";
import MapImage from "./components/MapImage";
import Footer from "./components/Footer";
import InstructionsAnswersModal from "./components/InstructionsAnswersModal";

function App() {

  const { text, language, setLanguage } = useTranslation();

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMenu, setModalMenu] = useState(null); // null, 'instructions', or 'answers'
  const [pdfUrl, setPdfUrl] = useState("");

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
      <LanguageSwitcher language={language} setLanguage={setLanguage} text={text} />
      <Header language={language}/>
      <div className="w-full flex-1 mt-10 md:mt-20 mb-8 px-2 md:px-20 md:mb-0">
        <div className="flex flex-col md:flex-row items-center md:space-x-8 space-y-6 md:space-y-0">
          <div className="flex flex-col md:w-3/5 w-full items-center md:items-start">
            <p className="text-white font-semibold text-lg md:text-xl text-justify leading-relaxed md:leading-normal">
              {text('gameDescription')}
            </p>
          </div>
          <DownloadSection
            text={text}
            handleDownload={handleDownload}
            setModalMenu={setModalMenu}
            setModalTitle={setModalTitle}
            setPdfUrl={setPdfUrl}
            setModalOpen={setModalOpen}
          />
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full bg-regal-blue md:px-20 md:right-0 items-center justify-center">
        <InstructionsAnswersModal
          modalOpen={modalOpen}
          modalTitle={modalTitle}
          setModalTitle={setModalTitle}
          modalMenu={modalMenu}
          pdfUrl={pdfUrl}
          setModalOpen={setModalOpen}
          setPdfUrl={setPdfUrl}
          text={text}
        />
        <InstructionsAnswersButtons
          text={text}
          setModalMenu={setModalMenu}
          setModalTitle={setModalTitle}
          setPdfUrl={setPdfUrl}
          setModalOpen={setModalOpen}
        />
        <MapImage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
