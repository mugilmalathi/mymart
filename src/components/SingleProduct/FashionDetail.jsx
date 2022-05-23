import axios from "axios";
import React, { useEffect } from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addCount, addToCart, SelectedFashion } from "../../redux/Action/actions";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Product.css"

export const FashionDetail = ()=>{

    const fashion = useSelector((state)=> state.fashionitem)
    const {fashionId} = useParams();
    const dispatch = useDispatch();
    const { id, image, title, price, description } = fashion;


    const fetchFashionDetails = async()=>{
        const res = await axios
        .get(`https://boiling-brushlands-36073.herokuapp.com/fashion/${fashionId}`)
        .catch(err=>{
            console.log("Err ", err)
        })
        dispatch(SelectedFashion(res.data))
    }

   
    useEffect(()=>{
        if(fashionId && fashionId !== "") fetchFashionDetails()
    }, [fashionId])

    const add =(e)=>{
        dispatch(addToCart(e))
        dispatch(addCount(1))
      }


    return(
        <>
        <Navbar />
            <div id="product">
                {Object.keys(fashion).length === 0
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
                            <button onClick={() => add(fashion)}>Add to Cart</button>
                        </div>
                    </div>
                )}
            </div>
        <Footer />
        </>
    )
}
