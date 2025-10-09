import DownloadSection from "./DownloadSection";
import MapImage from "./MapImage";

const MainSection = ({
  text,
  handleDownload,
  setModalMenu,
  setModalTitle,
  setPdfUrl,
  setModalOpen,
}) => (
  <div className="w-full mt-10 md:my-10 mb-8 px-10 max-w-7xl mx-auto">
    <div className="flex flex-col lg:flex-row items-start justify-center w-full gap-8 lg:gap-12">
      {/* Left column: summary and download */}
      <div className="flex flex-col w-full lg:w-1/2 items-center md:items-center lg:items-start lg:pt-12 text-center lg:text-left">
        <p className="text-white font-semibold text-base lg:text-lg xl:text-xl text-justify leading-relaxed lg:leading-normal mb-6">
          {text('gameSummary')}
        </p>
        <DownloadSection
          text={text}
          handleDownload={handleDownload}
          setModalMenu={setModalMenu}
          setModalTitle={setModalTitle}
          setPdfUrl={setPdfUrl}
          setModalOpen={setModalOpen}
        />
      </div>
      {/* Right column: map image */}
      <div className="flex w-full lg:w-1/2 items-center justify-center lg:justify-end sm:my-30 mt-0">
        <MapImage />
      </div>
    </div>
  </div>
);

export default MainSection;