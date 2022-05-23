import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addQty, AddTotal, removeCart, subCount, subQty, SubTotal } from "../../redux/Action/actions";
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

    const addqty = (e)=>{
        dispatch(addQty(e.id));
        dispatch(AddTotal(e.price))
        // console.log(e.qty)
    }
    const subqty = (e)=>{
        if(e.qty === 0){
            dispatch(removeCart(e.id))
            if(e.qty > 0){
                dispatch(SubTotal(e.price)) 
            }
        }else{
            dispatch(subQty(e.id));
            dispatch(SubTotal(e.price))
        }
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
                                <div id="qty">
                                    <div><button onClick={()=>{subqty(e)}}>-</button></div>
                                    <div><h4>{e.qty}</h4></div>
                                    <div><button onClick={()=>{addqty(e)}}>+</button></div>
                                </div>
                                <div><p>{e.title}</p></div>
                                <div><h1>₹{e.price*e.qty}</h1></div>
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