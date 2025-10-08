import backgroundLogo from "../assets/map.png";

const customStyles = {
//transform: "rotateX(65deg) rotateY(0deg) rotateZ(35deg) ",
  transform: "rotateX(55deg) rotateY(0deg) rotateZ(18deg) scale(1.08)",
  boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)",
};

const MapImage = () => (
  <div className="flex w-1/2 justify-around">
    <img
      className="w-3/5 object-fit h-auto"
      style={customStyles}
      src={backgroundLogo}
      alt="Logo"
    />
  </div>
);

export default MapImage;
