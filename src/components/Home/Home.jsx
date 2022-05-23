import React, { useEffect } from "react";
import "./Home.css"
import { useDispatch } from "react-redux";
import axios from "axios";
import { SetFashion, SetGrocery, SetMobile } from "../../redux/Action/actions";
import { CarouselDiv } from "../Carousel/carousel";
import { Category } from "../Category/Category";
import { Card1, Travelvideo } from "../Category/Cards";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Home = () => {

  // const grocery = useSelector((state)=> state.groceries.grocery);
  // const fashion = useSelector((state)=> state.fashion.fashion);
  // const mobile = useSelector((state)=> state.mobiles.mobile);
//   const users = useSelector((state)=> state.users.users);
  

  const dispatch = useDispatch();

    const fetchGrocery = async ()=>{
        const res = await axios
        .get("https://boiling-brushlands-36073.herokuapp.com/grocery")
        .catch((err)=>{
            console.log("Err", err);
        })
        dispatch(SetGrocery(res.data));
    };

    const fetchMobile = async ()=>{
      const res = await axios
      .get("https://boiling-brushlands-36073.herokuapp.com/mobile")
      .catch((err)=>{
          console.log("Err", err);
      })
      dispatch(SetMobile(res.data));
  };

  const fetchFashion = async ()=>{
    const res = await axios
    .get("https://boiling-brushlands-36073.herokuapp.com/fashion")
    .catch((err)=>{
        console.log("Err", err);
    })
    dispatch(SetFashion(res.data));
};

    useEffect(()=>{
        fetchMobile();
        fetchGrocery();
        fetchFashion()
  }, [])

  return (
    
        <>
        <Navbar />
        <div id="home">

            <Category />

            <Travelvideo />

            <Card1 />

            {/* <Grocery /> */}

            <CarouselDiv />

        </div>
        <Footer />
        </>
  );
};

export default Home;
