import React from 'react';
import {useDarkMode} from './hooks/useDarkMode';


const NavBar = (props) =>{
    const [darkMode, setDarkMode] = useDarkMode(false)
    const toggle = e =>{
        e.preventDefault()
        setDarkMode(!darkMode)
    }
    return(
        <>
        <h1>Women's Soccer Players</h1>
        <p><button onClick={toggle}>Mode {darkMode ? 'dark' : 'light'} </button></p>
        </>
        
    )
}
export default NavBar;