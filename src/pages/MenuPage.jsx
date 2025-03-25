import { useNavigate } from 'react-router-dom';
import { HouseSimple } from '@phosphor-icons/react';
import cup from '../assets/cup.svg';
import americanoTropicalfruit from '../assets/americanoTropicalfruit.jpg';
import javanoCoffee from '../assets/JavanoCoconutCoffee.jpg';
import kopisusuGulaAren from '../assets/kopisusuGulaAren.jpg';
import blueMountain from '../assets/blueMountain.jpg';
import kopisusuTarikCold from '../assets/kopisusuTarikCold.jpg';
import v60filter from '../assets/v60Filter.jpg';
// import Footer from '../components/Footer';

const MenuPage = () => {
  const navigate = useNavigate();

  return (
    <div className="font-[jua] bg-white h-full">
      <nav className="bg-[#3D91FF] w-full h-[95px] z-1 border-b-16 border-[#FFFF00] fixed items-center top-0">
        <div className="flex justify-between items-center mx-auto max-w-[1400px] text-white">
          <img className="absolute top-0 left-6 -z-10" src={cup} alt="cup" />
          <h1 className="relative left-12">Menu Kami</h1>
          <ul className="flex gap-16 text-[15px]">
            <li>Kopi</li>
            <li>Non-Kopi</li>
            <li>Snack</li>
            <li>Seni</li>
          </ul>
          <button onClick={() => navigate('/')} className="text-black flex items-center gap-2 text-[15px] drop-shadow-[4px_5px_1px_rgba(0,0,0,0.25)] cursor-pointer bg-[#FFFF00] px-3 py-2 rounded-[8px]">
            <HouseSimple size={20} weight="bold" /> Beranda
          </button>
        </div>
      </nav>
      <section className="relative top-50">
        <div className="flex justify-between items-center mx-auto max-w-[1400px] mb-16">
          <div className="flex flex-col">
            <h1 className="text-[#3D91FF] text-3xl">Kopi</h1>
            <p className="text-[#6B7B90] max-w-[200px]">Berikut beberapa menu minuman kopi andalan kami.</p>
          </div>
          <button className="drop-shadow-[4px_5px_1px_rgba(0,0,0,0.25)] cursor-pointer text-[12px] bg-[#FFFF00] px-5 py-2 rounded-[8px]">Dingin</button>
        </div>
        <div className="flex justify-around text-white gap-10 flex-wrap mx-auto max-w-[1400px]">
          {[
            { img: americanoTropicalfruit, name: 'Americano Tropical Fruit', price: '10k' },
            { img: javanoCoffee, name: 'Javano / Coconut Coffee', price: '10k' },
            { img: kopisusuGulaAren, name: 'Kopi Susu Gula Aren (Classic)', price: '13k' },
            { img: blueMountain, name: 'Blue Mountain', price: '13k' },
            { img: kopisusuTarikCold, name: 'Kopi Susu Tarik', price: '10k' },
            { img: v60filter, name: 'V60 Filter', price: '0' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col w-[230px]">
              <img src={item.img} className="bg-white drop-shadow-[10px_12px_2px_rgba(0,0,0,1)] rounded-2xl w-[230px] h-[300px] object-cover mb-8" />
              <h1 className="text-[#3D91FF] text-[20px]">{item.name}</h1>
              <div className="flex items-center justify-between mt-4">
                <p className="text-[25px] text-[#3D91FF]">{item.price}</p>
                <button className="cursor-pointer text-black text-[12px] border-black bg-[#FFFF00]  border-2 rounded-[8px] py-1 px-6">Beli</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="relative top-70">
        <div className="flex justify-between items-center mx-auto max-w-[1400px] mb-16">
          <div className="flex flex-col">
            <h1 className="text-[#3D91FF] text-3xl">Non-Kopi</h1>
            <p className="text-[#6B7B90] max-w-[220px]">Berikut beberapa menu minuman non-kopi andalan kami.</p>
          </div>
          <button className="drop-shadow-[4px_5px_1px_rgba(0,0,0,0.25)] cursor-pointer text-[12px] bg-[#FFFF00] px-5 py-2 rounded-[8px]">Dingin</button>
        </div>
        <div className="flex justify-around text-white gap-10 flex-wrap mx-auto max-w-[1400px]">
          {[
            { img: americanoTropicalfruit, name: 'Americano Tropical Fruit', price: '10k' },
            { img: javanoCoffee, name: 'Javano / Coconut Coffee', price: '10k' },
            { img: kopisusuGulaAren, name: 'Kopi Susu Gula Aren (Classic)', price: '13k' },
            { img: blueMountain, name: 'Blue Mountain', price: '13k' },
            { img: kopisusuTarikCold, name: 'Kopi Susu Tarik', price: '10k' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col w-[230px]">
              <img src={item.img} className="bg-white drop-shadow-[10px_12px_2px_rgba(0,0,0,1)] rounded-2xl w-[230px] h-[300px] object-cover mb-8" />
              <h1 className="text-[#3D91FF] text-[20px]">{item.name}</h1>
              <div className="flex items-center justify-between mt-4">
                <p className="text-[25px] text-[#3D91FF]">{item.price}</p>
                <button className="cursor-pointer text-black text-[12px] border-black bg-[#FFFF00]  border-2 rounded-[8px] py-1 px-6">Beli</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="relative top-70">
        <div className="flex justify-between items-center mx-auto max-w-[1400px] mb-16">
          <div className="flex flex-col">
            <h1 className="text-[#3D91FF] text-3xl">Snack</h1>
            <p className="text-[#6B7B90] max-w-[220px]">Berikut beberapa menu camilan andalan kami.</p>
          </div>
          <button className="drop-shadow-[4px_5px_1px_rgba(0,0,0,0.25)] cursor-pointer text-[12px] bg-[#FFFF00] px-5 py-2 rounded-[8px]">Dingin</button>
        </div>
        <div className="flex justify-around text-white gap-10 flex-wrap mx-auto max-w-[1400px]">
          {[
            { img: americanoTropicalfruit, name: 'Americano Tropical Fruit', price: '10k' },
            { img: javanoCoffee, name: 'Javano / Coconut Coffee', price: '10k' },
            { img: kopisusuGulaAren, name: 'Kopi Susu Gula Aren (Classic)', price: '13k' },
            { img: blueMountain, name: 'Blue Mountain', price: '13k' },
            { img: kopisusuTarikCold, name: 'Kopi Susu Tarik', price: '10k' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col w-[230px]">
              <img src={item.img} className="bg-white drop-shadow-[10px_12px_2px_rgba(0,0,0,1)] rounded-2xl w-[230px] h-[300px] object-cover mb-8" />
              <h1 className="text-[#3D91FF] text-[20px]">{item.name}</h1>
              <div className="flex items-center justify-between mt-4">
                <p className="text-[25px] text-[#3D91FF]">{item.price}</p>
                <button className="cursor-pointer text-black text-[12px] border-black bg-[#FFFF00]  border-2 rounded-[8px] py-1 px-6">Beli</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="relative top-70">
        <div className="flex justify-between items-center mx-auto max-w-[1400px] mb-16">
          <div className="flex flex-col">
            <h1 className="text-[#3D91FF] text-3xl">Galeri Seni</h1>
            <p className="text-[#6B7B90] max-w-[220px]">Berikut beberapa seni yang sudah kami buat.</p>
          </div>
          <button className="drop-shadow-[4px_5px_1px_rgba(0,0,0,0.25)] cursor-pointer text-[12px] bg-[#FFFF00] px-5 py-2 rounded-[8px]">Dingin</button>
        </div>
        <div className="flex justify-around text-white gap-10 flex-wrap mx-auto max-w-[1400px]">
          {[
            { img: americanoTropicalfruit, name: 'Americano Tropical Fruit', price: '10k' },
            { img: javanoCoffee, name: 'Javano / Coconut Coffee', price: '10k' },
            { img: kopisusuGulaAren, name: 'Kopi Susu Gula Aren (Classic)', price: '13k' },
            { img: blueMountain, name: 'Blue Mountain', price: '13k' },
            { img: kopisusuTarikCold, name: 'Kopi Susu Tarik', price: '10k' },
          ].map((item, index) => (
            <div key={index} className="flex flex-col w-[230px]">
              <img src={item.img} className="bg-white drop-shadow-[10px_12px_2px_rgba(0,0,0,1)] rounded-2xl w-[230px] h-[300px] object-cover mb-8" />
              <h1 className="text-[#3D91FF] text-[20px]">{item.name}</h1>
              <div className="flex items-center justify-between mt-4">
                <p className="text-[25px] text-[#3D91FF]">{item.price}</p>
                <button className="cursor-pointer text-black text-[12px] border-black bg-[#FFFF00]  border-2 rounded-[8px] py-1 px-6">Beli</button>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* <Footer /> */}
    </div>
  );
};

export default MenuPage;
