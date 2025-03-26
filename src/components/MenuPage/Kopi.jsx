import { Element } from 'react-scroll';
import americanoTropicalfruit from '../../assets/americanoTropicalfruit.jpg';
import javanoCoffee from '../../assets/JavanoCoconutCoffee.jpg';
import kopisusuGulaAren from '../../assets/kopisusuGulaAren.jpg';
import blueMountain from '../../assets/blueMountain.jpg';
import kopisusuTarikCold from '../../assets/kopisusuTarikCold.jpg';
import v60filter from '../../assets/v60Filter.jpg';

const Kopi = () => {
  return (
    <Element name="kopi">
      {' '}
      <div className="h-full mb-[6rem] px-4">
        <section className="relative">
          <div className="relative top-30">
            <div className="flex justify-between items-center mx-auto max-w-[1400px] mb-16 flex-wrap">
              <div className="flex flex-col text-left md:text-left">
                <h1 className="text-[#3D91FF] text-3xl">Kopi</h1>
                <p className="text-[#6B7B90] max-w-[200px]">Berikut beberapa menu minuman kopi andalan kami.</p>
              </div>
              <button className="bg-[#FFFF00] cursor-pointer px-5 py-2 rounded-lg drop-shadow-[4px_5px_1px_rgba(0,0,0,0.25)] text-black text-[12px] hover:scale-105 transition-transform mt-4 md:mt-0">Dingin</button>
            </div>
            <div className="flex justify-center flex-wrap gap-10 mx-auto max-w-[1400px]">
              {[
                { img: americanoTropicalfruit, name: 'Americano Tropical Fruit', price: '10k' },
                { img: javanoCoffee, name: 'Javano / Coconut Coffee', price: '10k' },
                { img: kopisusuGulaAren, name: 'Kopi Susu Gula Aren (Classic)', price: '13k' },
                { img: blueMountain, name: 'Blue Mountain', price: '13k' },
                { img: kopisusuTarikCold, name: 'Kopi Susu Tarik', price: '10k' },
                { img: v60filter, name: 'V60 Filter', price: 'Relatif' },
              ].map((item, index) => (
                <div key={index} className="flex flex-col w-[200px]">
                  <img src={item.img} className="drop-shadow-[6px_8px_1px_rgba(0,0,0,0.80)] rounded-3xl w-[200px] h-[250px] object-cover mb-8" />
                  <h1 className="text-[#3D91FF] text-[17px] text-left">{item.name}</h1>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-[20px] text-[#3D91FF]">{item.price}</p>
                    <a target="_blank" href="https://wa.me/6289528445401?text=Halo%20Streetdrink27b,%20Saya%20ingin%20pesan...">
                      <button className="cursor-pointer text-black text-[12px] border-black bg-[#FFFF00] border-2 rounded-lg py-1 px-6 hover:scale-105 transition-transform">Beli</button>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
};

export default Kopi;
