import './CardDetail.css'
import { BsArrowLeft } from "react-icons/bs";
import { useParams, Link } from "react-router-dom";

function CardDetail({datos}) {
    const { id } = useParams()
    
    return (
        <>
            <div className="backArrow">
                <Link to='/'> <BsArrowLeft /> Back</Link>
            </div>

            <div className="content">
                <div className="flag">
                    <img src={datos[id].flags.png} alt="" />
                </div>

                <div className="info">
                    <h2>{datos[id].name.common}</h2>

                    <div className="columns">
                        <div className="left">
                            <h3>Native Name: <span>{Object.values(datos[id].name.nativeName)[Object.values(datos[id].name.nativeName).length - 1].common}</span></h3>
                            <h3>Population: <span>{datos[id].population}</span></h3>
                            <h3>Region: <span>{datos[id].region}</span></h3>
                            <h3>Sub Region: <span>{datos[id].subregion}</span></h3>
                            <h3>Capital: <span>{datos[id].capital[0]}</span></h3>
                        </div>

                        <div className="right">
                            <h3>Top Level Domain: <span>{datos[id].tld[0]}</span></h3>
                            <h3>Currencies: <span>{Object.values(datos[id].currencies)[0].name}</span></h3>
                            <h3>Languages: <span>{Object.values(datos[id].languages).join(', ')}</span>
                            </h3>
                        </div>
                    </div>

                    <div className="borders">
                        <h3>Border Countries <span>{Object.values(datos[id].borders).join(', ')}</span></h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CardDetail