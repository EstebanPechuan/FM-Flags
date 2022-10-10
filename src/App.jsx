import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Header from "./components/Header/Header";
import './App.css'
import CardDetail from "./components/CardDetail/CardDetail";
import CardContainer from './components/CardContainer/CardContainer';

function App() {
    const [loading, setLoading] = useState(true)
    const [dataApi, setDataApi] = useState([])

    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(data => data.json())
        .then(data => {
            setDataApi(data)
            setLoading(false)
            // console.log(data);
        })

    }, [])
  
  return (
    loading ? 
    'Cargando' :

    <div className="App">
      <Header />
      <CardContainer datos={dataApi} />

      {/* <BrowserRouter>
        <Routes>
          <Route path="/about" element={<CardContainer datos={dataApi} />} />
          <Route path="/:id" element={<CardDetail datos={dataApi} />} />
        </Routes>
      </BrowserRouter> */}
    </div>
  )
}

export default App