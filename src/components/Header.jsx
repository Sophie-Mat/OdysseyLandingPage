const Header = ({ language }) => (
  <div className="flex font-playpen-sans mt-4 mb-12">
    <p className="text-3xl text-white font-bold md:text-6xl lg:text-8xl flex space-x-1 [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)]">
      {language === "el" ? (
        <>
          <span className="relative top-8">Π</span>
          <span className="relative top-6">α</span>
          <span className="relative top-4">ί</span>
          <span className="relative top-2">ζ</span>
          <span className="relative top-4">ο</span>
          <span className="relative top-2">υ</span>
          <span className="relative top-1">μ</span>
          <span className="relative top-0">ε</span>
          <span className="relative top-0 p-4"> </span>
          <span className="relative top-1">Ο</span>
          <span className="relative top-4">δ</span>
          <span className="relative top-5">ύ</span>
          <span className="relative top-6">σ</span>
          <span className="relative top-4">σ</span>
          <span className="relative top-2">ε</span>
          <span className="relative top-0">ι</span>
          <span className="relative top-1">α</span>
          <span className="relative top-3">;</span>
        </>
      ) : (
        <>
          <span className="relative top-8">L</span>
          <span className="relative top-6">e</span>
          <span className="relative top-4">t'</span>
          <span className="relative top-3">s</span>
          <span className="relative top-0 p-4" />
          <span className="relative top-2">p</span>
          <span className="relative top-1">l</span>
          <span className="relative top-3">a</span>
          <span className="relative top-5">y</span>
          <span className="relative top-0 p-4" />
          <span className="relative top-6">O</span>
          <span className="relative top-8">d</span>
          <span className="relative top-6">y</span>
          <span className="relative top-4">s</span>
          <span className="relative top-2">s</span>
          <span className="relative top-1">e</span>
          <span className="relative top-3">y</span>
          <span className="relative top-5">!</span>
        </>
      )}
    </p>
  </div>
);

export default Header;