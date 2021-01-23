import React from 'react'
import CardItem from './CardItems'
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Resources</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                      <CardItem 
                            src="images/1500x500.jpg" text="UnclePunch's Training Mode" label='Training' path='https://github.com/UnclePunch/Training-Mode'>
                        </CardItem> 
                        <CardItem 
                            src="images/JkWhExD__400x400.png" text="Slippi" label='Online Play' path='https://slippi.gg/'>
                        </CardItem> 
                        <CardItem 
                            src="images/Wfbzzxn0_400x400.jpg" text="Akaneia" label='Mod' path='https://github.com/akaneia/akaneia-build/releases/tag/0.5'>
                        </CardItem> 
                        <CardItem 
                            src="images/v-FDSByE_400x400.png" text="Dolphin Emulator" label='Emulator' path='https://slippi.gg/netplay'>
                        </CardItem> 
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards 
