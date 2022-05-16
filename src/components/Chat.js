import React from 'react'
import { useState, useEffect } from "react";
import Allmessages from "./Allmessages";
import MessageInput from "./MessageInput";
import './Chat.css';



const Chat = ({token, chatid}) => {

    console.log(`The token here is ${token}`)
    
  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    const getMessages = async() => {
      const messagesFromServer = await fetchMessages()
      setMessages(messagesFromServer)
    }  
    getMessages()

    const interval=setInterval(()=>{
      getMessages()
     },1000)

      return()=>clearInterval(interval)
  },[])
 
  console.log(process.env.REACT_APP_SERVER)
  const fetchMessages = async () =>{
    const res = await fetch(`${process.env.REACT_APP_SERVER}/chat`,{
      method: 'POST',
      headers:{
        'Content-type': 'application/json',
        'Authorization' : `Bearer ${token}`
    },
    body: JSON.stringify({chatid : chatid})
    })
    //console.log(res);
    const data = await res.json()
    //console.log(data);

    //console.log(data);
    return data;
  }

  const addMessage = async(obj) => {

        const finmessage = {

        chatid : 1 ,
        userid : obj.name ,
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
    <div>
       <div>
        <h1>Secure Chat Application</h1>
        {/* <Chatbox name='Nirmit' message='Hello' /> */} 
        {/* <Login></Login> */}
        <MessageInput onAdd={addMessage}></MessageInput>
        <Allmessages messages={messages}></Allmessages>
        {/* <Rerender fetchMessages={fetchMessages} messages={messages} setMessages={setMessages}></Rerender> */}
      </div>
    </div>
  )

}

export default Chat;
