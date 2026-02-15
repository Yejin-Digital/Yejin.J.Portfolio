import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar.jsx';
import Footer from './components/Footer.jsx';
import LandingProject from './components/LandingProject.jsx';
import WelcomeYejins from './components/WelcomeYejins.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Project from './pages/Project.jsx';
import Packaging from './pages/Packaging.jsx';
import Poster from './pages/Poster.jsx';
import Resume from './pages/Resume.jsx';
import Magazine from './pages/Magazine.jsx';
import image from './assets/Landing_image.png';

function Home() {
  return (
    <div className="home-page">
      <WelcomeYejins />
      <div className={'arrowContainer'}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="27"
          viewBox="0 0 48 27"
          fill="none"
        >
          <path
            d="M2.00031 2L24.0003 15L46.0003 2"
            stroke="black"
            stroke-width="4"
            stroke-linecap="round"
          />
          <path
            d="M2.00031 11L24.0003 24L46.0003 11"
            stroke="black"
            stroke-width="4"
            stroke-linecap="round"
          />
        </svg>
      </div>
      <LandingProject />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <ScrollToTop />
        <NavigationBar />
        <main className="app-main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Project />} />
            <Route path="/packaging" element={<Packaging />} />
            <Route path="/poster" element={<Poster />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/magazine" element={<Magazine />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
