import React from 'react'
import './navbar.css'
import {useNavigate} from "react-router-dom";


export const Navbar = () => {

    const navigate = useNavigate()

    return (
        <div className='navbar'>
            <h1 className='titulo'>Zustand</h1>
            <div className='buttons'>
                <button className='btn' onClick={() => {navigate("/")}}>Información</button>
                <button className='btn' onClick={() => {navigate("/examples")}}>Ejemplos</button>
            </div>
            
        </div>
    )
}
