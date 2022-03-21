import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "swiper/css/pagination";
import "./Swiper.modules.css";

// import required modules
import { FreeMode, Pagination, Autoplay } from "swiper";
import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Service = () => {
  const data = useSelector( state => state.InfoSlice.Service )

  const elements = data.map( (el, idx)=>{
    return <SwiperSlide key={idx}>
      <Card className='shadow-lg border-2 text-dark overflow-hidden' border="light">
        <div className='card-img-container text-center py-2'>
          <Card.Img src={el.image} className="img-fluid h-auto w-auto m-auto" variant="top" width='auto' height='auto' alt={el.title} />
        </div>
        <hr />
        <Card.Title className='text-center fw-bold word-color'>{el.title}</Card.Title>
        <Card.Body>
          <Card.Text className='fw-normal fs-5'>{el.desc}</Card.Text>
        </Card.Body>
      </Card>
    </SwiperSlide>
  } )

  return (
    <div className='py-5' id='Service'>
      <h2 className='first-color mb-0 text-start'>Service</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, FreeMode, Pagination]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        className="mySwiper pb-3 h-auto w-auto"
      >
        {elements}
      </Swiper>
    </div>
  );
}

export default Service