import React from 'react'
import { useState, useEffect } from "react";
import Allmessages from "./Allmessages";
import MessageInput from "./MessageInput";
import Sidebar from "./Sidebar";
import Grid from '@material-ui/core/Grid';
import './Chat.css';



const Chat = ({token, email}) => {

  //console.log(`The token here is ${token}`)
  
  const [messages, setMessages] = useState([]);
  const [chatid, setChatid] = useState('1')
  //setChatid('489a6e7c-32b4-41b7-b990-ef33aebb1bd7')

 

  useEffect(()=>{
    const getMessages = async() => {

      console.log(chatid, "haha")
      const messagesFromServer = await fetchMessages()
      setMessages(messagesFromServer)
    }  

    console.log("bwaha",chatid)
    getMessages()

    const interval=setInterval(()=>{
      getMessages()
     },1000)

      return()=>clearInterval(interval)
  },[chatid])
 
  //console.log(process.env.REACT_APP_SERVER)
  const fetchMessages = async () =>{
    const res = await fetch(`${process.env.REACT_APP_SERVER}/chat`,{
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
        'Authorization' : `Bearer ${token}`
    },
    body: JSON.stringify({"chatid" : chatid})
    })
    //console.log(res);
    const data = await res.json()
    //console.log(data);
    console.log(chatid)
    //console.log(data);

    setMessages(data)
    return data;
  }
  console.log(chatid)
  const addMessage = async(obj) => {

        const finmessage = {

        chatid : chatid ,
        userid : email ,
        message : obj.text
        }

        
        const res = await fetch(`${process.env.REACT_APP_SERVER}/message`, {
        method: 'POST',
        headers:{
            'Content-type': 'application/json',
            'Authorization' : `Bearer ${token}`
        },
        body: JSON.stringify(finmessage)
        })

        //const data= await res.json()
        const data = await fetchMessages()
        setMessages(data)
    }
  return (
    <Grid container>
       <Grid item xs={1}>
       <Sidebar setChatid = {setChatid} token = {token}/>
       </Grid>
       <Grid item xs={11}>
        <MessageInput onAdd={addMessage}></MessageInput>
        <Allmessages messages={messages}></Allmessages>
      </Grid>
    </Grid>
  )

}

export default Chat;
