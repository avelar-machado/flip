import React, { useState } from 'react'
import Coin from './Coin'


function FlipCoin () {

    const coins = [ 
        // Sides of the coin 
        { 
            side: 'head',  
            imgSrc: 
    'https://media.geeksforgeeks.org/wp-content/uploads/20200916123059/SHalfDollarObverse2016head-300x300.jpg'
        }, 
        { 
            side: 'tail',  
            imgSrc: 
    'https://media.geeksforgeeks.org/wp-content/uploads/20200916123125/tails-200x200.jpg'
        } 
    ] 

    const [state, setSate] = useState({
        currFace: null, 
        totalFlips: 0, 
        heads: 0 
    });

    function flipCoin() {

        const randomIdx = Math.floor(Math.random() * coins.length);
        const newFace = coins[randomIdx];

        setSate ({
            ...state,
            currFace: newFace,
            totalFlips: state.totalFlips + 1,
            heads: state.heads + (newFace.side === 'head' ? 1 : 0),
        })
    }

    const { currFace, totalFlips, heads } = state;

    return ( 
        <div> 
            <h2>Let's flip a coin</h2> 
            {/* If current face exist then show current face */} 
            {currFace && <Coin info={currFace} />} 
            {/* Button to flip the coin  */} 
            <button onClick={flipCoin}>Flip Me!</button> 
            <p> 
                Out of {totalFlips} flips, there have been {heads} heads 
                and {totalFlips - heads} tails 
            </p> 
        </div> 
    )

}

export default FlipCoin;

