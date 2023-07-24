import './App.css'
import { Routes} from "react-router-dom"
import { Route } from 'react-router-dom';
import Home from './COMPONET/Home';
import Contact from "./COMPONET/Contact";
import Shop from "./COMPONET/Shop";
import About from "./COMPONET/About";
import Nabbar from './COMPONET/Nabbar';
import Boys from './COMPONET/Boys';
import Girls from './COMPONET/Girls';
import Loogo from './COMPONET/images/WhatsApp.svg.png'


const routes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/shop', element: <Shop /> },
  { path: '/contact', element: <Contact /> },
  { path: '/boys', element: <Boys /> },
  { path: '/girls', element: <Girls/> },
  // More routes...
];


function App() {
 

  return (
    <>
      <Nabbar/>
      <Routes>
      {routes.map((route) => (
        <Route key={route.path} path={route.path} element={route.element} />
      ))}
    </Routes>
      {/* <Switch>
        <Route exact path="/" element={<Home/>}></Route>
        <Route exact path="shop" element={<Shop/>}></Route>
        <Route exact path="about" element={<About/>}></Route>
        <Route exact path="contact" element={<Contact/>}></Route>
        <Route exact path="/boyes" element={<Boys/>}></Route>
        <Route exact path="girls" element={<Girls/>}></Route>
         {routes.map((route) => (
        <Route key={route.path} path={route.path} element={<route.component />} />
      ))}
      </Switch> */}
      
      <div className='wp-batton'>
      <a target="_blank" href="https://wa.me/01721299758" className=''>
      <img src={Loogo} alt=""/>

      </a>
      </div>
      
      
    
    </>
  );
}

export default App;
