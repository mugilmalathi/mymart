import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import React from 'react'
import "./carousel.css"
import carousel1 from "../Images/carousel1.png"
import carousel2 from "../Images/carousel2.png"
import carousel3 from "../Images/carousel3.png"

export const CarouselDiv = ()=>{

    return (

        <div id="carousel">
            <Carousel>

                <div className='carousel1'>
                   <img src={carousel3} alt="" />
                </div>

                <div className='carousel2'>
                    <img src={carousel1} alt="" />
                </div>

                <div className='carousel3'>
                    <img src={carousel2} alt="" />
                </div>

            </Carousel>
    </div>
    )
}