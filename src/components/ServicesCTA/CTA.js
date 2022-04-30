import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';

import { TiGroup } from "react-icons/ti";
import 'swiper/css';
import './cta.scss';


const CTA = (props) => {

    const params = {
        initialSlide: 1,
        slidesPerView:3,
        centeredSlides: true,
        watchSlidesProgress: true,
        loop: true
    }

  return (
        <div className='services-slider'>
            <Swiper { ...params }  >
                <SwiperSlide>
                    <div className='card text-center'>
                        <div className='card-body'>
                            <span className='card-body-image mb-4'>
                                <TiGroup />
                            </span>
                            <h4 className='card-body-title'>Title</h4>
                            <p className='card-text'>Card Text</p>
                        </div>
                    </div>
                    </SwiperSlide>
                <SwiperSlide> 
                    <div className='card text-center'>
                        <div className='card-body'>
                        <span className='card-body-image mb-4'>
                                <TiGroup />
                            </span>
                            <h4 className='card-body-title'>Title</h4>
                            <p className='card-text'>Card Text</p>
                        </div>
                    </div>
                    </SwiperSlide>
                <SwiperSlide>
                     <div className='card text-center'>
                        <div className='card-body'>
                        <span className='card-body-image mb-4'>
                                <TiGroup />
                            </span>
                            <h4 className='card-body-title'>Title</h4>
                            <p className='card-text'>Card Text</p>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div> 
  )
}

export default CTA