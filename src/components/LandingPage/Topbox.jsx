import fotoJualan3 from '../../assets/fotoJualan3.jpg';

const Topbox = () => {
  return (
    <div className="relative mb-5 w-full h-[350px] flex flex-col justify-center items-center text-white bg-cover bg-center" style={{ backgroundImage: `url(${fotoJualan3})` }}>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="relative text-center max-w-[700px] px-4">
        <h1 className="text-[15px] sm:text-[15px] md:text-[16.5px] lg:text-[18px] ">
          &quot;Dari gelas yang menemani tawa di tengah kebersamaan, hingga rasa yang membangkitkan semangat di sela kesibukan. Dalam keheningan senja atau riuhnya perayaan, ada kesegaran yang selalu hadir, menghidupkan setiap momen dengan
          kenikmatan yang tak terlupakan. Karena dalam setiap rasa, tersimpan kehangatan, kebahagiaan, dan kenangan yang akan terus hidup.&quot;
        </h1>
        <p className="mt-4 text-[15px] sm:text-[12px] md:text-[15px] lg:text-[18px]">streetdrink27b</p>
      </div>
    </div>
  );
};

export default Topbox;
