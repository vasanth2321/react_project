import React, { useState } from 'react'
import Sign from './Sign'
// import Signup from './Signup'


const Task = () => {
    const [show,setCount]=useState(true)
    function Vs() {
        setCount(true)
    }

    function ss() {
        setCount(false)
    }
  return (
    <div>
       <button onClick={Vs}>signin</button>
       <button onClick={ss}>signup</button>

       {show == true ? <Sign/>:<Signup/>}
    </div>
  )
}

export default Task
