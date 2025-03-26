import { useState } from 'react';
import { User, X } from '@phosphor-icons/react';
import whatsapp from '../../assets/whatsapp.svg';
import instagram from '../../assets/instagram.svg';
import youtube from '../../assets/youtube.svg';

const SocialMedia = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-12 bottom-12 sm:right-26 sm:bottom-16 flex flex-col items-center gap-3 z-90">
      {isOpen && (
        <>
          <a
            href="https://wa.me/6289528445401?text=Halo%20Streetdrink27b,%20Saya%20ingin%20pesan..."
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white w-[55px] h-[55px] rounded-full flex justify-center items-center drop-shadow-[4px_6px_3px_rgba(0,0,0,0.25)] transition-all"
          >
            <img src={whatsapp} alt="" />
          </a>
          <a
            href="https://www.instagram.com/streetdrink27b?igsh=ZGUzMzM3NWJiOQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white w-[55px] h-[55px] rounded-full flex justify-center items-center drop-shadow-[4px_6px_3px_rgba(0,0,0,0.25)] transition-all"
          >
            <img src={instagram} alt="" />
          </a>
          <a
            href="https://youtube.com/@streetdrink27b?feature=shared"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white w-[55px] h-[55px] rounded-full flex justify-center items-center drop-shadow-[4px_6px_3px_rgba(0,0,0,0.25)] transition-all"
          >
            <img src={youtube} alt="" />
          </a>
        </>
      )}
      <button onClick={() => setIsOpen(!isOpen)} className="cursor-pointer bg-[#FFFF00] drop-shadow-[4px_6px_3px_rgba(0,0,0,0.25)] w-[55px] h-[55px] rounded-full flex justify-center items-center z-90 transition-all">
        {isOpen ? <X size={25} weight="bold" /> : <User size={25} weight="bold" />}
      </button>
    </div>
  );
};

export default SocialMedia;
