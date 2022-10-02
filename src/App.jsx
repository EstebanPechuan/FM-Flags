import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from "./components/Header/Header";
import './App.css'
import CardDetail from "./components/CardDetail/CardDetail";
import CardContainer from './components/CardContainer/CardContainer';

function App() {1
    const [loading, setLoading] = useState(true)
    const [dataApi, setDataApi] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(data => data.json())
        .then(data => {
            setDataApi(data)
            setLoading(false)
        })
    }, [])
  
  return (
    loading ? 
    'Cargando' :

    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/" element={<CardContainer datos={dataApi} />} />
          <Route path="/:id" element={<CardDetail datos={dataApi} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App