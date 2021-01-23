import '../App.css';
import React, { Component } from 'react';
import { Button } from './Button'
import './HeroSection.css';
import { Link } from 'react-router-dom'

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src="/videos/Melee HD Asset Download CSS Menu Background Seamless Animation Loop (Super Smash Bros. Melee).mp4" autoPlay loop muted></video>
            <h1>MELEE AWAITS</h1>
            <p>All of Online Melee's Resources In One Spot</p>
            <div className="hero-btns">
                <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>GET STARTED</Button>
            </div>
        </div>
    )
}

export default HeroSection
