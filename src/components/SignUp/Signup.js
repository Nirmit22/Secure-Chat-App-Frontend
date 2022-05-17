import React, { useState } from 'react'
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useStyles } from './styles'

const Signup = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [age, setAge] = useState("")

  const signup = async (obj) => {

    const user = {
      email: obj.email,
      password: obj.password,
      name: obj.name,
      age: obj.age
    }
    //var token;
    const res = await fetch(`${process.env.REACT_APP_SERVER}/auth/signup`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(user)
    })

    //alert("Signup Successful")
    const response = await res.json()
    console.log(response);

    alert(response.message)

    return
  }

  const onSubmit = (e) => {
    // e.preventDefault;
    if (!email) {
      alert('Please enter email')
      return
    }
    if (!password) {
      alert('Please enter password')
      return
    }
    if (!name) {
      alert('Please enter name')
      return
    }
    if (!age) {
      alert('Please enter age')
      return
    }

    signup({ email, password, name, age })
    setEmail('');
    setPassword('');
    setAge('');
    setName('');


  }
  return (
    <Container className={classes.root}>
      <h1 style={{ color: "#000", alignItems: "center", fontSize: "3rem", fontFamily:"Poppins" }}>
          Sign UP
        </h1>
      <form onSubmit={onSubmit}>
        <div>
          <TextField
            InputProps={{
              className: classes.txtfield,
            }}
            InputLabelProps={{
              className: classes.txtfield,
            }}
            type="text" label="name" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <div>
          <TextField
            InputProps={{
              className: classes.txtfield,
            }}
            InputLabelProps={{
              className: classes.txtfield,
            }}
            type="text" label="age" value={age} onChange={(e) => setAge(e.target.value)} />
        </div>
        <div>
          <TextField
            InputProps={{
              className: classes.txtfield,
            }}
            InputLabelProps={{
              className: classes.txtfield,
            }}
            type="text" label="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <TextField
            InputProps={{
              className: classes.txtfield,
            }}
            InputLabelProps={{
              className: classes.txtfield,
            }}
            type="password" label="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div>
          <Button className={classes.formBtn} type="Submit" value="Sign Up" >
            SignUp
          </Button>
        </div>
      </form>
    </Container>
  )
}

export default Signup
