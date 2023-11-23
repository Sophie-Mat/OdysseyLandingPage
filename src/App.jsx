import backgroundLogo from './assets/map.png'
import nileLogo from './assets/nile_logo.png'
import './App.css'

function App() {
  const customStyles = {
    transform: 'rotateX(65deg) rotateY(0deg) rotateZ(35deg)',
  };
  
  return (
    <div className="w-screen h-screen bg-regal-blue flex flex-col items-center justify-center relative overfloww-y-auto overflow-x-hidden">
      <div className="flex-1 font-luckiest-guy mt-20">
          <text className="fill-white text-3xl text-white tracking-wider font-bold md:text-6xl lg:text-8xl shape-wave"
                x="0" y="150">
            Παίζουμε Οδύσσεια;
          </text>
      </div>
      
      
      <div className="w-full flex flex-col md:flex-row mt-10 md:pb-10 px-2 md:px-20 mb-8 md:mb-0 md:pl-20">
          <div className="flex md:w-1/2 items-center justify-center">
            <p className="text-white">
              Your paragraph text goes here. It will take half the screen width on medium and larger screens, and the full width on small screens.
              Tailwind is an increasingly popular and widely used framework, which makes it easier in some cases to build and ship features and products. In this guide, we&amp;apos ll be covering how you can vertically and horizontally center an element or text with tailwind.
      
              In another article, I&amp;apos ve already covered how to center an HTML element both horizontally and vertically using CSS. If you want to learn about that, click here.
            </p>
          </div>

        <div className="flex md:w-1/2 items-center justify-center">
            <button className="bg-orange-300 hover:bg-orange-100 text-orange-800 font-bold py-2 px-4 rounded-full inline-flex items-center">
              <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
              <span className="text-orange-800 px-12 py-1 md:py-5">Download</span>
            </button>
          </div>
      </div>
      
      <div className="flex flex-col md:flex-row w-full bg-regal-blue md:right-0 items-center justify-center">
        <div className="flex w-1/2 flex-col md:flex-row space-y-3 md:space-y-0 items-center justify-center md:justify-around px-4">
            <button className="bg-opacity-70 bg-gray-300 hover:bg-orange-100 text-orange-800 font-bold py-2 px-4
                rounded-full inline-flex items-center justify-center">
              <span className="italic text-orange-800 px-1">Οδηγίες Χρήσης</span>
            </button>
            <button className="bg-opacity-70 bg-gray-300 hover:bg-orange-100 text-orange-800 font-bold py-2 px-4
                rounded-full inline-flex items-center justify-center">
              <span className="italic text-orange-800 px-1">Απαντήσεις</span>
              </button>
        </div>
       
        <div className="flex w-1/2 justify-around">
          <img className="w-3/5 md:w-2/5 h-auto" style={customStyles} src={backgroundLogo} alt="Logo" />
          {/*max-w-full order-last*/}
        </div>
      </div>
      
      <div className="bg-gray-100 bg-opacity-100 flex w-full items-center justify-end">
        <div className="flex items-center justify-center md:justify-end md:mr-32">
          <span className="fill-white text-1xl text-regal-blue tracking-wider font-bold md:text-1xl lg:text-2xl shape-wave mr-10">Developed By</span>
          <img className="w-3/12 md:w-2/12 h-auto" src={nileLogo} alt="Logo" />
        </div>
      </div>

</div>
  )
}

export default App
