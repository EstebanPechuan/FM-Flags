import { useState, useEffect } from 'react'
import CardContainer from './components/CardContainer/CardContainer'
import CountryCard from './components/CountryCard/CountryCard'
import './App.css'

function App() {
  const [theme, setTheme] = useState('Dark theme')
  const [icon, setIcon] = useState('moon')
  const [dataApi, setDataApi] = useState()

  useEffect(() => {
    // console.log('Llamada a API');

    obtenerDatos()
  }, [])

  const obtenerDatos = async () => {
    const data = await fetch("https://restcountries.com/v3.1/all")
    const users = await data.json()
    // console.log(users);
    setDataApi(users)
  }
  console.log(dataApi);


  const toggleTheme = () => {
    if (theme == 'Dark theme') {
      setTheme('Light theme')
      setIcon('sun')
    } else {
      setTheme('Dark theme')
      setIcon('moon')
    }
  }


  return (
    <div className="App">

      <header>
        <h1>Where in the world?</h1>
        
        <div className="dark">
          <button onClick={toggleTheme}>
            <box-icon name={icon}></box-icon>
            {theme}
          </button>
        </div>
      </header>

      {
        // console.log('hola', dataApi)
        dataApi.map(item => {
          console.log(item);
        })
      }
      
      {/* <CountryCard name={dataApi} /> */}
    </div>
  )
}

export default App
