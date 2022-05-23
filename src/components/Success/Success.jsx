import "../Payment/Payment.css"
import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export const Success = ()=>{
    return(
        <>
        <Navbar />
            <div id="success">
                <h1>Payment Successful..!</h1>
                <img src="https://cdn.dribbble.com/users/614270/screenshots/14575431/media/4907a0869e9ed2ac4e2d1c2beaf9f012.gif" alt="" />
            </div>
        <Footer />
        </>
    )
}