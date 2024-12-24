import React, { useState } from 'react'

function Project() {

  const [variable,setCount]= useState([{

img:"https://pixlr.com/images/generator/how-to-generate.webp",
name:"vasanth",
age:21,
  },
  
    {

      img:"https://pixlr.com/images/generator/how-to-generate.webp",
      name:"vasanth",
      age:21,
        },
        {

          img:"https://pixlr.com/images/generator/how-to-generate.webp",
          name:"vasanth",
          age:21,
            },
            {

              img:"https://pixlr.com/images/generator/how-to-generate.webp",
              name:"vasanth",
              age:21,
                },
                {

                  img:"https://pixlr.com/images/generator/how-to-generate.webp",
                  name:"vasanth",
                  age:21,
                    },
                    {

                      img:"https://pixlr.com/images/generator/how-to-generate.webp",
                      name:"vasanth",
                      age:21,
                        },
                        {

                          img:"https://pixlr.com/images/generator/how-to-generate.webp",
                          name:"vasanth",
                          age:21,
                            },
                            {

                              img:"https://pixlr.com/images/generator/how-to-generate.webp",
                              name:"vasanth",
                              age:21,
                                },
                                {

                                  img:"https://pixlr.com/images/generator/how-to-generate.webp",
                                  name:"vasanth",
                                  age:21,
                                    },
  

  ]
  )


  return (
<div>
  <div className='container'>
      <div className="row justify-Content-around " >
        {
          variable.map(variable => ((
      <div className="col-md-4 mt-5">
        <div class="card" style={{ width: '18rem' }}>
          <img src={variable.img} class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title text-center">{variable.name}</h5>
            <p class="card-text text-center">{variable.age}</p>
            <div className='row'>
           <button>Sumit </button>&nbsp;
           <button>Edit</button>
          </div>
        </div></div></div>
          )))}</div></div></div>
      
      
          
 ) 
}

export default Project
