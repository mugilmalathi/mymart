import React from 'react'
import { Link } from 'react-router-dom'
import "./Animation.css"

const Animation = () => {
  return (
    <div id='animation'>
        <div className="container">
     <div className="card">
       <div className="face face1">
         <div className="content">
            {/* <i className="fab fa-windows"></i>       */}
           <h3 className='tit'>Grocery</h3>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p> Buy Groceries Products like Fruits, Vegetables, Fresh Breads, Instant Products, Tea and Coffee Products and etc..</p>
           <Link to="/grocery" type="button">View More</Link>
         </div>
       </div>
    </div>
    
    <div className="card">
       <div className="face face1">
         <div className="content">
      {/* <i className="fab fa-android"></i>               */}
       <h3 className='tit'>Mobile</h3>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p>Buy branded Mobile Phones like Samsung, Oppo, Redme, Realme, Apple iPhone, Xiaomi, Poco and oneplus brands and etc..</p>
           <Link to="/mobile" type="button">View More</Link>
         </div>
       </div>
    </div>
    
    
    <div className="card">
       <div className="face face1">
         <div className="content">
           {/* <i className="fab fa-apple"></i> */}
            <h3 className='tit'>Fashion</h3>
         </div>
       </div>
       <div className="face face2">
         <div className="content">
           <p>Buy fashion products like kids shirts, kids pants and kids trousers, Men's t-shirt, Men's trousers, Men's Pants and Women's Sharees, Women's Salwars and etc..</p>
           <Link to="/fashion" type="button">View More</Link>
         </div>
       </div>
    </div>
    
    
    
    
    
    
  </div>
    </div>
  )
}

export default Animation