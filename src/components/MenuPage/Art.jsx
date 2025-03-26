import art1 from '../../assets/art/art.jpg';
import art2 from '../../assets/art/art2.jpg';
import art3 from '../../assets/art/art3.webp';
import art4 from '../../assets/art/art4.jpg';
import art5 from '../../assets/art/art5.jpg';
import art6 from '../../assets/art/art6.jpg';
import art7 from '../../assets/art/art7.jpg';

const Art = () => {
  return (
    <div className="h-full mb-[45rem]">
      <section className="relative">
        <div className="relative top-30">
          <div className="flex justify-between items-center mx-auto max-w-[1400px] mb-16">
            <div className="flex flex-col">
              <h1 className="text-[#3D91FF] text-3xl">Galeri Seni</h1>
              <p className="text-[#6B7B90] max-w-[200px]">Berikut beberapa seni yang sudah kami buat.</p>
            </div>
          </div>
          <div className="flex justify-start flex-wrap gap-25 mx-auto max-w-[1400px]">
            {[{ img: art1 }, { img: art2 }, { img: art3 }, { img: art4 }, { img: art5 }, { img: art6 }, { img: art7 }].map((item, index) => (
              <div key={index} className="flex flex-col w-[200px]">
                <img src={item.img} className="drop-shadow-[6px_8px_1px_rgba(0,0,0,0.80)] rounded-3xl w-[200px] h-[250px] object-cover mb-8" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Art;
