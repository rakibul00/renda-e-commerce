import React from "react";
import Search from "./Search";
import Footer from "./Footer";
import Carousel from 'react-bootstrap/Carousel';
import banar1 from './images/rakib1.png'
import banar2 from './images/rakib2.png'
import banar3 from './images/rakib3.png'


function Home ()  {

  return (
    <div>
          <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 d-block h-100"
          src={banar1}
          alt="First slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banar2}
          alt="Second slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banar3}
          alt="Third slide"
        />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
     </Carousel>
     <Search/>
     <Footer/>
        
    </div>
      
    
  )
}

export default Home