import axios from "axios";
import React, { useEffect, useState } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addCount, addToCart, SelectedGrocery, SelectedMobile } from "../../redux/Shopping/shopping-actions";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Product.css"

export const MobileDetail = ()=>{

    const mobile = useSelector((state)=> state.mobileitem)

    const {mobileId} = useParams();

    const dispatch = useDispatch();

    const { id, image, title, price, description } = mobile;


    const fetchMobileDetails = async()=>{
        const res = await axios
        .get(`https://boiling-brushlands-36073.herokuapp.com/mobile/${mobileId}`)
        .catch(err=>{
            console.log("Err ", err)
        })
        dispatch(SelectedMobile(res.data))
    }

   
    useEffect(()=>{
        if(mobileId && mobileId !== "") fetchMobileDetails()
    }, [mobileId])

    const add =(e)=>{
        dispatch(addToCart(e))
        dispatch(addCount(1))
    }


    return(
        <>
        <Navbar />
            <div id="product">
                {Object.keys(mobile).length === 0
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
                            <p>{description}</p>
                            <button onClick={() => add(mobile)}>Add to Cart</button>
                        </div>
                    </div>
                )}
            </div>
        <Footer />
        </>
    )
}

//testing..!!