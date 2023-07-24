import React from 'react'
import {FaArchway } from "react-icons/fa";
import {FaPhone } from "react-icons/fa";

import {FaClock } from "react-icons/fa";
import {FaMailBulk } from "react-icons/fa";
import {FaChevronRight } from "react-icons/fa";
import {FaCheck } from "react-icons/fa";

import './footer.css'
import ScrollToTop from "react-scroll-to-top";
const Footer = () => {
  return (
    <div className=' footer'>
       <div className=' container'>
          <div className='row all-fot'>
             
             <div className='col-lg-4' >
                 <h3>Renda E-Commerce</h3>
                 
                 <p>{<FaArchway/> } Khulna,Boikali 4/302/Uttara 4 number sector.
azampur Jama Masjid  </p>
                 <p>{<FaPhone/>} 01721299758/01717796349</p>
                 <p>{<FaClock/>} Sat-Fri/9:00AM-10:00PM </p>
                 <p>{<FaMailBulk/>} rendaecommerce791@gmail.com </p>
             </div>
             <div className='col-lg-4'>
                 <h3> Information</h3>
                 <p> {<FaChevronRight/>} About Us</p>
                 <p> {<FaChevronRight/>} Contact Us</p>
                 <p> {<FaChevronRight/>} Shop Us</p>
                 <p> {<FaChevronRight/>} Renda Us</p>

             </div>
             <div className='col-lg-4'>
                 <h3>Our Servic</h3>
                 <p> {<FaCheck/>} Privacy Police</p>
                 <p> {<FaCheck/>} Terms of Sale</p>
                 <p> {<FaCheck/>} Customer Service</p>
                 <p> {<FaCheck/>} Delivery Info</p>
             </div>
             </div>
             
           
        </div>
        
        <div className='copy'>
              <p> ©Renda E-Commerce 2023, all right reserve By:Renda E-Commerce <br/>Developer By:<a href="https://www.facebook.com/00mRicE69"target='_blank' >Md.Rakibul Islam</a> </p>
             </div>
             <div style={{ marginTop: "0vh" }} />
      <ScrollToTop smooth />
    </div>
  )
}

export default Footer