import React from 'react'
import useContentful from '../../helpers'
import {ServiceCTAQuery} from '../../schema';

import { Swiper, SwiperSlide } from 'swiper/react';

import { TiGroup } from "react-icons/ti";
import 'swiper/css';
import './cta.scss';

const query = ServiceCTAQuery


const SliderCTA = (props) => {

    const { title, excerpt } = props;
    const { data, errors } = useContentful(query);

    if(errors) {
        return(
          <span style={{ color: "red" }}>
            {errors.map((error) => error.message).join(',')}
          </span>
        )
    };
    if(!data) return <span>Loading...</span>

    const params = {
       
        slidesPerView:1,
        
    }

  return (
        <div className='services-slider'>
            <Swiper { ...params }  
            
                breakpoints={{
                    768: {
                        slidesPerView:3,
                        initialSlide: 1,
                        centeredSlides: true,
                        watchSlidesProgress: true,
                        noSwiping: true,
                        noSwipingClass: 'swiper-slide',
                    }
                }}
            >
                {data.serviceCtaCollection.items.map(cta => (
                
                    <SwiperSlide key={cta.id}>
                        {    console.log(cta)}
                    <div className='card text-center'>
                        <div className='card-body'>
                            <span className='card-body-image mb-4'>
                                <TiGroup />
                            </span>
                            <h4 className='card-body-title'>{cta.serviceTitle}</h4>
                            <p className='card-text'>{cta.serviceExcerpt}</p>
                        </div>
                    </div>
                </SwiperSlide>  
                ))}
                
               
       
            </Swiper>
        </div> 
  )
}

export default SliderCTA