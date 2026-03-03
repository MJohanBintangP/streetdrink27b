import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import Header from "./components/LandingPage/Header";
import Socialmedia from "./components/LandingPage/Socialmedia";
import HeaderBox from "./components/LandingPage/HeaderBox";
import Topbox from "./components/LandingPage/Topbox";
import Menu from "./components/LandingPage/Menu";
import Testimonials from "./components/LandingPage/Testimonials";
import Bottombox from "./components/LandingPage/Bottombox";
import Location from "./components/LandingPage/Location";
import Footer from "./components/LandingPage/Footer";
import MenuPage from "./pages/MenuPage";
import LoadingScreen from "./components/LoadingScreen";
import logo from "./assets/Logo.png";
import blobs from "./assets/blobs.svg";
import headerImg from "./assets/headerImg.svg";

const CRITICAL_IMAGES = [logo, headerImg, blobs];

const preloadImage = (source) =>
  new Promise((resolve) => {
    const image = new Image();
    image.src = source;
    image.onload = resolve;
    image.onerror = resolve;
  });

const Home = () => {
  useEffect(() => {
    document.title = "StreetDrink27B";
  }, []);
  return (
    <div className="font-[jua]">
      <Header />
      <HeaderBox />
      <Socialmedia />
      <Menu />
      <Topbox />
      <Testimonials />
      <Bottombox />
      <Location />
      <Footer />
    </div>
  );
};

const App = () => {
  const [isBootLoading, setIsBootLoading] = useState(true);

  useEffect(() => {
    let isActive = true;

    const preloadCriticalAssets = Promise.all(
      CRITICAL_IMAGES.map((image) => preloadImage(image)),
    );
    const minimumDelay = new Promise((resolve) => setTimeout(resolve, 1200));

    Promise.all([preloadCriticalAssets, minimumDelay]).then(() => {
      if (isActive) {
        setIsBootLoading(false);
      }
    });

    return () => {
      isActive = false;
    };
  }, []);

  if (isBootLoading) {
    return <LoadingScreen />;
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
};

export default App;
