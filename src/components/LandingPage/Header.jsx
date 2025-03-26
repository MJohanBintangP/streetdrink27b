import { useNavigate } from 'react-router-dom';
import blobs from '../../assets/blobs.svg';
import headerImg from '../../assets/headerImg.svg';
import Navbar from './Navbar';

const Header = () => {
  const navigate = useNavigate();

  const preventImageTheft = (event) => {
    event.preventDefault();
  };

  return (
    <header id="about" className="relative h-screen bg-[#3D91FF] px-4 sm:px-8 md:px-12 lg:px-16 overflow-hidden select-none">
      {/* Background Images */}
      <img className="absolute right-20 top-20 w-60 sm:w-60 md:w-72 lg:w-80 xl:w-[550px] z-1 pointer-events-none" src={headerImg} alt="Header" onContextMenu={preventImageTheft} draggable={false} />
      <img className="absolute -right-40 -top-20 w-80 sm:w-[500px] md:w-[550px] lg:w-[600px] xl:w-[650px] max-w-screen overflow-hidden pointer-events-none" src={blobs} alt="Blobs" onContextMenu={preventImageTheft} draggable={false} />

      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <div className="mx-auto max-w-[320px] sm:max-w-7xl text-left sm:text-left">
        <h1 className="relative max-w-[200px] sm:max-w-[600px] top-62 sm:top-16 text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight select-none">&quot;Seger banget&#39; sehatnya dapet&quot;</h1>

        <div className="relative top-72 sm:top-50">
          <div className="mb-6 flex flex-col items-start sm:items-start text-left sm:text-left">
            <h2 className="mb-2 text-xl sm:text-2xl md:text-3xl text-[#FFFF00] select-none">Tentang Kami</h2>
            <p className="max-w-lg text-sm sm:text-base text-white select-none">
              Minuman jalanan yang berani tampil beda dengan racikan minuman yang InsyaAllah seger banget sehatnya dapet. Terbuat dari bahan dasar alami, seperti kopi, teh, madu (terapy) dengan sedikit rempah-rempah.
            </p>
          </div>

          <div className="flex flex-row sm:flex-row gap-4 text-white justify-start sm:justify-start">
            <a href="https://r.grab.com/g/2-1-6-C66BL74ATVKEWE" target="_blank" rel="noopener noreferrer">
              <button className="hover:scale-105 transition-transform cursor-pointer rounded-xl bg-[#181E6A] px-5 py-3 text-sm sm:text-base select-none">Pesan Sekarang</button>
            </a>
            <button onClick={() => navigate('/Menu')} className="hover:scale-105 transition-transform cursor-pointer rounded-xl border-2 border-white px-6 py-3 text-sm sm:text-base text-[#0B0253] select-none">
              Menu
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
