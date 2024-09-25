import React from 'react'
// import { Header } from './components/header'
import { Data } from './components/data'
import './App.css'
import { Navbar } from './components/navbar'

import {
    BrowserRouter as Router,
    Route,
    Routes,
    } from "react-router-dom";
import { Examples } from './examples/examples';
import { Footer } from './components/footer';

export const App = () => {
    return (


        <div className='App'>
            <Router>
            <Navbar/>
                <Routes>
                    <Route path='/' element={<Data/>}/>
                    <Route path='/examples' element={<Examples/>}/>
                </Routes>
            <Footer/>
            </Router>
            
        </div>
        
    )
}
