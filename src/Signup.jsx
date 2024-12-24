import React, { createContext,  useState } from 'react'
import Vasanth from './Vasanth'
import { Link } from 'react-router-dom'
import Kumar from './Kumar'

export const userContext=createContext()
const Signup =() => {
const[usarName,setUsername]=useState('vasanth')
    
  return (
    <div>
    <userContext.Provider value={usarName}> 
<h1>vasanth</h1>
<Kumar/>
    </userContext.Provider>
    </div>
  )
}

export default Signup
