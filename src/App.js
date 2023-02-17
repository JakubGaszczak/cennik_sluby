import Header from './components/header/Header';
import Home from './components/home/Home';
import './css/App.css';

function App() {
  return (
    <div className="App">
      <Header />

      <main>
        <Home />
      </main>
    </div>
  );
}

export default App;
