import { useNavigate } from 'react-router-dom';
import { HouseSimple } from '@phosphor-icons/react';
import cup from '../../assets/cup.svg';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="font-[jua]">
      <nav className="bg-[#3D91FF] w-full h-[80px] fixed top-0 z-90 shadow-md flex items-center px-6 md:px-10">
        <img className="absolute top-0 left-12 w-30" src={cup} alt="cup" />
        <div className="flex justify-between items-center w-full max-w-[1400px] mx-auto">
          <h1 className="text-white relative left-26 text-[15px] md:text-[20px]">Menu Kami</h1>
          <ul className="hidden md:flex gap-8 text-white text-[15px]">
            <li className="cursor-pointer">Kopi</li>
            <li className="cursor-pointer">Non-Kopi</li>
            <li className="cursor-pointer">Snack</li>
            <li className="cursor-pointer">Seni</li>
          </ul>
          <button onClick={() => navigate('/')} className="cursor-pointer text-black flex items-center gap-2 text-[15px] bg-[#FFFF00] px-3 py-2 rounded-lg drop-shadow-[4px_5px_1px_rgba(0,0,0,0.25)] hover:scale-105 transition-transform">
            <HouseSimple size={20} weight="bold" /> Beranda
          </button>
        </div>
      </nav>
      <div className="bg-[#FFFF00] w-full h-4 top-20 z-90 fixed"></div>
    </div>
  );
};

export default Navbar;
