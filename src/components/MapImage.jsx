import backgroundLogo from "../assets/map.png";

const customStyles = {
  transform: "rotateX(55deg) rotateY(0deg) rotateZ(18deg) scale(0.95)",
  boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.5)",
  transformOrigin: "center center",
};

const MapImage = () => (
  <div className="flex w-full h-full items-center justify-center">
    <img
      className="w-4/5 max-w-xl object-fit h-auto"
      style={customStyles}
      src={backgroundLogo}
      alt="Logo"
    />
  </div>
);

export default MapImage;
