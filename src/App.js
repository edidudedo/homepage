import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components';
import { Home, AboutMe, Footer, Achievements } from './Containers';

function App() {
  return (
    <div clasName = "App">
      <div className = "gradient__bg">
        <Navbar />
        <Home />
      </div>
      <AboutMe />
      <Achievements />
      <Footer />
    </div>
  );
}

export default App;
