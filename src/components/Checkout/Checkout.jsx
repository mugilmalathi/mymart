import React, { useEffect, useState } from "react";
import "./Checkout.css"
import { Link } from "react-router-dom";
import { SetAddress } from "../../redux/Action/actions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import StripeCheckout from "react-stripe-checkout";
import {useHistory} from "react-router-dom"


export const Checkout = ()=>{

  const amount = useSelector((state)=> state.total.total)
  const cart = useSelector((state)=> state.shop.cart)
  const address = useSelector((state)=> state.address.address)

  const history = useHistory()
//   const addressId = useParams()
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

  const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);
    useEffect(() => {
        let items = 0;
        let price = 0;
        var count = 0;
        cart.forEach((item) => {
            count++;
            // items += count;
            price = count + item.price;
        });
        items += count;
        price = items * price;
        setTotalItems(items);
        setTotalPrice(price);
    }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const [formData, setFormData] = useState({
    id: "",
    doorno: "",
    area: "",
    address: "",
    city: "",
    state: "",
    pincode: ""
});

const [data, setData] = useState({});

const handleChange = (e)=>{
    const {id, value} = e.target;
    setFormData({
        ...formData,
        [id]:value
    })
}

const handleSubmit = (e)=>{
    axios.post("https://boiling-brushlands-36073.herokuapp.com/address", formData)
    .then(()=>{
        setFormData({
          id: "",
          doorno: "",
          area: "",
          address: "",
          city: "",
          state: "",
          pincode: ""
        })
    })
    .then(()=>{
        getData();
    })
}

useEffect(()=>{
    getData();
}, []);


const getData = ()=>{
    axios.patch(`https://boiling-brushlands-36073.herokuapp.com/address`)
    .then((res)=>{
        setData(res.data)
    })
}

const [product, setProduct] = useState({
    name: "Payment"
})

const makePayment=(token)=>{
    const body = {
        token,
        product
    }
    const headers = {
        "Content-Type":"application/json"
    }
    return fetch("https://boiling-brushlands-36073.herokuapp.com/payment", {
        method:"POST",
        headers,
        body: JSON.stringify(body)
    }).then((res)=>{
        console.log(res);
        
    }).catch((err)=>{
        console.log(err);
        
    })
}

return(
    <>
    <Navbar />
        <div id="checkout">

            <div id="checkout-left">

                <div id="checkout-login">
                    <h4>Login</h4>
                    <Link to="/login">
                    <button id="checkout-login-but">Account</button>
                    </Link>
                </div>

                <div id="checkout-address">
                    <div><h4>Address</h4>
                    <input 
                    type="number" 
                    placeholder="Enter Door Number"
                    id="doorno"
                    onChange={handleChange}
                    value={formData.doorno}
                    />
                    <br />
                    <input 
                    type="text" 
                    placeholder="Enter Your Area"
                    id="area"
                    onChange={handleChange}
                    value={formData.area}
                    />
                    <br />
                    <textarea 
                    placeholder="Enter Address Here"
                    id="address"
                    onChange={handleChange}
                    value={formData.address}
                    ></textarea>
                    <br />
                    <input 
                    type="text" 
                    placeholder="Enter City"
                    id="city"
                    onChange={handleChange}
                    value={formData.city}
                    />
                    <br />
                    <input 
                    type="text" 
                    placeholder="Enter State"
                    id="state"
                    onChange={handleChange}
                    value={formData.state}
                    />
                    <br />
                    <input 
                    type="number" 
                    placeholder="Enter Pincode"
                    id="pincode"
                    onChange={handleChange}
                    value={formData.pincode}
                    />
                    <br />
                    <button
                    id="checkout-add"
                    type="submit"
                    value="Add"
                    onClick={handleSubmit}
                    >Add</button></div>
                    <div>
                        {
                            address.map((e)=>{
                                return(
                                    <div id="addr-div-right">
                                        <h1>Your Address:</h1>
                                        <h4>{e.doorno}</h4>
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
                <div id="checkout-payment">
                    <h4>Payment</h4>
                        <StripeCheckout
                        name="Buy Products"
                        amount={amount * 100}
                        currency="INR"
                        stripeKey="pk_test_51L3F1zSAb8TFHtBOgzO1s9ANqcH994MR7MSgUbVPZyXkgpvGNCDxCvsbxVsCjQ0whYnAjoDEH86d8wV6354Ekb5w00G4UJsLSz"
                        token={makePayment}
                        >
                            <button id="checkout-payment-but" onClick={()=>{
                                setTimeout(()=>{
                                    history.push("/success");
                                }, 20000)
                            }}>Pay ₹{amount}</button>
                        </StripeCheckout>
                </div>
            </div>

            <div id="checkout-right">
                <h4>PRICE DETAILS</h4>
                <div id="checkout-right-one">
                <p>TotalItems: ({totalItems})</p>
                </div>
                <div id="checkout-right-one">
                <p>Price</p>
                <p>₹ {amount}</p>
                </div>
                <div id="checkout-right-two">
                <h4>Amount Payable</h4>
                <h4>₹ {amount}</h4>
                </div>
            </div>
        </div>
    <Footer />
    </>
)
}