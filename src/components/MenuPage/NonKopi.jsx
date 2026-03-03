import { Element } from "react-scroll";
import { useState } from "react";

import susumaduBungatelang from "../../assets/nonKopi/susumaduBungatelang.webp";
import senjaJingga from "../../assets/nonKopi/senjaJingga.webp";
import blueCoco from "../../assets/nonKopi/blueCoco.webp";
import darkChoco from "../../assets/nonKopi/darkChoco.webp";
import tehTarik from "../../assets/nonKopi/tehTarikcold.webp";
import tehTarikhot from "../../assets/menuHot/tehTarikhot.webp";

const NonKopi = () => {
  const [isColdMenu, setIsColdMenu] = useState(true);

  const coldMenu = [
    { img: susumaduBungatelang, name: "Susu Madu Bunga Telang", price: "13k" },
    { img: senjaJingga, name: "Iced Starry Night", price: "10k" },
    { img: blueCoco, name: "Blue Coco (Penyegaran)", price: "10k" },
    { img: darkChoco, name: "Chocolate", price: "13k" },
    { img: tehTarik, name: "Tea Tarik +plus", price: "13k", bestSeller: true },
  ];

  const hotMenu = [
    {
      img: tehTarikhot,
      name: "Tea Tarik +plus",
      price: "15k",
      bestSeller: true,
    },
  ];

  const currentMenu = isColdMenu ? coldMenu : hotMenu;

  return (
    <Element name="nonkopi">
      <div className="h-full mb-[6rem] px-4">
        <section className="relative">
          <div className="relative top-30">
            <div className="flex justify-between items-center mx-auto max-w-[1400px] mb-16 flex-wrap">
              <div className="flex flex-col text-left md:text-left">
                <h1 className="text-[#3D91FF] text-3xl">Non-Kopi</h1>
                <p className="text-[#6B7B90] max-w-xs">
                  Berikut beberapa menu minuman non-kopi andalan kami.
                </p>
              </div>
              <button
                onClick={() => setIsColdMenu(!isColdMenu)}
                className="bg-[#FFFF00] cursor-pointer px-5 py-2 rounded-lg drop-shadow-[4px_5px_1px_rgba(0,0,0,0.25)] text-black text-[12px] hover:scale-105 transition-transform mt-4 md:mt-0"
              >
                {isColdMenu ? "Dingin" : "Hangat"}
              </button>
            </div>

            <div className="flex justify-center md:justify-start flex-wrap gap-10 mx-auto max-w-[1400px]">
              {currentMenu.map((item, index) => (
                <div key={index} className="flex flex-col w-[200px]">
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.name}
                      loading="lazy"
                      decoding="async"
                      className="drop-shadow-[6px_8px_1px_rgba(0,0,0,0.80)] rounded-3xl w-[200px] h-[250px] object-cover mb-8"
                    />
                    {item.bestSeller && (
                      <div className="absolute top-2 right-2 bg-[#FFFF00] text-black text-[10px] px-2 py-1 rounded-md font-semibold border border-black">
                        ✓ Best Seller
                      </div>
                    )}
                  </div>
                  <h1 className="text-[#3D91FF] text-[17px] text-left">
                    {item.name}
                  </h1>
                  <div className="flex items-center justify-between mt-4">
                    <p className="text-[20px] text-[#3D91FF]">{item.price}</p>
                    <a
                      target="_blank"
                      href="https://wa.me/6289528445401?text=Halo%20Streetdrink27b,%20Saya%20ingin%20pesan..."
                    >
                      <button className="cursor-pointer text-black text-[12px] border-black bg-[#FFFF00] border-2 rounded-lg py-1 px-6 hover:scale-105 transition-transform">
                        Beli
                      </button>
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

export default NonKopi;
