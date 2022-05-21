import "./Payment.css"
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { SetAddress } from "../../redux/Shopping/shopping-actions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export const Payment = ()=>{

    const amount = useSelector((state)=> state.total.total)

    const address = useSelector((state)=> state.address.address)
  console.log(address)

  const dispatch = useDispatch();

    const fetchAddress = async ()=>{
        const res = await axios
        .get("https://boiling-brushlands-36073.herokuapp.com/address")
        .catch((err)=>{
            console.log("Err", err);
        })
        dispatch(SetAddress(res.data));
    };

    useEffect(()=>{
        fetchAddress();
  }, [])


    return(
        <>
        <Navbar />
            <div id="payment">
                <div id="payment-div">
                    <h1>PAYMENT</h1>
                    <div id="onlinepayment">
                        <img className="paytm" src="https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png"/>
                        <img className="googlepay" src="https://1000logos.net/wp-content/uploads/2020/04/Google-Pay-Logo.jpg"/>
                        <img className="phonepay" src="https://www.pngitem.com/pimgs/m/3-38170_phonepe-logo-png-phone-pe-transparent-png.png"/>
                        <img className="applepay" src="https://cdn-icons-png.flaticon.com/512/5968/5968144.png"/>
                    </div>
                    <h4>Payment amount</h4>
                    <h1>₹ {amount}</h1>
                    <label>Name on Card</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label>Card Number</label>
                    <br />
                    <input type="number" />
                    <br />
                    <label>Expiry Date</label>
                    <br />
                    <input type="date" />
                    <br />
                    <label>Security code</label>
                    <br />
                    <input type="number"/>
                    <br />
                    <label>ZIP/Postal Code</label>
                    <br />
                    <input type="number" />
                    <br />
                    <Link to="/success">
                        <button id="payment-but">Pay Now</button>
                    </Link>
                </div>

                <div id="payment-div-right">
                {
                    address.map((e)=>{
                        return(
                            <div id="addre-div-right">
                                <h1>Your Address:</h1>
                                <h4 className="doorno">{e.doorno}</h4>
                                <h4>{e.area}</h4>
                                <h4>{e.address}</h4>
                                <h4>{e.city}</h4>
                                <h4>{e.state}</h4>
                                <h4>{e.pincode}</h4>
                            </div>
                        )
                    })
                }
                </div>
            </div>
        <Footer />
        </>
    )
}