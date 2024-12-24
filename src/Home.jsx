import React from 'react'
import Contact from './Contact'


const Home = (props) => {
  return (
    <div>
       {/* <button type="button" class="btn btn-primary btn-lg">Large button</button> */}
       {/* <button type="button" class="btn btn-secondary btn-lg">Large button</button> */}
      <h1> Home page {props.a}</h1>
      <h2></h2>
      <Contact aa={props.a}/>
    </div>
  )
}

export default Home
