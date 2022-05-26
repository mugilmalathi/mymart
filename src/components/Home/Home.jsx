import React from "react";
import "./Home.css"
import { CarouselDiv } from "../Carousel/carousel";
import { Category } from "../Category/Category";
import { Card1, Travelvideo } from "../Category/Cards";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import Animation from "../CssAnimation/Animation"

const Home = () => {

  return (
    
        <>
        <Navbar />
        <div id="home">

            <Category />

            <Travelvideo />

            <Animation />

            {/* <Card1 /> */}

            <CarouselDiv />

        </div>
        <Footer />
        </>
  );
};

export default Home;
