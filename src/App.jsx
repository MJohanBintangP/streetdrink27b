import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/LandingPage/Header';
import Socialmedia from './components/LandingPage/Socialmedia';
import HeaderBox from './components/LandingPage/HeaderBox';
import Topbox from './components/LandingPage/Topbox';
import Menu from './components/LandingPage/Menu';
import Testimonials from './components/LandingPage/Testimonials';
import Bottombox from './components/LandingPage/Bottombox';
import Location from './components/LandingPage/Location';
import Footer from './components/LandingPage/Footer';
import MenuPage from './pages/MenuPage';

const Home = () => {
  useEffect(() => {
    document.title = 'StreetDrink27B';
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
