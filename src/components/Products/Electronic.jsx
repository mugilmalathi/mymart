import React, { useEffect, useState } from "react";
import "./Mobile.css"
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addCount, addToCart, SelectedMobile, SetElectronic, SetTotal } from "../../redux/Action/actions";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import axios from "axios";

  const Electronic = () => {

    const electronic = useSelector((state)=> state.electronic.electronic);
    const count = useSelector((state)=> state.cartcount.cartcount);

    const dispatch = useDispatch();
    // const {groceryId} = useParams();

    const fetchElectronic = async ()=>{
      const res = await axios
      .get("https://boiling-brushlands-36073.herokuapp.com/electronic")
      .catch((err)=>{
          console.log("Err", err);
      })
      dispatch(SetElectronic(res.data));
    };

    useEffect(()=>{
      fetchElectronic()
    }, [])

    const add =(e)=>{
      dispatch(addToCart(e))
      dispatch(SetTotal(e.price))
      dispatch(addCount(1))
    }

    const countcart = (e)=>{
      dispatch(SelectedMobile(e))
    }


    const [change,setChange] = useState(false)

  const handleSort =(sort, value)=>{
      if(sort === 'low' && value==='price'){
        electronic.sort((a,b)=> a.price-b.price)
          setChange(!change)
        };
  
      if(sort === 'high' && value==='price'){
        electronic.sort((a,b)=> b.price-a.price)
          setChange(!change)
        };

      if(sort === 'asc' && value==='title'){
        electronic.sort((a,b)=> a.title > b.title ? 1 : -1)
          setChange(!change)
        };
  
      if(sort === 'des' && value==='title'){
        electronic.sort((a,b)=> b.title > a.title ? 1 : -1)
          setChange(!change)
        };
  }

  const [search, setSearch] = useState("");

  return (
    <>
    <Navbar />
    <input 
      id="search_item" 
      type="text" 
      placeholder="...Search Electronic Items"
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
            electronic.filter((gro)=>gro.title.toLowerCase().includes(search)
            ).map((e)=>{
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
    </div>
    <Footer />
    </>
  );
};

export default Electronic;
