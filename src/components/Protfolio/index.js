import React from "react";
import { useSelector } from "react-redux";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-creative";

import "./style.modules.css";

// import required modules
import { EffectCreative, Autoplay } from "swiper";
import { Button } from "react-bootstrap";

const Protfolio = () => {
    const data = useSelector( (state)=> state.InfoSlice.portfolio )

    const elements = data.map( ({image, tools}, idx) => {
        return <SwiperSlide key={idx} className="SwiperSlide position-relative">
            <img src={image} alt='portfolio image' className="img-fluid w-100 h-100" width='100' height='100' loading="lazy" />
            <div className='overlay position-absolute top-75 left-0 w-100 h-100 d-flex flex-column justify-content-center align-items-center bg-primary'>
                <div>{tools.map((tool, idx) => <i className={tool} key={idx} ></i> )}</div>
                <Button variant="dark">details</Button>
            </div>
        </SwiperSlide>
    } )

    return (
        <div className='py-5 position-relative overflow-hidden mb-3' id='Protfolio'>
        <h2 className='fw-light text-start'>My <span className='word-color fw-bold'>Protfolio</span></h2>
        
        <Swiper
            grabCursor={true}
            effect={"creative"}
            creativeEffect={{
            prev: {
                shadow: true,
                translate: [0, 0, -400],
            },
            next: {
                translate: ["100%", 0, 0],
            },
            }}
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            modules={[EffectCreative, Autoplay]}
            className="mySwiper"
        >
            {elements}
        </Swiper>
            <svg className="position-absolute top-50 start-50 translate-middle w-100 h-auto d-none d-sm-block" viewBox="0 0 200 200"><path fill="#000B76" d="M43.9,-38.7C60,-27.8,78.2,-13.9,80.1,1.9C82,17.7,67.5,35.4,51.5,46C35.4,56.7,17.7,60.2,0.4,59.8C-16.9,59.4,-33.8,55.1,-44.2,44.5C-54.7,33.8,-58.6,16.9,-57.7,0.9C-56.7,-15.1,-50.9,-30.1,-40.5,-41C-30.1,-51.8,-15.1,-58.5,-0.6,-57.9C13.9,-57.4,27.8,-49.6,43.9,-38.7Z" transform="translate(100 100)" /></svg>

        </div>
    );
}

export default Protfolio