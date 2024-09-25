import React from 'react'
import { Counter } from '../components/counter'
import { Update } from '../components/update'

import './examples.css'


export const Examples = () => {
    return (
        <div className='body'>
            <div>
            <h2 className='name'>Instalación</h2>
            <p className='text'>Zustand está disponible como paquete en NPM para su uso, o cualquier administrador de paquetes de su elección:</p>
            <pre><code>npm install zustand </code></pre>
            </div>
            <br />
            <hr />
            <h2 className='name'>Mostrando el Contador</h2>
            <div className='pre-container'>
            <pre className='counter'>{`
    import { create } from 'zustand';
    
    const add = create ((set)=> ({
        count:1,
        inc: () =>set((state)=> ({count: state.count+1})),
        dec: () =>set((state)=> ({count: state.count-1}))
    }))
    
    
    export const Counter = () => {
        
        const { count, inc , dec} = add ()
    
        return (
            <div className='count'>
                <button onClick={dec}>-</button>
                <span className='counter'>{count}</span>
                <button onClick={inc}>+</button>
            </div>
        )
    }
    `}</pre>
            </div>
            <Counter/>
            <br />
            <hr />
            <h2 className='name'>Mostrando el Update</h2>
            <pre className='update'>{`
    import { create } from 'zustand';
    
    const usePersonStore = create((set) => ({
        firstName: '',
        lastName: '',
        updateFirstName: (firstName) => set({ firstName }),
        updateLastName: (lastName) => set({ lastName }),
        })

        export const Update = () =
            const firstName = usePersonStore(state => state.firstName);
            const lastName = usePersonStore(state => state.lastName);
            const updateFirstName = usePersonStore(state => state.updateFirstName);
            const updateLastName = usePersonStore(state => state.updateLastNam
                const handleFirstNameChange = (event) => {
                    updateFirstName(event.target.value);
            };
            
            const handleLastNameChange = (event) => {
                    updateLastName(event.target.value);
            
                return (
                
                    <div className='input
            
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
            
            `}</pre>
            <Update/>
            <br />
        </div>
    )
}
