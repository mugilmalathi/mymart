import React from "react";
import "./Grocery.css"
import { Link } from "react-router-dom";
// Redux
import { connect, useDispatch, useSelector } from "react-redux";
import {
  addCount,
  addToCart, SelectedGrocery, SetTotal,
} from "../../redux/Shopping/shopping-actions";
import { useParams } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import {sortProducts} from "../../redux/Shopping/shopping-actions"

  const Grocery = () => {

    const grocery = useSelector((state)=> state.groceries.grocery);
    const dispatch = useDispatch();
    const count = useSelector((state)=> state.cartcount.cartcount);
    // const {groceryId} = useParams();

    const add =(e)=>{
      dispatch(addToCart(e))
      dispatch(SetTotal(e.price))
      dispatch(addCount(1))
    }

    const countcart = (e)=>{
      dispatch(SelectedGrocery(e))
    }

  return (
  <>
  <Navbar />
    <div id="grocery">
      {/* <select name="" id="" value={this.props.sort} onChange={(e)=> this.props.sortProducts(this.props.filteredProducts, e.target.value)}>
        <option value="">Select</option>
        <option value="lowest">Lowest to Highest</option>
        <option value="highest">Highest to Lowest</option>
      </select> */}
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

// const mapStateToProps = state => ({
//   grocery: state.grocery.item,
//   sort: state.grocery.sort
// })

// export default connect(mapStateToProps, {sortProducts})(Grocery)
export default Grocery;
