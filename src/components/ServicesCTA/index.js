import React from 'react'
import useContentful from '../../helpers'
import {SectionSlider} from '../../schema';

import { Swiper, SwiperSlide } from 'swiper/react';

import { TiGroup } from "react-icons/ti";
import 'swiper/css';
import './cta.scss';

const query = SectionSlider


const SliderCTA = (props) => {

	const { title, excerpt } = props;
	const { data, errors } = useContentful(query);

	console.log(data);

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
	<div className='container'>
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
	{data.sectionSliderCollection.items.map(cta => (
			<SwiperSlide key={cta.id}>
				<div className='card text-center'>
					<div className='card-body'>
						<span className='card-body-image mb-4'>
							<TiGroup />
						</span>
						<h4 className='card-body-title'>{cta.title}</h4>
						<p className='card-text'>{cta.serviceExcerpt}</p>
					</div>
				</div>
			</SwiperSlide>  
	))}
		</Swiper>
	</div>
</div> 
  )
}

export default SliderCTA