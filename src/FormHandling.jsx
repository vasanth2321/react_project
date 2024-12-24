import React, { useState } from 'react'

const FormHandling = () => {

    const [username, setusername] = useState()
    const [password, setpassword] = useState()

    const handleUsername = (event) =>{

        setusername(event.target.value)
        console.log(username);
        
    }
    const handlePassword = (event) =>{

        setpassword(event.target.value)
        console.log(password);}

        const handlesubmit  = () => {

      console.log(`username: ${username}`);
      console.log(`password: ${password}`);
      
      
        
        }
  return (
    <div>
      <div className='container mt-5'>
<label>username</label><br></br>
        <input type="text" name="username" value={"username"} onChange={{handleUsername}}/><br></br>
<label>password</label><br></br>
        <input type="text" name="password" value={"password"} onChange={{handlePassword}}/><br></br>

        <button onClick={{handlesubmit}}>submit</button>
      </div>
    </div>
  )
}

export default FormHandling
