const DownloadSection = ({ text, handleDownload, setModalMenu, setModalTitle, setPdfUrl, setModalOpen }) => (
  <div className="flex flex-col md:w-3/5 w-full items-center justify-center">
    <button
      onClick={handleDownload}
      className="bg-[#cb6d39] hover:bg-[#d17d50] text-white font-bold py-4 px-6 md:py-6 md:px-12 rounded 
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
    {text('instalationGuide') !== "NULL" && (
      <button
        className="mt-2 hover:underline text-white italic font-semibold py-2 px-4 rounded shadow transition-all duration-200 outline-none border-none bg-transparent"
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