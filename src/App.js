import './App.css';
import Button from './Components/Button';
import Cards from './Components/Cards';
import Imageslider from './Components/Imageslider';
import Navbar from './Components/Navbar';
import CardSlider from './Components/CardSlider';
import Services from './Components/Services';


function App() {
  return (
    <div className="App">
    <Navbar/>
   <Imageslider/>
   <Button/>
   <Cards/>
   <CardSlider/>
   <Services/>
    </div>
  );
}

export default App;
