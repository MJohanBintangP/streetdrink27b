import { useRef, useState, useEffect } from 'react';
import { Star } from '@phosphor-icons/react';
import profileUser from '../../assets/profileUser.svg';
import profileUser2 from '../../assets/profileUser2.svg';
import Cookie from '../../assets/CookieSmall.svg';
import Coffee from '../../assets/Coffee.svg';
import Sparkle1 from '../../assets/Sparkle.svg';
import Sparkle2 from '../../assets/Sparkle.svg';

const testimonials = [
  { name: '@dicka_purnama', img: profileUser, text: 'Kopinya mantap, bikin melek sampai subuh! Rasanya enak dan efeknya nendang. Gak masalah kalau harganya naik, tetap worth it!', color: 'bg-[#3D91FF]' },
  { name: '@whosnafisah', img: profileUser2, text: 'Minumannya enak banget, cocok di lidah! Suka banget sama rasanya, pasti bakal beli lagi!', color: 'bg-[#FF7666]' },
  { name: '@aisah.di.ra', img: profileUser2, text: 'Minuman enak, gula arennya pas, dan senja jingganya segar! Abangnya juga ramah, wajib coba kalau lewat Unesa Ketintang!', color: 'bg-[#F392B9]' },
  { name: '@ainirmdhnii', img: profileUser2, text: 'Rasa kopinya mantap! Americano dengan sentuhan buah tropisnya unik dan segar. Bude & Pakde aja suka, kalian juga wajib coba!', color: 'bg-[#9747FF]' },
  { name: '@puteksz', img: profileUser, text: 'Dengan rasa yang balance antara pahitnya kopi dan manisnya susu, minuman ini cocok untuk dinikmati saat bersantai', color: 'bg-[#00B14A]' },
  { name: '@liana.amanda', img: profileUser2, text: 'Minuman segar, suasana santai, dan pelayanan yang friendly! Cocok buat yang mau nyari pelepas dahaga di tengah kota. Warga Wonokromo wajib coba!', color: 'bg-[#CB105B]' },
];

const Testimonials = () => {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 640);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const walk = (e.pageX - scrollRef.current.offsetLeft - startX) * 2;
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = scrollRef.current.scrollLeft;
      const cardWidth = 352;
      setActiveIndex(Math.round(scrollPosition / cardWidth));
    };

    const scrollElement = scrollRef.current;
    if (scrollElement) {
      scrollElement.addEventListener('scroll', handleScroll);
      return () => scrollElement.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <div id="testimoni" className="mb-52 mt-36 flex flex-col items-center px-4 md:px-8 lg:px-16 select-none">
      <div className="relative w-full">
        <img className="absolute w-8 sm:w-8 -top-18 sm:-top-8 left-10 sm:left-50" src={Cookie} alt="Cookie" />
        <img className="absolute w-8 sm:w-8 -top-4 sm:top-8 right-10 sm:right:-30" src={Coffee} alt="coffee" />
        <img className="absolute w-8 sm:w-8 -bottom-[48rem] sm:-bottom-[44rem] left-10 sm:left-70" src={Sparkle1} alt="Sparkle" />
        <img className="absolute w-8 sm:w-8 -bottom-[45rem] sm:-bottom-[43rem] right-16 sm:right-36" src={Sparkle2} alt="Sparkle" />
      </div>
      <div className="text-white flex flex-col justify-center items-center gap-4 mb-12">
        <div className="flex gap-2 items-center">
          <Star size={25} weight="bold" />
          <h1 className="text-2xl">Testimoni</h1>
        </div>
        <p className="text-[#FFFF00] max-w-[300px] lg:max-w-lg text-[15px] lg:text-[20px] text-center">Berikut beberapa cerita kepuasan pelanggan yang telah merasakan kesegaran dan kenikmatan minuman kami</p>
      </div>

      <div className="w-full flex h-[435px] max-w-[1085px] overflow-hidden relative">
        <div ref={scrollRef} className="flex gap-8 overflow-x-auto scrollbar-hidden px-4 scroll-smooth" onMouseDown={handleMouseDown} onMouseMove={handleMouseMove} onMouseLeave={handleMouseUp} onMouseUp={handleMouseUp}>
          {testimonials.map(({ name, img, text, color }, index) => (
            <div key={index} className={`${color} text-center text-white flex flex-col gap-16 items-center justify-center drop-shadow-[10px_12px_2px_rgba(0,0,0,1)] rounded-3xl w-72 sm:w-80 h-[420px] flex-shrink-0 select-none`}>
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 rounded-full bg-cover bg-center" style={{ backgroundImage: `url(${img})`, pointerEvents: 'none' }} onContextMenu={(e) => e.preventDefault()} />
                <h1 className="text-sm sm:text-base">{name}</h1>
              </div>
              <p className="max-w-[220px] lg:max-w-[250px] text-sm sm:text-base">{text}</p>
              <div className="flex gap-2">
                {Array(5)
                  .fill()
                  .map((_, i) => (
                    <Star key={i} className="text-[#FFFF00]" size={20} sm:size={25} weight="fill" />
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-2 mt-8">
        {testimonials.slice(0, isMobile ? testimonials.length - 1 : testimonials.length - 2).map((_, index) => (
          <div key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? 'bg-[#FFFF00] scale-125' : 'bg-gray-500'}`} />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
