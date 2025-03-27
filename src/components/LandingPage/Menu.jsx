import { ClipboardText } from '@phosphor-icons/react';
import { useNavigate } from 'react-router-dom';
import blueCoco from '../../assets/blueCoco.jpg';
import kopisusuGulaAren from '../../assets/kopisusuGulaAren.jpg';
import kopisusuTarikCold from '../../assets/kopisusuTarikCold.jpg';
import susumaduBungatelang from '../../assets/susumaduBungatelang.jpg';
import Cookie from '../../assets/CookieSmall.svg';
import Bread from '../../assets/Bread.svg';
import Moon from '../../assets/Moon.svg';

const Menu = () => {
  const navigate = useNavigate();

  return (
    <div id="menu" className="mx-auto flex flex-col mt-[8em] mb-[15rem] max-w-[1400px] px-10 md:px-8">
      <div className="relative">
        <img className="absolute sm:w-8 w-8 sm:-top-15 -top-5 sm:left-86 left-60" src={Cookie} alt="Cookie" />
        <img className="absolute sm:w-10 w-10 sm:top-8 -top-20 sm:right-40 right-60" src={Bread} alt="Bread" />
        <img className="absolute sm:w-8 w-8 sm:-bottom-[52rem] -bottom-[150rem] sm:left-66 left-52" src={Moon} alt="Moon" />
      </div>
      <div className="flex gap-2 flex-col mb-[6rem]">
        <div className="flex items-center gap-2 text-white">
          <ClipboardText size={25} weight="bold" />
          <h1 className="font-bold">Menu</h1>
        </div>
        <h3 className="font-semibold text-[#FFFF00] text-[30px]">Best Seller</h3>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="max-w-[500px] text-white text-[15px] text-left">
            Ada juga camilan roti panggang klasik yang menarik dan cookies yang enak dan pas dinikmati bersama orang terkasih. Menu kami mampu menerima pesanan dalam jumlah sedikit dan banyak.
          </p>
          <button onClick={() => navigate('/Menu')} className="drop-shadow-[4px_5px_1px_rgba(0,0,0,0.25)] cursor-pointer text-[12px] bg-[#FFFF00] px-5 py-2 rounded-[8px] w-full md:w-auto hover:scale-105 transition-transform">
            Lihat Semua
          </button>
        </div>
      </div>
      <div className="px-10 md:px-0 flex justify-center md:justify-around text-white gap-10 flex-wrap">
        {[
          { img: blueCoco, name: 'Blue Coco', desc: 'Air kelapa asli, ekstrak bunga telang, ekstrak daun kelor dengan daging kelapa', price: '10k' },
          { img: kopisusuGulaAren, name: 'Kopi Susu Gula Aren', desc: 'Gula aren, kremer, susu segar, ekspreso', price: '13k' },
          { img: kopisusuTarikCold, name: 'Kopi Susu Tarik', desc: 'Susu kental manis, kremer, susu segar, ekspreso', price: '10k' },
          { img: susumaduBungatelang, name: 'Susu Madu Bunga Telang', desc: 'Susu kental manis, kremer, susu segar, ekstrak bunga telang', price: '12k' },
        ].map((item, index) => (
          <div key={index} className="flex flex-col w-full sm:w-[230px]">
            <img
              src={item.img}
              alt={item.name}
              className="bg-white drop-shadow-[10px_12px_2px_rgba(0,0,0,1)] rounded-2xl w-full sm:w-[230px] h-[300px] object-cover mb-8 pointer-events-none select-none"
              onContextMenu={(e) => e.preventDefault()}
              draggable="false"
            />
            <h1 className="text-[#FFFF00] text-[20px] text-left">{item.name}</h1>
            <p className="text-[12px] text-left">{item.desc}</p>
            <div className="flex flex-row items-center justify-between mt-4 gap-2">
              <p className="text-[25px]">{item.price}</p>
              <a target="_blank" href="https://wa.me/6289528445401?text=Halo%20Streetdrink27b,%20Saya%20ingin%20pesan...">
                <button className="hover:scale-105 transition-transform cursor-pointer text-[#FFFF00] text-[12px] border-white border-2 rounded-[8px] py-1 px-6">Beli</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
