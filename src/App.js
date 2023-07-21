import './App.css'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './COMPONET/Home';
import Contact from "./COMPONET/Contact";
import Shop from "./COMPONET/Shop";
import About from "./COMPONET/About";
import Nabbar from './COMPONET/Nabbar';
import Boys from './COMPONET/Boys';
import Girls from './COMPONET/Girls';
import Loogo from './COMPONET/images/WhatsApp.svg.png'




function App() {
 

  return (
    <>
      <Nabbar/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="shop" element={<Shop/>}></Route>
        <Route path="about" element={<About/>}></Route>
        <Route path="contact" element={<Contact/>}></Route>
        <Route path="/boyes" element={<Boys/>}></Route>
        <Route path="girls" element={<Girls/>}></Route>
      </Routes>
      </BrowserRouter>
      <div className='wp-batton'>
      <a target="_blank" href="https://wa.me/01721299758" className=''>
      <img src={Loogo} alt=""/>

      </a>
      </div>
      
      
    
    </>
  );
}

export default App;
