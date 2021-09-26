import React, { useEffect } from 'react';
import { useState } from 'react/cjs/react.development';
import Cart from '../Cart/Cart';
import Speaker from '../Speaker/Speaker';
import './Speakers.css'


const Speakers = () => {
    const [speakers, setSpeakers] = useState([]);
    const [cartSpeaker, setCartSpeaker] = useState([]);
    useEffect(()=>{
        fetch('./speaker.JSON')
        .then(res => res.json())
        .then(data => setSpeakers(data))
    },[]);
    const handleAddToSpeakerAndCost = (speaker) => {
           let newCartSpeaker = [...cartSpeaker, speaker];
           setCartSpeaker(newCartSpeaker)
    }
return (
            <div className="speakers">
            <div className= "speakers-style">
                {
                  speakers.map(speaker => <Speaker 
                     key={speaker.id} 
                     speaker={speaker}
                     handleAddToSpeakerAndCost={handleAddToSpeakerAndCost}></Speaker>)
                }
            </div>
            <div className="total-optimize">
                <Cart cartSpeaker={cartSpeaker}></Cart>
            </div>
        </div>
       
    );
};

export default Speakers;