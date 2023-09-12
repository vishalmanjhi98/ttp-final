import './App.css';
import Button from './Components/Button';
import Cards from './Components/Cards';
import Imageslider from './Components/Imageslider';
import Navbar from './Components/Navbar';
import CardSlider from './Components/CardSlider';
import Services from './Components/Services';
import Button2 from './Components/Button2';
// import HospitalParagraph from './Components/HospitalParagraph';
import Lastpage from './Components/Lastpage';
import Footer from './Components/Assets/Footer';


function App() {
  return (
    <div className="App">
    <Navbar/>
   <Imageslider/>
   <Button/>
   <Cards/>
   <CardSlider/>
   <Button2/>
   <Services/>
   {/* <HospitalParagraph/> */}
   <Lastpage/>
   <Footer/>
    </div>
  );
}

export default App;
