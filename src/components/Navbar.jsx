import { useState } from 'react';
import { GlobeSimple, List, X } from '@phosphor-icons/react';
import logo from '../assets/Logo.png';

const NAV_ITEMS = [
  { id: 'about', label: 'Tentang Kami' },
  { id: 'menu', label: 'Menu' },
  { id: 'testimoni', label: 'Testimoni' },
  { id: 'lokasi', label: 'Lokasi' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="relative z-10 mx-auto max-w-[1350px] px-4 py-6 flex items-center justify-between">
      <img src={logo} className="w-[150px] sm:w-[180px]" alt="Logo" />

      {/* Mobile Menu Button */}
      <button className="cursor-pointer sm:hidden text-[#3D91FF] text-2xl" onClick={toggleMenu}>
        {menuOpen ? <X size={25} weight="bold" /> : <List size={25} weight="bold" />}
      </button>

      {/* Navigation Items */}
      <ul
        className={`absolute sm:static rounded-2xl top-20 left-0 w-full sm:w-auto bg-[#3D91FF] sm:bg-transparent sm:flex gap-10 text-[15px] text-white transition-transform duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden'} sm:block`}
      >
        {NAV_ITEMS.map((item) => (
          <li key={item.id} className="py-2 sm:py-0 text-center sm:text-left">
            <button onClick={() => scrollToSection(item.id)} className="cursor-pointer w-full block sm:inline-block">
              {item.label}
            </button>
          </li>
        ))}
      </ul>

      {/* Right Controls */}
      <div className="hidden sm:flex gap-6 text-[12px] text-[#181E6A]">
        <div className="flex items-center gap-1">
          <GlobeSimple size={25} weight="bold" />
          <p className="text-[15px]">ID</p>
        </div>
        <button onClick={() => scrollToSection('footer')} className="cursor-pointer rounded-[10px] bg-[#3D91FF] px-6 py-2 text-white drop-shadow-[4px_5px_1px_rgba(0,0,0,0.25)]">
          Kontak
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
