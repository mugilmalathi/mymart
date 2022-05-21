import React from "react";
import "./Grocery.css"
import { Link } from "react-router-dom";
// Redux
import { useDispatch, useSelector } from "react-redux";
import {
  addCount,
  addToCart, SelectedMobile, SetTotal,
} from "../../redux/Shopping/shopping-actions";
import { useParams } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

  const Mobile = () => {

    const mobile = useSelector((state)=> state.mobiles.mobile);
    const count = useSelector((state)=> state.cartcount.cartcount);

    const dispatch = useDispatch();
    // const {groceryId} = useParams();

    const add =(e)=>{
      dispatch(addToCart(e))
      dispatch(SetTotal(e.price))
      dispatch(addCount(1))
    }

    const countcart = (e)=>{
      dispatch(SelectedMobile(e))
    }

  return (
    <>
    <Navbar />
      <div id="grocery">
        {
          mobile.map((e)=>{
            return(
              <div id="grid-div" key={e.id}>
                  <div id="grid-top">
                      <img id="grid-img-mob"
                          src={e.image}
                          alt={e.title}
                      />
                          <p id="grid-title">{e.title}</p>
                          <p id="grid-price">₹ {e.price}</p>
                    </div>

                      <div id="grid-bottom">
                          <Link key={e.id} to={`/mobile/${e.id}`}>
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

export default Mobile;
