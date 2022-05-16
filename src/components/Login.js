import React, { useState } from 'react'

const Login = ({getToken}) => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const authenticate = async(obj) =>{

      const user = {
        email: obj.email,
        password: obj.password
      }
      //var token;
      const res = await fetch(`${process.env.REACT_APP_SERVER}/auth/login`,{
        method: 'POST',
        headers:{
            'Content-type': 'application/json'
        },
        body: JSON.stringify(user)
      })
      
      // .then((response)=>{response.json().then((result=>{
      //     token = JSON.stringify({
      //       token: result.token,
      //       message: response.message   
      //     })
      // }))

      // })
      const response = await res.json()

      const token = {
        token : response.token,
        message: response.message
      }
      //getToken(token)
      // console.log(token)
      // console.log(token.token)
      // console.log(token.message)
      if(token.token === undefined)
        alert('Login Failed');
      else 
      {
        alert ('Login Successful');
        getToken(token.token)
      }

      return

    }

    const onSubmit = (e)=>{
      e.preventDefault();
      if(!email)
      {
        alert('Please enter email')
        return
      }
      if(!password)
      {
        alert('Please enter password')
        return
      }

      authenticate({email, password})
      setEmail('');
      setPassword('');

      //alert(token.token)

      //console.log(token)

      // if(!token.token)
      // {
      //   alert('Incorrect email or password')
      // }


    }
  return (
    <>
      <form onSubmit={onSubmit}>
          <div>
              <input type="text" label="email" value={email} onChange = {(e) => setEmail(e.target.value)}/>
          </div>
          <div>
              <input type="password" label="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
          </div>
          <div>
              <input type="Submit" value="Login" onChange = {(e) => setEmail(e.target.value)}/>
          </div>
      </form>
    </>
  )
}

export default Login
