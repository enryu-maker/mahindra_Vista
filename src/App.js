import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import PriceList from './Components/PriceList';
import Plans from './Components/Plans';
import Gallary from './Components/Gallary';
import Brouchers from './Components/Brouchers';
import AboutFinwizz from './Components/AboutFinwizz ';
import ContactSales from './Components/ContactSales';
// import Video from './Components/Video';
// import Slick from './Components/Slick';
import Home from './Components/Home';
// import BackgroundVideo from './Components/BackgroundVideo';
import Videoo from './Components/Videoo';
import Amenities from './Components/Amenities';
// import Location from './Components/Location';
import Location from './Components/Location'
import Footer from './Components/Footer';
import Navigations from './Navigations'
import { Routes,Route} from 'react-router-dom';
function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route  path='/' element={<Home/>}/>
      <Route  path='/PriceList' element={<PriceList/>}/>
      <Route  path='/Plans' element={<Plans/>}/>
      <Route  path='/Plans' element={<Plans/>}/>
      <Route  path='/Location' element={<Location/>}/>
      <Route  path='/Video' element={<Videoo/>}/>
      <Route  path='/Amenities' element={ <Amenities/>}/>
      </Routes>
      {/* <Navigations/> */}
      <Gallary/>
      <Brouchers/>
      <AboutFinwizz/>
    <ContactSales/>
    <Footer/>

      
    
    
    
    
    
    
    </>
  );
}

export default App;













