import InstructionsAnswersButtons from "./InstructionsAnswersButtons";
import InstructionsAnswersModal from "./InstructionsAnswersModal";

const OptionsSection = ({
  modalOpen,
  modalTitle,
  setModalTitle,
  modalMenu,
  pdfUrl,
  setModalOpen,
  setPdfUrl,
  text,
  setModalMenu,
}) => (
  <div className="flex flex-1 flex-col md:flex-row w-full bg-regal-blue items-center justify-center mb-10">
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
  </div>
);

export default OptionsSection;