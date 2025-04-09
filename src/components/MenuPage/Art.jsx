import { Element } from 'react-scroll';
import art1 from '../../assets/art/art.jpg';
import art2 from '../../assets/art/art2.jpg';
import art3 from '../../assets/art/art3.webp';
import art4 from '../../assets/art/art4.jpg';
import art5 from '../../assets/art/art5.jpg';
import art6 from '../../assets/art/art6.jpg';
import art7 from '../../assets/art/art7.jpg';

const Art = () => {
  return (
    <Element name="art">
      {' '}
      <div className="h-full md:mb-[40rem] mb-[30rem]">
        <section className="relative">
          <div className="relative top-30">
            <div className="flex justify-between items-center mx-auto max-w-[1400px] mb-16 px-4 sm:px-0">
              <div className="flex flex-col">
                <h1 className="text-[#3D91FF] text-3xl">Galeri Seni</h1>
                <p className="text-[#6B7B90] max-w-[250px]">Berikut beberapa seni yang sudah kami buat.</p>
              </div>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 mx-auto max-w-[1440px] px-4">
              {[art1, art2, art3, art4, art5, art6, art7].map((img, index) => (
                <div key={index} className="flex flex-col">
                  <img src={img} className="drop-shadow-[6px_8px_1px_rgba(0,0,0,0.80)] rounded-3xl w-full h-[250px] object-cover" alt={`Artwork ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </Element>
  );
};

export default Art;
