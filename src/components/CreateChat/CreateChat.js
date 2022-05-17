import React from 'react'
import { useState, useEffect } from 'react'
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useStyles } from './styles'

const CreateChat = ({ token }) => {
  const classes = useStyles();
  const [chatname, setChatname] = useState("")
  const [userids, setUserids] = useState([])
  const [allusers, setAllusers] = useState([])

  const getallusers = async () => {
    const resp = await fetch(`${process.env.REACT_APP_SERVER}/allusers`, { method: 'GET' })
    const res = await resp.json()
    var emails = [];
    //console.log(res)
    res.forEach(element => {
      emails.push(element.email)
    })
    setAllusers(emails);
  }

  //console.log(token)
  // useEffect(()=>{
  //     getallusers()
  // },[])
  getallusers()

  const create = async () => {

    const user = {
      userids: userids,
      chatname: chatname,
    }
    //var token;
    const res = await fetch(`${process.env.REACT_APP_SERVER}/createchat`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        'Authorization': `Bearer ${token}`
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
    e.preventDefault();

    if (!chatname) {
      alert('Please enter chatname')
      return
    }
    if (!userids) {
      alert('Please enter userid')
      return
    }

    console.log("ola")
    console.log(userids)
    create()
    setChatname('')
    setUserids([])
    alert("created")

  }
  return (
    <Container className={classes.root}>
      <h1 style={{ color: "#000", alignItems: "center", fontSize: "3rem", fontFamily:'Poppins'}}>
        Create Chat
      </h1>
      <form onSubmit={onSubmit}>
        <TextField className={classes.outfield}
          InputProps={{
            className: classes.txtfield,
          }}
          InputLabelProps={{
            className: classes.txtfield,
          }}
          type="text" label="chatname" value={chatname} onChange={(e) => setChatname(e.target.value)} /><br/>
        <TextField className={classes.outfield}
          InputProps={{
            className: classes.txtfield,
          }}
          InputLabelProps={{
            className: classes.txtfield,
          }}
          type="text" label="userids" value={userids} onChange={(e) => setUserids([e.target.value])} />
        {/* <select value={userids} onChange = {(e)=>setUserids([e.target.value])}>
              {allusers.map((email)=>(
                <option value={email}>{email}</option>
              ))}
          </select> */}
        <div>
          <Button className={classes.formBtn} type="Submit" value="Create" >
            Submit
          </Button>
        </div>
      </form>
    </Container>
  )
}

export default CreateChat
