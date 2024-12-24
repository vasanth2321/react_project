import React from 'react'
import About from './About'

const Contact = (props) => {
  return (
    <div>
      <h1>Contact page {props.aa}</h1>
      <About aaa={props.aa}/>
    </div>
  )
}

export default Contact
