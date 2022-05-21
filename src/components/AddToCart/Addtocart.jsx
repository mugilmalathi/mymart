import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { removeCart, SetTotal, subCount, SubTotal } from "../../redux/Shopping/shopping-actions";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Cart.css"

export const Addtocart = ()=>{

    const cart = useSelector((state)=> state.shop.cart)
    const dispatch = useDispatch();
    const amount = useSelector((state)=> state.total.total)

    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    useEffect(() => {
        let items = 0;
        let price = 0;
        var count = 0;
        cart.forEach((item) => {
            count++;
            price = count + item.price;
        });
        items += count;
        price = items * price;
        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

    const remove =(e)=>{
        dispatch(removeCart(e))
        dispatch(subCount(1))
    }
    const sub =(e)=>{
        dispatch(SubTotal(e.price))
    }


    return(
        <>
        <Navbar />
            <div id="addtocart">
                <div id="addtocart__left">
                {
                    cart.map((e)=>{
                        return(
                            <div>
                                <div><img src={e.image} alt="" /></div>
                                <div><p>{e.title}</p></div>
                                <div><h1>₹{e.price}</h1></div>
                                <div><button onClick={() => 
                                    remove(e.id)
                                    } onClickCapture={()=>{
                                        sub(e)
                                    }}>X</button></div>
                            </div>
                        )
                    })
                }
                </div>

                <div id="addtocart__right">

                        <h3>PRICE DETAILS</h3>
                        <p>Total Items: (<span>{totalItems}</span>)</p>
                        <p>Discount: <span>₹0</span></p>
                        <h4>total price: <span>₹{amount}</span></h4>
                        <Link to="/checkout"><button id="addtocart__right__but">Checkout</button></Link>

                </div>
            </div>
        <Footer />
        </>
    )
}