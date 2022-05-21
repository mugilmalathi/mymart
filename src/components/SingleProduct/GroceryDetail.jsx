import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addCount, addToCart, SelectedGrocery } from "../../redux/Shopping/shopping-actions";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Product.css"

export const GroceryDetail = ()=>{

    const grocery = useSelector((state)=> state.groceryitem)

    const {groceryId} = useParams();

    const dispatch = useDispatch();

    const { id, image, title, price } = grocery;


    const fetchGroceryDetails = async()=>{
        const res = await axios
        .get(`https://boiling-brushlands-36073.herokuapp.com/grocery/${groceryId}`)
        .catch(err=>{
            console.log("Err ", err)
        })
        dispatch(SelectedGrocery(res.data))
    }

   
    useEffect(()=>{
        if(groceryId && groceryId !== "") fetchGroceryDetails()
    }, [groceryId])

    const add =(e)=>{
        dispatch(addToCart(e))
        dispatch(addCount(1))
      }


    return(
        <>
        <Navbar />
            <div id="product">
                {Object.keys(grocery).length === 0
                ? (
                    <div>...Loading</div>
                ) : (
                    <div id="product-main">
                        <div>
                        <img src={image} alt={title} />
                        </div>

                        <div>
                        <h4>{title}</h4>
                            <div></div>
                            <h1>₹{price}</h1>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis explicabo eaque, rem distinctio alias necessitatibus suscipit veritatis quam a voluptates laudantium fugit dolorem ad veniam saepe pariatur, natus amet odit?</p>
                            <button onClick={() => add(grocery)}>Add to Cart</button>
                        </div>
                    </div>
                )}
            </div>
        <Footer />
        </>
    )
}
