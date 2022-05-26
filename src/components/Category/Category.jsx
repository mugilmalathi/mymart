import { Link } from "react-router-dom";
import "../Home/Home.css"
import React from 'react'

export const Category = ()=>{

    return(

        <div>
            <div>
                <img src="https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="" />
                <Link to={`/grocery`}>
                    <p className="title">Grocery</p>
                </Link>
            </div>
            <div>
                <img src="https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="" />
                <Link to={`/mobile`}>
                    <p className="title">Mobiles</p>
                </Link>
            </div>
            <div>
                <img src="https://rukminim2.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" alt="" />
                <Link to={`/fashion`}>
                    <p className="title">Fashion</p>
                </Link>
            </div>
            <div>
                <img src="https://rukminim2.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" />
                <Link to={`/electronic`}>
                    <p className="title">Electronics</p>
                </Link>
            </div>
            <div>
                <img src="https://rukminim2.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
                <Link to={`/home`}>
                    <p className="title">Home</p>
                </Link>
            </div>
            <div>
                <img src="https://rukminim2.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="" />
                <Link to={`/appliance`}>
                    <p className="title">Appliances</p>
                </Link>
            </div>
            <div>
                <img src="https://rukminim2.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="" />
                <Link to={`/travel`}>
                    <p className="title">Travel</p>
                </Link>
            </div>
            <div>
                <img src="https://rukminim2.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="" />
                <Link to={`/beauty`}>
                    <p className="title">Beauty</p>
                </Link>
            </div>
    </div>
    )
}