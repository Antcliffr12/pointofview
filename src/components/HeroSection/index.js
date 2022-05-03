import React from 'react';
import './hero.scss';

export default function Hero(props) {
    const {title, subText, media} = props;
    let heading


    heading = <h1>{title}</h1>

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
                
                <h1>{title}</h1>
                <p>{subText}</p>
            </div>
        </>
    );
}