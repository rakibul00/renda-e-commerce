import React from 'react'
import './contact.css'
import Footer from './Footer'
const Contact = () => {
  return (
    <div className='contact-page'>
     
      <div className='containerr'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='half-width'>
            <h3>Subscribe to Our Randa E-Commerce</h3>
             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, quam nisi! Veritatis quam distinctio, magni nisi, dolorem libero optio?</p>
            </div>

          </div>
          <div className='col-md-6'>
            <div className='half-width'>
              <h2></h2><br/>
            <button>Your email address <span><button>Subscribe</button></span></button>
            </div>
          </div>
        </div>
      </div>
     <div className='container'>
     <div className='row' id='oop'>
        <div className='col-md-5'>
          <h3>Randa E-Commerce.</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut,</p>
          <p><strong>Home:</strong><span>9000 GPO, Khulna City</span></p>
          <p><strong>Contact:</strong><span>+00801721299758</span></p>
          <p><strong>Gmail:</strong><span>rendaecommerce791@gmail.com</span></p>
          <p><strong>Time:</strong><span>Mon-Fri/9:00-6:00PM</span></p>
        </div>
        <div className='col-md-4'>
        <h4>Information</h4>
          <p>About us</p>
          <p>Store location</p>
          <p>Latest News</p>
          <p>Shoping & Delivery</p>
          <p>Our Sitemap</p>

        </div>
        <div className='col-md-3'>
          
        </div>
      </div>
     </div>
     <Footer/>

    </div>
  )
}

export default Contact