import React from 'react'
import './Header.css'
import { useState, useEffect } from 'react'

function Header() {
    const [theme, setTheme] = useState(true)

    const toggleTheme = () => {
        setTheme(!theme)
    }
    
    useEffect(() => {console.log('Cambió el tema')}, [theme])

    return (
        <header>
            <h1>Where in the world?</h1>
            
            <div className="dark">
            <button onClick={toggleTheme}>
                <box-icon name={theme ? 'moon' : 'sun'}></box-icon>
                {theme ? 'Dark theme' : 'Light theme'}
            </button>
            </div>
        </header>
    )
}

export default Header