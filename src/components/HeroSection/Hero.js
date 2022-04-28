import React from 'react';
import './hero.scss';

export default function Hero(props) {
    const {title, media, subText, slug} = props;
    let heading

    if(slug == '/' || ''){
        heading = <h1>{title}</h1>
    }else{
        heading = <h2>{title}</h2>
    }

    return (
        <>
            <div className='hero-bg'>
                {
                    media.split('.').reverse()[0] == 'mp4' ?
                        <video src={media} type='video/mp4' autoPlay loop muted className='hero-bg__video' />
                    :
                        <img src={media} className='hero-bg__image' />

                }
            </div>
            <div className='hero-content'>
                
            {slug == '/' || '' ? 
                <h1>{title}</h1>
                :
                <h2>{title}</h2>
            }
                <p>{subText}</p>
            </div>
        </>
    );
}