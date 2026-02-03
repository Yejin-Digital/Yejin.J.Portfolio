import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar.jsx';
import Footer from './components/Footer.jsx';
import LandingProject from './components/LandingProject.jsx';
import Project from './pages/Project.jsx';
import Hero from './components/Hero.jsx';

function Home() {
  return (
    <div className="home-page">
      <Hero />
      <LandingProject />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Project />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
