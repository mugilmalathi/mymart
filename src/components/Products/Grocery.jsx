import React, { useState } from "react";
import "./Grocery.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCount,
  addToCart, SelectedGrocery, SetTotal,
} from "../../redux/Action/actions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

  const Grocery = () => {

    const grocery = useSelector((state)=> state.groceries.grocery);
    const dispatch = useDispatch();
    // const count = useSelector((state)=> state.cartcount.cartcount);

    const add =(e)=>{
      dispatch(addToCart(e))
      dispatch(SetTotal(e.price))
      dispatch(addCount(1))
    }

    const countcart = (e)=>{
      dispatch(SelectedGrocery(e))
    }

  const [change,setChange] = useState(false)

  const handleSort =(sort, value)=>{
      if(sort === 'low' && value==='price'){
          grocery.sort((a,b)=> a.price-b.price)
          setChange(!change)
        };
  
      if(sort === 'high' && value==='price'){
          grocery.sort((a,b)=> b.price-a.price)
          setChange(!change)
        };

      if(sort === 'asc' && value==='title'){
          grocery.sort((a,b)=> a.title > b.title ? 1 : -1)
          setChange(!change)
        };
  
      if(sort === 'des' && value==='title'){
          grocery.sort((a,b)=> b.title > a.title ? 1 : -1)
          setChange(!change)
        };
  }

  return (
  <>
  <Navbar />
  <div id="sort">
      <button onClick={()=>{handleSort('low','price')}}>Low to High Price</button>
      <button  onClick={()=>{handleSort('high','price')}} >High to Low Price</button>
      <button onClick={()=>{handleSort('asc', 'title')}}>asc to des Title</button>
      <button  onClick={()=>{handleSort('des', 'title')}} >des to asc Title</button>
     </div>
    <div id="grocery">
      {
        grocery.map((e)=>{
          return(
            <div id="grid-div" key={e.id}>
                <div id="grid-top">
                    <img id="grid-img"
                        src={e.image}
                        alt={e.title}
                    />
                        <p id="grid-title">{e.title}</p>
                        <p id="grid-price">₹ {e.price}</p>
                  </div>

                    <div id="grid-bottom">
                        <Link key={e.id} to={`/grocery/${e.id}`}>
                          <button onClick={() => countcart(e)} id="grid-but-view">
                              View Item
                          </button>
                        </Link>
                          <button id="grid-but-cart"
                          onClick={() => add(e)}
                          >
                          Add To Cart
                          </button>
                    </div>
                </div>
          )
        })
       }
      </div>
    <Footer />
    </>
  );
};

export default Grocery;