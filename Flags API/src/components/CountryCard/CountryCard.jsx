import React, { useEffect } from 'react'

function CountryCard(props) {

    // useEffect(() => {
    //     console.log(props.datos);
    // }, [])

    console.log(props);
    
    return ( 
        <div className="country">
            {/* <img src={props.datos[0].flags.png} alt="" />

            <div className="countryInfo">
                <h2></h2>

                <ul>
                    <li><strong>Population:</strong> {props.datos[0].population}</li>
                    <li><strong>Region:</strong> {props.datos[0].region}</li>
                    <li><strong>Capital:</strong> {props.datos[0].capital}</li>
                </ul>
            </div> */}

            hola
        </div>
     );
}

export default CountryCard;