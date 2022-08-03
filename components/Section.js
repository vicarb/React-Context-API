import React from 'react'
import { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'

export const Section = () => {
  const { counter, increment, decrement } = useContext(GlobalContext)
  return (
    <>
  
    <div className="flex justify-center">
        <div className="block p-6 rounded-lg shadow-lg bg-blue-200 max-w-sm">
            <h1 className='font-bold'>Component 1</h1>
            <button className="p-2 rounded-md bg-red-50" onClick={decrement}>-</button>
            <span className='p-4 text-4xl'>{counter}</span>
            <button className="p-2 rounded-md bg-green-50" onClick={increment}>+</button>
        </div>
    </div>
</>
  )
}
