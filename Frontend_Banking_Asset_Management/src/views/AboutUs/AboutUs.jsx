import React from 'react'
import cardRobin from '../../assets/images/db-bank-AbouUs-Robin.png'
import cardAndrejs from '../../assets/images/db-bank-AbouUs-Andrej.png'

export default function AboutUs() {
    return (
        <div className='aboutUsContainer'>

            <div className='cardContainer1'>
                <div className='cardRobin'>
                    <img className='image-robin' src={cardRobin} /> 
                    <h2 className='about-us-card-header'>Robin Skladny</h2>
                    <p className='about-us-card-text'>Backend/Frontend</p>
                </div>



                <div className='cardAndrejs'>

                     <img className='image-andrejs' src={cardAndrejs} /> 
                         <h2 className='about-us-card-header'>Andrejs Grocs</h2>
                         <p className='about-us-card-text'>Frontend/Backend</p>
                </div>




            </div>
        </div>
    )
}