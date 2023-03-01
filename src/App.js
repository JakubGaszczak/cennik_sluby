import AboutUs from './components/aboutUs/AboutUs';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Packages from './components/packages/Packages';
import PriceList from './components/priceList/PriceList';
import Footer from './components/footer/Footer';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Home />
        <AboutUs />
        <PriceList />
        <Packages />
      </main>

      <Footer />
    </div>
  );
}

export default App;
