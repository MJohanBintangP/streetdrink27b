import cookie from '../assets/cookie.svg';
import people from '../assets/people.svg';

const Footer = () => {
  return (
    <div className="relative">
      <img className="absolute -top-[12rem] lg:-top-[18.7rem] left-4 lg:left-30 lg:w-[550px] w-[350px] z-10" src={people} alt="people" />
      <footer id="footer" className="overflow-hidden relative bg-[#3D91FF] lg:mt-[25rem] mt-[18rem] w-full border-t-28 border-[#FFFF00] p-8">
        <div className="flex sm:gap-10 lg:gap-30 gap-10 max-w-[1400px] mx-auto mt-[2rem] mb-[4rem] text-white flex-wrap">
          <div className="flex flex-col gap-5">
            <h1 className="text-2xl">OPERASIONAL</h1>
            <p className="font-[inter]">Senin - Minggu 16.00 - 22.00</p>
            <a target="_blank" className="underline font-[inter]" href="https://maps.app.goo.gl/izGYiH6GpdmW5Nup6">
              No. Jl. Ketintang No.33, Wonokromo,
              <br />
              Kec. Wonokromo, Surabaya, Jawa Timur 60243
            </a>
          </div>
          <div className="flex flex-col gap-2 font-[inter]">
            <h1 className="text-2xl font-[jua]">Kontak Kami</h1>
            <a href="mailto:streetdrinkb@gmail.com">streetdrinkb@gmail.com</a>
            <a target="_blank" href="https://wa.me/6289528445401?text=Halo%20Streetdrink27b,%20Saya%20ingin%20pesan...">
              +62 895-2844-5401
            </a>
            <a target="_blank" href="https://wa.me/6283176222327?text=Halo%20Streetdrink27b,%20Saya%20ingin%20pesan...">
              +62 831-7622-2327
            </a>
          </div>
          <div className="flex flex-col gap-2 font-[inter]">
            <h1 className="text-2xl font-[jua]">Temukan Kami</h1>
            <a href="https://r.grab.com/g/2-1-6-C66BL74ATVKEWE" target="_blank" rel="noopener noreferrer">
              GrabFood
            </a>
            <a href="https://www.instagram.com/streetdrink27b?igsh=ZGUzMzM3NWJiOQ==" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            <a href="https://youtube.com/@streetdrink27b?feature=shared" target="_blank" rel="noopener noreferrer">
              Youtube
            </a>
          </div>
        </div>

        <img className="lg:w-[400px] w-[300px] absolute lg:top-4 lg:right-20 bottom-30 -right-20" src={cookie} alt="cookie" />

        <div className="flex flex-col max-w-[1045px] lg:ml-8 md:ml-4 sm:ml-0 ml-0 text-left">
          <hr className="border-white" />
          <p className="mt-8 text-white font-[inter]">2025 Streetdrink27b. All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
