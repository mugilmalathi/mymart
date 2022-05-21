import React from "react";
import "./Fashion.css"
import { Link } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  addCount,
  addToCart, SelectedFashion, SetTotal,
} from "../../redux/Shopping/shopping-actions";
import { useParams } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

  const Fashion = () => {

    const fashion = useSelector((state)=> state.fashion.fashion);
    console.log(fashion)
    const dispatch = useDispatch();
    const count = useSelector((state)=> state.cartcount.cartcount);
    // const {groceryId} = useParams();

    const add =(e)=>{
      dispatch(addToCart(e))
      dispatch(SetTotal(e.price))
      dispatch(addCount(1))
    }

    const countcart = (e)=>{
      dispatch(SelectedFashion(e))
    }

  return (
  <>
  <Navbar />
    <div id="grocery">
      {
        fashion.map((e)=>{
          return(
            <div id="grid-div" key={e.id}>
                <div id="grid-top">
                    <img id="grid-img-fashion"
                        src={e.image}
                        alt={e.title}
                    />
                        <p id="grid-title">{e.title}</p>
                        <p id="grid-price">₹ {e.price}</p>
                  </div>

                    <div id="grid-bottom">
                        <Link key={e.id} to={`/fashion/${e.id}`}>
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

export default Fashion;
