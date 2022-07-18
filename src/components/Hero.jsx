import React from 'react'
import Photo from '../images/photo-grid.png'

export default function Hero() {
    return (
        <div className='hero'>
            <img src = {Photo} />
            <h2>Online Experiences</h2>
            <p>Join unique interactive activities
                led by one-of-a-kind hosts-all without
                leaving home.
            </p>
        </div>
    )
}