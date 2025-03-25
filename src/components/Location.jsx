import { MapPin } from '@phosphor-icons/react';

const Location = () => {
  return (
    <div id="lokasi" className="mb-[10rem] mt-[8rem] flex flex-col justify-center items-center overflow-hidden px-4">
      <div className="text-white flex flex-col justify-center items-center gap-4 mb-16 text-center">
        <div className="flex flex-col gap-5 items-center mb-12">
          <div className="flex gap-2 items-center">
            <MapPin size={25} weight="bold" />
            <h1 className="text-[25px] sm:text-[30px]">Lokasi</h1>
          </div>
          <p className="text-[#FFFF00] max-w-[300px] lg:max-w-lg text-[15px] lg:text-[20px] text-center">Kami menyajikan minuman segar yang bisa dinikmati meskipun sedang bepergian. Mudah dijangkau, dan nyaman</p>
        </div>
        <div className="flex justify-center items-center w-full">
          <iframe
            className="w-[300px] lg:w-[1200px] sm:w-[600px] h-[250px] sm:h-[350px] md:h-[400px] lg:h-[500px] border-5 sm:rounded-4xl rounded-2xl shadow-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d247.3378370206259!2d112.72594647742133!3d-7.308271207597538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb780a93a613%3A0x19a08ec49026167f!2sJl.%20Ketintang%20No.33%2C%20Wonokromo%2C%20Kec.%20Wonokromo%2C%20Surabaya%2C%20Jawa%20Timur%2060231!5e0!3m2!1sen!2sid!4v1742661862774!5m2!1sen!2sid"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Location;
