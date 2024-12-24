import React, { useEffect, useState } from 'react'
import Vasanth from './Vasanth'
import Kumar from './Kumar'
import Home from './Home'
import Contact from './Contact'
import About from './About'
import Abc from './Abc'
import Task from './Task'
import Project from './Project'
import Projectt from './Projectt'
import FormHandling from './FormHandling'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Sign from './Sign'
import Signup from './signup'

const App = () => {
  
  

  return (
    <div>

      {/* <h1>{vasanth}</h1>
      <button onClick={VS}>Click</button> */}
      {/* <Home a={abc}/> */}
    
     
     {/* <Abc/> */}
     {/* <Task/> */}
     {/* <Project/> */}
     <Projectt/>
     {/* <FormHandling/> */}

{/* <BrowserRouter>
<Routes>
  <Route path='/' element={<Project/>}
  ></Route>
<Route path='/home' element={<Task/>}
  ></Route>
  <Route path='/Sign' element={<Sign/>}
  ></Route>
  
  <Route path='/Projectt' element={<Projectt/>}></Route>
  <Route path='/vs' element={<Signup/>}></Route>
</Routes>
</BrowserRouter> */}
{/* <Signup/> */}

    </div>
  )
}

export default App
