import CountryCard from '../CountryCard/CountryCard'
import './CardContainer.css'
import { useState, useEffect } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi'

function CardContainer(props) {
    const [country, setCountry] = useState('')
    const [continent, setContinent] = useState('All')
    const [newArray, setNewArray] = useState(props.datos)

    useEffect(() => {

        if (country == '' && continent == 'All') {
            setNewArray(props.datos)
        } else if (country != '' && continent == 'All') {
            let filtrado = props.datos.filter(item => item.name.official.toLowerCase().includes(country.toLowerCase()))
            setNewArray(filtrado)
        } else if (country == '' && continent != 'All') {
            let filtrado = props.datos.filter(item => item.continents[0].toLowerCase().includes(continent.toLowerCase()))
            setNewArray(filtrado)
        } else {
            let filtrado = props.datos.filter(item => (item.name.official.toLowerCase().includes(country.toLowerCase()) && (item.continents[0].toLowerCase().includes(continent.toLowerCase()))))
            setNewArray(filtrado)
        }

    }, [country, continent])
    
    return (
        <>
            <div className="filters">
                <div className="input">
                    <BiSearchAlt2 />
                    <input placeholder='Search for a country...' type="text" onChange={e => setCountry(e.target.value)} />
                </div>

                <select name="continents" id="continents" onChange={e => setContinent(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Africa">Africa</option>
                    <option value="Antarctica">Antarctica</option>
                    <option value="Asia">Asia</option>
                    <option value="South America">South America</option>
                    <option value="North America">North America</option>
                    <option value="Europe">Europe</option>
                    <option value="Oceania">Oceania</option>
                </select>
            </div>
            <div className='container'>
                {
                    newArray.map((item, index) => {
                        if (index < 20) {
                            let posicion = props.datos.findIndex(element => element.name.official == item.name.official)
                            
                            return <CountryCard key={index} card={item} id={posicion} />
                        }
                    })
                }
            </div>
        </>
     );
}

export default CardContainer;