import './App.css';
import NavigationBar from './components/NavigationBar.jsx';
import Footer from './components/Footer.jsx';
import image from './assets/Landing_image.png';
import LandingProject from './components/LandingProject.jsx';

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <div className="landing-image">
        <img src={image} alt="Landing" loading="eager" />
      </div>
      <LandingProject />

      <Footer />
    </div>
  );
}

export default App;
