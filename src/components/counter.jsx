import React from 'react'
import {create} from 'zustand'

import './counter.css'

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
