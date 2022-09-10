import React, { useEffect } from 'react'
import CountryCard from '../CountryCard/CountryCard'

function CardContainer(props) {
    useEffect(() => {
        console.log('hola');
    })
    
    
    return ( 
        <>
            <h1>Hola</h1>


            {/* <img src={props.datos[0].flags.png} alt="" /> */}

            {/* <CountryCard /> */}
        </>
     );
}

export default CardContainer;