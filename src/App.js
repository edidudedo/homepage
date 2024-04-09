import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components';
import { Home } from './Containers';

function App() {
  return (
    <div clasName = "App">
      <div className = "gradient__bg">
        <Navbar />
        <Home />
      </div>
    </div>
  );
}

export default App;
