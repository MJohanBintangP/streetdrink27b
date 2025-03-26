import { CoffeeBean, Cookie, PaintBrush, PintGlass } from '@phosphor-icons/react';

const Bottombox = () => {
  return (
    <div className="bg-[#FFFF00] w-full h-[60px] flex justify-center items-center">
      <div className="flex justify-evenly w-full text-[#181E6A]">
        <div className="flex items-center lg:gap-4 gap-1">
          <CoffeeBean size={25} weight="bold" />
          <p>Kopi</p>
        </div>
        <div className="flex items-center lg:gap-4 gap-1">
          <PintGlass size={25} weight="bold" />
          <p>Non-Kopi</p>
        </div>
        <div className="flex items-center lg:gap-4 gap-1">
          <Cookie size={25} weight="bold" />
          <p>Snack</p>
        </div>
        <div className="flex items-center lg:gap-4 gap-1">
          <PaintBrush size={25} weight="bold" />
          <p>Seni</p>
        </div>
      </div>
    </div>
  );
};

export default Bottombox;
