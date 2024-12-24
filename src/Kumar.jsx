import { useContext } from 'react'
import React  from 'react'
import {  userContext } from './signup'
const Kumar = () => {

  const username=useContext(userContext)
  return (
    <div>
     <h1>welcome ,{username}</h1>
     
    </div>
  )
}

export default Kumar
