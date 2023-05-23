import logo from './assets/img/mansion.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Stats } from "./components/Stats";
import { Bestsellers } from "./components/Bestsellers";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Stats />
      <Bestsellers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
