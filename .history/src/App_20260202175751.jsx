import './App.css';
import NavigationBar from './components/NavigationBar.jsx';
import Footer from './components/Footer.jsx';
import image from './assets/Landing1.png';

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <div className="landing-image">
        <img src={image} alt="Landing" loading="eager" />
      </div>

      <Footer />
    </div>
  );
}

export default App;
