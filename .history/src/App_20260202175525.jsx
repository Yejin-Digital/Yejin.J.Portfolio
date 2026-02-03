import './App.css';
import NavigationBar from './components/NavigationBar.jsx';
import image from './assets/Landing1.png';

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <div className="landing-image">
        <img src={image} alt="Landing" loading="eager" />
      </div>
    </div>
  );
}

export default App;
