import greekflag from "../assets/greek_flag.png";
import ukflag from "../assets/uk_flag.png";

const LanguageSwitcher = ({ language, setLanguage, text }) => (
  <div className="w-full flex flex-row items-center justify-end mr-20 mt-10">
    <p className="mx-2 text-white">{text('languageText')}</p>
    <button
      type="button"
      onClick={() => setLanguage(language === 'el' ? 'en' : 'el')}
      className="flex items-center justify-center p-2 bg-transparent border-none cursor-pointer"
    >
      <img src={language === "en" ? greekflag : ukflag} alt="Language Flag" className="w-12 flex-shrink-0" />
    </button>
  </div>
);

export default LanguageSwitcher;