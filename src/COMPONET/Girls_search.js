import React, { useState } from "react"
import Girls_data from "./Girls_data";


import './style.css'

const Girls_search = () =>{
    const [filter , setFilter] = useState('');
    const searchText =(e) =>{
        setFilter(e.target.value);

    }
    let dataSearch = Girls_data.cardData.filter(item =>{
        return Object.keys(item).some(key => item[key].toString().toLowerCase().includes(filter.toString().toLowerCase())
        )
    });
    return(
        <section className="py-4 container">
          <div className="row justify-content-center">
            <div className="col-12 md-5">
                <div className="md-3 col-4 mx-auto text-center">
                    <label className="form-label h4">Product Search</label> <br/>
                    <input type="text"placeholder="Search product" className="from-control shadow" value={filter}
                    onChange={searchText.bind(this)}
                    />
                </div>
            </div>
            {dataSearch.map((item, index)=>{
                return(
                    <div className="col-11 col-md-6 col-lg-3 mx-0 mb-4">
                       <div className="card p-0 overflow-hidden h-100  shadow">
                         <img src={item.img} className="card-img-top img-fluid"/>
                           <div className="card-body">
                             <h5 className="card-title">{item.name}</h5>
                             <p className="card-text"> {item.price} </p>
                             <button type="button" class="btn btn-success" >
                             <a href="https://www.facebook.com/Onuprerona.mk" target="_blank">Buy Now</a>
                             </button>
                           </div>
                        </div>
                    </div>
                )
            })}
          </div>
        </section>
    )
}

export default Girls_search