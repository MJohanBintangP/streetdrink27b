import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Socialmedia from './components/Socialmedia';
import HeaderBox from './components/HeaderBox';
import Topbox from './components/Topbox';
import Menu from './components/Menu';
import Testimonials from './components/Testimonials';
import Bottombox from './components/Bottombox';
import Location from './components/Location';
import Footer from './components/Footer';
import MenuPage from './pages/MenuPage';

const Home = () => {
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
        <Route path="/menu" element={<MenuPage />} />
      </Routes>
    </Router>
  );
};

export default App;
