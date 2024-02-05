import './App.css';
import Navbar from './components/Navbar';
import Home from './bagian/Home';
import { Route, Routes } from 'react-router-dom';
import Contact from './bagian/Contact';
import Service from './bagian/Service';
import About from './bagian/About';
import Photoshoot from './Photoshoot/photoshoot';
import CollegePhotoshoot from './PhotoshootData/collegePhoto';
import ParallaxComponents from './components/ParallaxComponents';
import Payment from './components/Payment';
// import Client from '../../penjual/src/Client';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/service" element={<Service/>} />
        <Route path="/about" element={<About/>}/>
        <Route path='/photoshoot' element={<Photoshoot/>}/>
        <Route path='/college-photoshoot-data' element={<CollegePhotoshoot/>} />
        <Route path="/" exact component={ParallaxComponents} />
        <Route path='/payment' element={<Payment/>}/>
        {/* <Route path='/penjual' element={<Client/>}/> */}
      </Routes>
      {/* <Navbar/> */}
    </div>
  );
}

export default App;