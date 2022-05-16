import React, { useState } from 'react'
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useStyles } from './styles'

const Login = ({ getToken }) => {
  const classes = useStyles();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const authenticate = async (obj) => {

    const user = {
      email: obj.email,
      password: obj.password
    }
    //var token;
    const res = await fetch(`${process.env.REACT_APP_SERVER}/auth/login`, {
      method: 'POST',
      headers: {
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
      token: response.token,
      message: response.message
    }
    //getToken(token)
    // console.log(token)
    // console.log(token.token)
    // console.log(token.message)
    if (token.token === undefined)
      alert('Login Failed');
    else {
      alert('Login Successful');
      getToken(token.token)
    }

    return

  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      alert('Please enter email')
      return
    }
    if (!password) {
      alert('Please enter password')
      return
    }

    authenticate({ email, password })
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
      <Container className={classes.root}>
        <h1 style={{ color: "#000", alignItems: "center", fontSize: "3rem" }}>
          Sign In
        </h1>
        <form onSubmit={onSubmit}>
          <div className={classes.txtfield}>
            <TextField className={classes.outfield}
              InputProps={{
                className: classes.txtfield,
              }}
              InputLabelProps={{
                className: classes.txtfield,
              }} 
              type="text" 
              label="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div>
            <TextField className={classes.outfield}
              InputProps={{
                className: classes.txtfield,
              }}
              InputLabelProps={{
                className: classes.txtfield,
              }} 
              type="password" 
              label="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div>
            <Button className={classes.formBtn} type="Submit" value="Login" onChange={(e) => setEmail(e.target.value)} >
              Login
            </Button>
          </div>
        </form>
      </Container>
    </>
  )
}

export default Login
