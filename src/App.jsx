// import downloadGame from './assets/letsPlayOdyssey.zip';
import "./App.css";
import { useState } from "react";
import { useTranslation } from './TranslationProvder';
import LanguageSwitcher from "./components/LanguageSwitcher";
import Header from "./components/Header";
import MainSection from "./components/MainSection";
import InstructionsAnswersButtons from "./components/InstructionsAnswersButtons";
import Footer from "./components/Footer";
import InstructionsAnswersModal from "./components/InstructionsAnswersModal";
import OptionsSection from "./components/OptionsSection";
import GameDescriptionSection from "./components/GameDescriptionSection";

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
    <div className="min-h-screen w-full bg-regal-blue flex flex-col items-center justify-start relative overflow-y-auto overflow-x-hidden">
      <LanguageSwitcher language={language} setLanguage={setLanguage} text={text} />
      <Header language={language}/>
      <MainSection
        text={text}
        handleDownload={handleDownload}
        setModalMenu={setModalMenu}
        setModalTitle={setModalTitle}
        setPdfUrl={setPdfUrl}
        setModalOpen={setModalOpen}
      />
      {/* New Game Description Section */}
      <GameDescriptionSection text={text} />
      <OptionsSection
        modalOpen={modalOpen}
        modalTitle={modalTitle}
        setModalTitle={setModalTitle}
        modalMenu={modalMenu}
        pdfUrl={pdfUrl}
        setModalOpen={setModalOpen}
        setPdfUrl={setPdfUrl}
        text={text}
        setModalMenu={setModalMenu}
      />
      <Footer />
    </div>
  );
}

export default App;
