import React from 'react'
import { useState, useEffect } from 'react'

const CreateChat = ({token}) => {

    const [chatname, setChatname] = useState("")
    const [userids, setUserids] = useState([])
    const [allusers, setAllusers] = useState([])

    const getallusers = async()=>{
        const resp = await fetch(`${process.env.REACT_APP_SERVER}/allusers`,{method:'GET'})
        const res = await resp.json()
        var emails = [];
        //console.log(res)
        res.forEach(element=>{
            emails.push(element.email)
        })
        setAllusers(emails);
    }

    //console.log(token)
    // useEffect(()=>{
    //     getallusers()
    // },[])
    getallusers()

    const create = async() =>{

        const user = {
          userids: userids,
          chatname: chatname,
        }
        //var token;
        const res = await fetch(`${process.env.REACT_APP_SERVER}/createchat`,{
            method: 'POST',
            headers:{
                'Content-type': 'application/json',
                'Authorization' : `Bearer ${token}`
            },
            body: JSON.stringify(user)
        })
        
        //alert("Signup Successful")
        const response = await res.json()
        console.log(response);

        alert(response.message)

        return
    }
    const onSubmit = (e)=>{
        e.preventDefault();
       
      if(!chatname)
      {
        alert('Please enter chatname')
        return
      }
      if(!userids)
      {
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
    <>
      <form onSubmit={onSubmit}>
          <div>Chat name
              <input type="text" label="chatname" value={chatname} onChange = {(e) => setChatname(e.target.value)}/>
          </div>
          <div>User id
              <input type="text" label="userids" value={userids} onChange = {(e) => setUserids([e.target.value])}/>
          </div>
          {/* <select value={userids} onChange = {(e)=>setUserids([e.target.value])}>
              {allusers.map((email)=>(
                <option value={email}>{email}</option>
              ))}
          </select> */}
          <div>
              <input type="Submit" value="Create"/>
          </div>
      </form>
    </>
  )
}

export default CreateChat
