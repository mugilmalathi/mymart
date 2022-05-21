import "../Home/Home.css"
import React from "react";
import card1_1 from "../Images/card1-1.png"
import card1_2 from "../Images/card1-2.png"
import card1_3 from "../Images/card1-3.png"
import travelvideo from "../Images/travel.mp4"
import { Link } from "react-router-dom";

export const Card1 = ()=>{

    return(
        <div id="card1">
            <div><img src={card1_1} alt="" /></div>
            <div><img src={card1_2} alt="" /></div>
            <div><img src={card1_3} alt="" /></div>
        </div>
    )
} 


export const Travelvideo = ()=>{

    return(
        <div id="travelvideo">
            <video src={travelvideo} autoPlay loop muted></video>
            <Card2 />
        </div>

    )
}

export const Card2 = ()=>{

    return(
        <div id="card2">
            <div id="card2-img-div">
                <img src="https://img.icons8.com/clouds/100/000000/beach.png" alt="" />
                <img src="https://img.icons8.com/doodle/48/000000/summer.png" alt="" />
                <img src="https://img.icons8.com/clouds/100/000000/airplane-take-off.png" alt="" />
            </div>
            <h1>Travel</h1>
            <Link to="/travel"><button id="card2-button">Travel</button></Link>
        </div>
    )
}