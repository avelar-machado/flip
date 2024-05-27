import React from 'react'

function Coin (props) {

    return ( 
        <div class='Coin'> 
            <img 
                style={{ width: '200px', height: '200px' }} 
                src={props.info.imgSrc} 
                alt='Coin'
            /> 
        </div> 
    ) 

}

export default Coin;