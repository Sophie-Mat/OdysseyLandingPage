import backgroundLogo from './assets/map.png'
import nileLogo from './assets/nile_logo_ship.png'
import creatorsLogo from './assets/icon_creators_ship.png'
import trireme from './assets/trireme.png'
import './App.css'

function App() {
  const customStyles = {
    transform: 'rotateX(65deg) rotateY(0deg) rotateZ(35deg)',
  };

  return (
    <div className="w-screen md:h-screen bg-regal-blue flex flex-col items-center justify-start relative overfloww-y-auto overflow-x-hidden">
      <div className="flex font-luckiest-guy mt-10">
        {/* <p className="fill-white text-3xl text-white tracking-wider font-bold md:text-6xl lg:text-8xl shape-wave [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)]"
          x="0" y="150">
          Παίζουμε Οδύσσεια;
        </p> */}
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
        <div className="flex flex-col md:flex-row space-y-4 ">
          <div className="flex md:w-1/2 items-center justify-center">
            <div className="flex flex-col">
              <p className="text-white font-semibold text-xl text-center md:text-justify">
                Το "Παίζουμε Οδύσσεια" είναι ένα επιτραπέζιο παιχνίδι επανάληψης στην Ομήρου Οδύσσεια σχεδιασμένο για τον εκπαιδευτικό που
                επιθυμεί μια εναλλακτική διδασκαλία κατά τη συνολική θεώρηση του έπους. Λειτουργεί ως εργαλείο επανάληψης των κύριων διδακτικών
                στόχων που έθεσε ο εκπαιδευτικός κατά τη διάρκεια της σχολικής χρονιάς και συνδυάζει τη γνώση με την απόλαυση τόσο για τους
                μαθητές όσο και για τον ίδιο τον εκπαιδευτικό. Το επιτραπέζιο παιχνίδι έχει εγκριθεί από το υπουργείο Παιδείας (ΥΠ.Π.Ε.Θ 937/03-01-2018) και το θεωρητικό
                του πλαίσιο έχει παρουσιαστεί στο 4ο Πανελλήνιο Συνέδριο του Π.Τ.Δ.Ε του Ε.Κ.Π.Α "Ποιότητα στην Εκπαίδευση" το 2012, αφού
                δοκιμάστηκε στην τάξη από τις εκπαιδευτικούς ΠΕ02 που το σχεδίασαν, Κατερίνα Δαμιανάκη και Ζωή Λέκκα.
              </p>

              <p className="text-white font-semibold text-xl text-center md:text-justify tabbed indent-8">
                Στόχος του παιχνιδιού είναι οι μαθητές σε ομάδες και έχοντας στη διάθεσή τους τρεις βοήθειες, να οδηγήσουν τον "Οδυσσέα" τους
                στην Ιθάκη, αφού περάσουν από δοκιμασίες που στηρίζονται σε γνωστικές ερωτήσεις και δραματοποιήσεις εμπνευσμένες από το περιεχόμενο
                της Οδύσσειας. Με την ολοκλήρωση των δοκιμασιών οι ομάδες κερδίζουν λάφυρα. Νικήτρια αναδεικνύεται η ομάδα που θα συγκεντρώσει
                τα περισσότερα λάφυρα και θα οδηγήσει πρώτη τον "Οδυσσέα" της στην Ιθάκη.
              </p>
            </div>
          </div>

          <div className="flex md:w-1/2 items-center justify-end">
            <button className="bg-orange-400 hover:bg-orange-100 text-white hover:text-regal-blue font-bold py-6 px-12 
            rounded inline-flex items-center justify-center shadow-[3px_3px_7px_rgba(0,70,100,0.7)]">
              <svg className="fill-current w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span className="font-bold text-4xl md:text-6xl md:px-12 py-1 md:py-5">Download</span>
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row w-full bg-regal-blue md:px-20 md:right-0 items-center justify-center">
      <div className="flex w-full md:w-1/2 flex-row items-center justify-around px-4 space-x-3">
  {/* Button 1 */}
  <button className="group flex flex-col w-44 h-32 rounded-lg bg-[#99d2f0]/50 backdrop-blur-md 
                    items-center justify-center shadow-[3px_3px_7px_rgba(0,70,100,0.7)] 
                    transform hover:scale-105 hover:shadow-lg transition-all duration-300">
    <img className="w-12 h-auto -scale-x-100" src={trireme} alt="Logo" />
    <span className="italic font-normal text-xl sm:text-2xl text-white 
                    opacity-80 group-hover:opacity-100 px-1 text-center">
      Οδηγίες Χρήσης
    </span>
  </button>

  {/* Button 2 */}
  <button className="group flex flex-col w-44 h-32 rounded-lg bg-[#99d2f0]/50 backdrop-blur-md 
                    items-center justify-center shadow-[3px_3px_7px_rgba(0,70,100,0.7)] 
                    transform hover:scale-105 hover:shadow-lg transition-all duration-300">
    <img className="w-12 h-auto" src={trireme} alt="Logo" />
    <span className="italic font-normal text-xl sm:text-2xl text-white 
                    opacity-80 group-hover:opacity-100 px-1 text-center">
      Απαντήσεις
    </span>
  </button>
</div>


        <div className="flex w-1/2 justify-around">
          {/*md:w-2/5*/}
          <img className="w-3/5 object-fit  h-auto" style={customStyles} src={backgroundLogo} alt="Logo" />
        </div>
      </div>

      <div className="bg-opacity-100 flex w-full items-center justify-end">
        <div className="flex items-center justify-center md:justify-end md:mr-20">
        {/* <span className="fill-white text-1xl text-regal-blue tracking-wider font-bold md:text-1xl lg:text-2xl shape-wave mr-10">Created By</span>
        <img className="w-3/12 md:w-1/12 h-auto" src={creatorsLogo} alt="Logo" /> */}
          <span className="text-1xl text-white tracking-wider font-bold md:text-1xl lg:text-2xl shape-wave mr-10">Developed By</span>
          <img className="w-2/12 md:w-2/12 h-auto" src={nileLogo} alt="Logo" />
        </div>
      </div>

    </div>
  )
}

export default App
