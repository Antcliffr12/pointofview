import React from 'react'
import useContentful from '../../helpers';
import Hero from './Hero';

import './hero.scss';

import { HeroImage } from '../../schema';

const query = HeroImage

const HeroSection = () => {
  // let { data, errors } = useContentful(query);
  const { data, errors } = useContentful(query)
  if(errors) {
    return(
      <span style={{ color: "red" }}>
        {errors.map((error) => error.message).join(',')}
      </span>
    )
  };
  if(!data) return <span>Loading...</span>

 
  return (
    <div className='hero' id="home">
      <div className='container'>
      {data.heroSectionCollection.items.map(item => (
          <Hero
            key={item.title} 
            title={item.heroTitle}
            subText={item.subText}
            media={item.media.url}
            slug={item.slug}
            />
        ) ) }

      </div>
       
    </div>
  )
}



export default HeroSection