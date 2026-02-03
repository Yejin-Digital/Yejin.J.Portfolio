import './App.css';
import NavigationBar from './components/NavigationBar.jsx';
import image from './assets/Landing1.png';

function App() {
  return (
    <div className="app">
      <NavigationBar />
      <img src={image} alt="Landing" />
    </div>
  );
}

export default App;
