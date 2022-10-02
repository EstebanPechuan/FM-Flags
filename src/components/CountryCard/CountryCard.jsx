import './CountryCard.css'
import { Link } from "react-router-dom";

function CountryCard({card, id}) {    
    return ( 
        <Link to={`/${id}`}>
            <div className="country">
                <img src={card.flags.png} alt="" />

                <div className="countryInfo">
                    <h2>{card.name.official}</h2>

                    <ul>
                        <li><strong>Population:</strong> {card.population}</li>
                        <li><strong>Region:</strong> {card.region}</li>
                        <li><strong>Capital:</strong> {card.capital}</li>
                    </ul>
                </div>
            </div>
        </Link>
     );
}

export default CountryCard;