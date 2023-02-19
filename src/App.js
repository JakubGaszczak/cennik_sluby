import AboutUs from './components/aboutUs/AboutUs';
import Header from './components/header/Header';
import Home from './components/home/Home';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Home />
        <AboutUs />
      </main>
    </div>
  );
}

export default App;
