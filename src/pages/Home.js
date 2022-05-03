import React from 'react'
import HeroSection from '../components/HeroSection';
import Hero from '../components/HeroSection';
import ServiceCTA from '../components/ServicesCTA';
import useContentful from '../helpers';




import { HomeQuery } from '../schema';

const query = HomeQuery;

function Home(props) {
	const { data, errors } = useContentful(query);

	if(!data) return <span>Loading....</span>

  return (
	  	<section id="home">
			
					{
						data.sectionCollection.items.map(item => 
							<div key={item.slug} className='hero'>
								
								<div className='container'>
									{
										item.contentCollection.items.map(v => 
											
											<Hero
												key={v}
												title={v.title}
												subText={v.headline}
												media={v.media.url}
											/>
											
										)
									}
								</div>

							</div>	
						)
					}
					
			
		</section>
	
  )
}

export default Home