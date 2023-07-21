import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import banar1 from './images/rakib1.png'
import banar2 from './images/rakib2.png'
import banar3 from './images/rakib3.png'
import Shop_nav from './Shop_nav';
import Search from "./Search";
import Footer from "./Footer";

import './shop.css'
const Shop = () => {
  return (
    <div>
        <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 d-block h-100"
          src={banar1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banar2}
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banar3}
          alt="Third slide"
        />
      </Carousel.Item>
     </Carousel>
     <br/>
     <br/>
     <br/>
     <h2 className='h2222'>Our Boyes and Girls Product</h2>
     <div className='margin'></div>
     <br/>

     <Shop_nav/>

     <br/>
     <div className='margin'></div>
     <br/>
     <br/>
     <Search/>
     <Footer/>

    
    </div>
  )
}

export default Shop