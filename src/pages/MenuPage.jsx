import Navbar from '../components/MenuPage/Navbar';
import MenuKopi from '../components/MenuPage/Kopi';
import NonKopi from '../components/MenuPage/NonKopi';
import Snack from '../components/MenuPage/Snack';
import GiftArt from '../components/MenuPage/Art';
import Footer from '../components/MenuPage/Footer';

const MenuPage = () => {
  return (
    <div className="font-[jua] bg-white h-full">
      <Navbar />
      <MenuKopi />
      <NonKopi />
      <Snack />
      <GiftArt />
      <Footer />
    </div>
  );
};

export default MenuPage;
