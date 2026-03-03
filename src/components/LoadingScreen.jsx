import logo from "../assets/Logo.png";

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#3D91FF]">
      <img
        src={logo}
        alt="StreetDrink27B"
        className="loading-logo w-[180px] sm:w-[220px]"
      />
      <div className="mt-6 flex gap-2">
        <span className="loading-dot"></span>
        <span className="loading-dot loading-dot-delay-1"></span>
        <span className="loading-dot loading-dot-delay-2"></span>
      </div>
    </div>
  );
};

export default LoadingScreen;
