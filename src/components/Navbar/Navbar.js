import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../Images/logo.png"
import { useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import axios from "axios";
import { SelectedUser } from "../../redux/Shopping/shopping-actions";

const Navbar = () => {

  const history = useHistory();
  const [logout, setLogout] = React.useState(false);

  // const cart = useSelector((state)=> state.shop.cart)

  const count = useSelector((state)=> state.cartcount.cartcount);
  console.log(count)
  const dispatch = useDispatch();
  
  React.useEffect(() => {
    if (!localStorage.getItem("auth")) history.push("/signin");
  }, [logout]);

  const logoutHandler = (e) => {
    e.preventDefault();
    localStorage.removeItem("auth");
    setLogout(true);
  };


  // const users = useSelector((state)=> state.userdetail)
  // console.log(users)

  //   const {userId} = useParams();

  //   const { firstname, lastname } = users;


  //   const fetchUserDetails = async()=>{
  //       const res = await axios
  //       .get(`https://boiling-brushlands-36073.herokuapp.com/users/${userId}`)
  //       .catch(err=>{
  //           console.log("Err ", err)
  //       })
  //       dispatch(SelectedUser(res.data))
  //   }

   
  //   useEffect(()=>{
  //       if(userId && userId !== "") fetchUserDetails()
  //   }, [userId])

  return (
    <div id="navbar">
      <Link to="/">
        <img id="navbar-logo" src={logo} alt="" />
      </Link>
      
        <div id="nav-cart">
          <Link to="/signin"><button onClick={logoutHandler} id="account">Logout</button></Link>
          <Link to="/cart">
             <img id="nav-img" src="https://img.icons8.com/external-tulpahn-flat-tulpahn/64/000000/external-add-to-cart-online-shopping-tulpahn-flat-tulpahn.png"/>
          </Link>
          <div>{count}</div>
        </div>
       {/* {
         users.map((e)=>{
          return(
            <h4>{e.firstname}</h4>
          )
         })
       } */}
      
    </div>
  );
};

export default Navbar;
