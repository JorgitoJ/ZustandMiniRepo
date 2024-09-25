import React from 'react'
import { create } from 'zustand';

import './update.css'

const usePersonStore = create((set) => ({
    firstName: '',
    lastName: '',
    updateFirstName: (firstName) => set({ firstName }),
    updateLastName: (lastName) => set({ lastName }),
    }));


export const Update = () => {
    
    const firstName = usePersonStore(state => state.firstName);
    const lastName = usePersonStore(state => state.lastName);
    const updateFirstName = usePersonStore(state => state.updateFirstName);
    const updateLastName = usePersonStore(state => state.updateLastName);

    const handleFirstNameChange = (event) => {
        updateFirstName(event.target.value);
    };

    const handleLastNameChange = (event) => {
        updateLastName(event.target.value);
    };
    
    return (

        <div className='inputs'>
            

            <input 
            type="text"
            value={firstName}
            onChange={handleFirstNameChange}
            placeholder="Primer nombre"
            />

            <input 
            type="text"
            value={lastName}
            onChange={handleLastNameChange}
            placeholder="Apellido"
            />

            <p className='text'>Nombre completo: {firstName} {lastName}</p>
    </div>

    )
}
