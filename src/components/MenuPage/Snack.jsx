import toast from '../../assets/Snack/toast.jpg';
import bananaToast from '../../assets/Snack/bananaToast.jpg';
import oriCookie from '../../assets/Snack/oriCookie.jpg';
import redCookie from '../../assets/Snack/redCookie.jpg';
import matchaCookie from '../../assets/Snack/matchaCookie.jpg';
import chocolateCooke from '../../assets/Snack/chocolateCookie.jpg';

const Snack = () => {
  return (
    <div className="h-full mb-[6rem]">
      <section className="relative">
        <div className="relative top-30">
          <div className="flex justify-between items-center mx-auto max-w-[1400px] mb-16">
            <div className="flex flex-col">
              <h1 className="text-[#3D91FF] text-3xl">Snack</h1>
              <p className="text-[#6B7B90] max-w-[200px]">Berikut beberapa menu camilan andalan kami.</p>
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-10 mx-auto max-w-[1400px]">
            {[
              { img: toast, name: 'Toast classic (Cokelat, Keju)', price: '7k' },
              { img: bananaToast, name: 'Banana Toast', price: '7k' },
              { img: oriCookie, name: 'Original Cookie', price: '7k' },
              { img: redCookie, name: 'Red velvet Cookie', price: '7k' },
              { img: matchaCookie, name: 'Matcha Cookie', price: '7k' },
              { img: chocolateCooke, name: 'Chocolate Cookie', price: '7k' },
            ].map((item, index) => (
              <div key={index} className="flex flex-col w-[200px]">
                <img src={item.img} className="drop-shadow-[6px_8px_1px_rgba(0,0,0,0.80)] rounded-3xl w-[200px] h-[250px] object-cover mb-8" />
                <h1 className="text-[#3D91FF] text-[17px]">{item.name}</h1>
                <div className="flex items-center justify-between mt-4">
                  <p className="text-[20px] text-[#3D91FF]">{item.price}</p>
                  <button className="cursor-pointer text-black text-[12px] border-black bg-[#FFFF00] border-2 rounded-lg py-1 px-6 hover:scale-105 transition-transform">Beli</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Snack;
