const DownloadSection = ({ text, handleDownload, setModalMenu, setModalTitle, setPdfUrl, setModalOpen }) => (
  <div className="flex flex-col sm:flex-row w-full items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-6 py-6">
    <button
      onClick={handleDownload}
      className="bg-[#cb6d39] hover:bg-[#d17d50] text-white font-bold py-6 px-8 rounded-full
        inline-flex items-center justify-center shadow transition-all duration-200 ease-in-out"
    >
      <svg
        className="fill-current w-7 h-7"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
      >
        <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
      </svg>
      <span className="font-bold text-xl ml-2">
        {text('downloadButtonText')}
      </span>
    </button>
    {text('instalationGuide') !== "NULL" && (
      <button
        className="hover:underline text-white italic font-semibold px-2 bg-transparent outline-none border-none"
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
);

export default DownloadSection;