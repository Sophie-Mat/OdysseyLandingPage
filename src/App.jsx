import backgroundLogo from './assets/map.png'
import nileLogo from './assets/nile_logo.png'
import card1 from './assets/card1.png'
import trireme from './assets/trireme.png'
import './App.css'

function App() {
  const customStyles = {
    transform: 'rotateX(65deg) rotateY(0deg) rotateZ(35deg)',
  };
  
  return (
    <div className="w-screen md:h-screen bg-regal-blue flex flex-col items-center justify-center relative overfloww-y-auto overflow-x-hidden">
      <div className="flex font-luckiest-guy mt-20">
        <text className="fill-white text-3xl text-white tracking-wider font-bold md:text-6xl lg:text-8xl shape-wave [text-shadow:_0_5px_0_rgb(0_0_0_/_40%)]"
                x="0" y="150">
            Παίζουμε Οδύσσεια;
          </text>
      </div>
      
      
      {/*md:pl-20*/}
      <div className="w-full flex-1 mt-10 md:mt-40 mb-8 px-2 md:px-20 md:mb-0">
        <div className="flex flex-col md:flex-row space-y-4 ">
          <div className="flex md:w-1/2 items-center justify-center">
            <p className="text-white font-semibold text-xl text-center md:text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus faucibus scelerisque eleifend donec pretium. Amet purus gravida quis blandit turpis cursus in hac habitasse. Venenatis urna cursus eget nunc scelerisque viverra mauris in. Ac tincidunt vitae semper quis lectus nulla. Amet aliquam id diam maecenas ultricies. Metus vulputate eu scelerisque felis imperdiet proin. Mattis aliquam faucibus purus in massa tempor nec feugiat. Odio tempor orci dapibus ultrices in iaculis nunc sed. Quis imperdiet massa tincidunt nunc pulvinar. Ac tincidunt vitae semper quis. Curabitur vitae nunc sed velit. Dui id ornare arcu odio ut sem. Neque volutpat ac tincidunt vitae semper.
              Mauris sit amet massa vitae tortor condimentum lacinia quis. Elit eget gravida cum sociis natoque penatibus et magnis. Aenean euismod elementum nisi quis eleifend quam adipiscing vitae proin. In iaculis nunc sed augue lacus viverra. Mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Vitae proin sagittis nisl rhoncus mattis rhoncus urna neque viverra. Turpis tincidunt id aliquet risus feugiat in ante. Varius vel pharetra vel turpis nunc eget lorem. Suspendisse sed nisi lacus sed viverra tellus in hac habitasse. Lacus luctus accumsan tortor posuere ac ut consequat semper. Nisl vel pretium lectus quam id leo in vitae turpis. Purus faucibus ornare suspendisse sed nisi lacus sed viverra tellus. Fermentum odio eu feugiat pretium.
            </p>
          </div>

        <div className="flex md:w-1/2 items-center justify-end">
          <button className="bg-orange-400 hover:bg-orange-100 text-white hover:text-regal-blue font-bold py-6 px-12 rounded inline-flex items-center justify-center">
              <svg className="fill-current w-16 h-16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
              </svg>
            <span className="font-bold text-4xl md:text-6xl md:px-12 py-1 md:py-5">Download</span>
            </button>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col md:flex-row w-full bg-regal-blue md:px-20 md:right-0 items-center justify-center">
        <div className="flex w-1/2 flex-col md:flex-row space-y-3 md:space-y-0 items-top justify-center md:justify-around px-4">
          <div className="flex flex-col w-1/3 rounded-lg items-center shadow-[1px_1px_3px_rgba(0,0,0,0.7)]">
            <img className="w-3/12 md:w-2/6 h-auto -scale-x-100" src={trireme} alt="Logo" />
            <button className="bg-opacity-0 bg-gray-300 text-orange-800 font-bold py-2 px-4
                  rounded-full inline-flex items-center justify-center">
              <span className="italic font-normal text-4xl md:text-5xl text-[#99d2f0] hover:text-orange-200 px-1">Οδηγίες Χρήσης</span>
              </button>
          </div>
          <div className="flex flex-col w-1/3 rounded-lg items-center shadow-[1px_1px_3px_rgba(0,0,0,0.7)]">
            <img className="w-3/12 md:w-2/6 h-auto" src={trireme} alt="Logo" />
            <button className="bg-opacity-0 bg-gray-300 text-orange-800 font-bold py-2 px-4
                rounded-full inline-flex items-center justify-center">
              <span className="italic font-normal text-4xl md:text-5xl text-[#99d2f0] hover:text-orange-200  px-1">Απαντήσεις</span>
              </button>
          </div>
        </div>
       
        <div className="flex w-1/2 justify-around">
          {/*md:w-2/5*/}
          <img className="w-3/5 object-fit  h-auto" style={customStyles} src={backgroundLogo} alt="Logo" />
        </div>
      </div>
      
      <div className="bg-gray-100 bg-opacity-100 flex w-full items-center justify-end">
        <div className="flex items-center justify-center md:justify-end md:mr-32">
          <span className="fill-white text-1xl text-regal-blue tracking-wider font-bold md:text-1xl lg:text-2xl shape-wave mr-10">Developed By</span>
          <img className="w-3/12 md:w-1/12 h-auto" src={nileLogo} alt="Logo" />
        </div>
      </div>

</div>
  )
}

export default App
