import React from 'react'
import "./Travel.css"
import flight1 from "../Images/flight1.png"
import card1 from "../Images/flightcard1.png"
import card2 from "../Images/flightcard2.png"
import card3 from "../Images/flightcard3.png"
import card4 from "../Images/flightcard4.png"
import card5 from "../Images/flightcard5.png"
import card6 from "../Images/flightcard6.png"
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const Travel = () => {
  return (
      <>
      <Navbar />
        <div id='travel'>
            <div id='fromto'>
                <div>
                    <input type="text" placeholder='From'/>
                    <div></div>
                    <input type="text" placeholder='To'/>
                    <input type="date" />
                    <input type="date" />
                    <div>Class</div>
                    <button>Search</button>
                </div>
                <div>
                    <img src={flight1} alt="" />
                </div>
                <div id='flightcard'>
                    <img src={card1} alt="" />
                    <img src={card2} alt="" />
                    <img src={card3} alt="" />
                    <img src={card4} alt="" />
                    <img src={card5} alt="" />
                    <img src={card6} alt="" />
                </div>
            </div>
        </div>
        <Footer />
    </>
  )
}

export default Travel