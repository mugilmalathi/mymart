import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { addCount, addToCart, SelectedElectronic } from "../../redux/Action/actions";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import "./Product.css"

export const ElectronicDetail = ()=>{

    const electronic = useSelector((state)=> state.electronicitem)
    const {electronicId} = useParams();
    const dispatch = useDispatch();
    const { id, image, title, price, description } = electronic;


    const fetchElectronicDetails = async()=>{
        const res = await axios
        .get(`https://boiling-brushlands-36073.herokuapp.com/electronic/${electronicId}`)
        .catch(err=>{
            console.log("Err ", err)
        })
        dispatch(SelectedElectronic(res.data))
    }

   
    useEffect(()=>{
        if(electronicId && electronicId !== "") fetchElectronicDetails()
    }, [electronicId])

    const add =(e)=>{
        dispatch(addToCart(e))
        dispatch(addCount(1))
      }


    return(
        <>
        <Navbar />
            <div id="product">
                {Object.keys(electronic).length === 0
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
                            <button onClick={() => add(electronic)}>Add to Cart</button>
                        </div>
                    </div>
                )}
            </div>
        <Footer />
        </>
    )
}
