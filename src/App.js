import logo from './logo.svg';
import './App.css';
import { Navbar, TopButton } from './Components';
import { Home, AboutMe, Footer, Achievements, Research, Projects, Collabs, Education, Employment } from './Containers';

import { LanguageProvider } from './Components/Language/languageContext';

function App() {


  return (
    <LanguageProvider>
      <div clasName = "App">
        <TopButton />
        <div className = "gradient__bg">
          <Navbar />
          <Home />
        </div>
        <AboutMe />
        <Education />
        <Employment />
        <Achievements />
        <Research />
        <Projects />
        <Collabs />
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
