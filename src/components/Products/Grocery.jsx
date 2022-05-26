import React, { useEffect, useState } from "react";
import "./Grocery.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  addCount,
  addToCart, SelectedGrocery, SetGrocery, SetTotal,
} from "../../redux/Action/actions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";

  const Grocery = () => {

    const grocery = useSelector((state)=> state.groceries.grocery);
    const dispatch = useDispatch();
    // const count = useSelector((state)=> state.cartcount.cartcount);

    const [page, setPage] = useState(1);

    const fetchGrocery = async ()=>{
      const res = await axios
      .get(`https://boiling-brushlands-36073.herokuapp.com/grocery/?_limit=4&_page=${page}`)
      .catch((err)=>{
          console.log("Err", err);
      })
      dispatch(SetGrocery(res.data));
  };

  useEffect(()=>{
    fetchGrocery();
}, [])

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

  const [search, setSearch] = useState("");
  // console.log(grocery.filter(e=>e.title.toLowerCase().includes("x")))


  return (
  <>
  <Navbar />
  <input 
    id="search_item" 
    type="text" 
    placeholder="...Search Grocery Products"
    onChange={(e)=>{
      setSearch(e.target.value)
    }}/>
    
    <div id="gro-main">
        <div id="sort">
          <button onClick={()=>{handleSort('low','price')}}>Low to High Price</button>
          <button  onClick={()=>{handleSort('high','price')}} >High to Low Price</button>
          <button onClick={()=>{handleSort('asc', 'title')}}>Asc to Des Title</button>
          <button  onClick={()=>{handleSort('des', 'title')}} >Des to Asc Title</button>
        </div>
    <div id="grocery">
      {
        grocery.filter((gro)=>gro.title.toLowerCase().includes(search)
        ).map((e)=>{
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
    </div>

      {/* <button onClick={()=>{
          setPage(page - 1);
          // SetGrocery(page - 1)
          console.log(grocery)
      }}>Prev</button>
      <button onClick={()=>{
          setPage(page + 1);
          // SetGrocery(page + 1)
          console.log(grocery)
      }}>Next</button> */}
    <Footer />
    </>
  );
};

export default Grocery;