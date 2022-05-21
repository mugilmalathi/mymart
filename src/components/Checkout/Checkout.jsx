import React, { useEffect, useState } from "react";
import "./Checkout.css"
import { Link } from "react-router-dom";
import { SetAddress, SetTotal } from "../../redux/Shopping/shopping-actions";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";


export const Checkout = ()=>{

  const amount = useSelector((state)=> state.total.total)
  const cart = useSelector((state)=> state.shop.cart)
  const address = useSelector((state)=> state.address.address)
  const addressId = useParams()
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
                        <Link to="/payment">
                        <button id="checkout-payment-but">Payment</button>
                        </Link>
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