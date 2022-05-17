import { useState, useEffect } from "react";
import Allmessages from "./components/Allmessages";
import Login from "./components/Login/Login";
import MessageInput from "./components/MessageInput";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Signup from "./components/SignUp/Signup";
import CreateChat from "./components/CreateChat";
import Home from "./components/Home";

function App() {

  // const [messages, setMessages] = useState([]);
  const [token, setToken] = useState(undefined)
  //const [chatid, setChatid] = useState('1')
  const [email, setEmail] = useState('')
  
  const getToken = (res)=>{
    setToken(res);
    console.log(token)
  }

  const getEmail = (res)=>{
    setEmail(res);
    console.log(email)
  }

 

  // useEffect(()=>{
  //   const getMessages = async() => {
  //     const messagesFromServer = await fetchMessages()
  //     setMessages(messagesFromServer)
  //   }  
  //   getMessages()

  //   const interval=setInterval(()=>{
  //     getMessages()
  //    },1000)

  //     return()=>clearInterval(interval)
  // },[])
 
  // const fetchMessages = async () =>{
  //   const res = await fetch('https://shrouded-gorge-29871.herokuapp.com/')
  //   const data = await res.json()

  //   //console.log(data);
  //   return data;
  // }

  // const addMessage = async(obj) => {

  //   const finmessage = {

  //     chatid : 1 ,
  //     userid : obj.name ,
  //     message : obj.text
  //   }

    
  //   const res = await fetch('https://shrouded-gorge-29871.herokuapp.com/', {
  //     method: 'POST',
  //     headers:{
  //       'Content-type': 'application/json'
  //     },
  //     body: JSON.stringify(finmessage)
  //   })

  //   //const data= await res.json()
  //   const data = await fetchMessages()
  //   setMessages(data)
  //   //setMessages([...messages, finmessage])
  // } 
  return (
    <Router>
      <Navbar/>
      {/* <Sidebar setChatid = {setChatid} token = {token}/> */}
      <Routes>
      <Route path='/login' element={<Login getToken = {getToken} getEmail={getEmail}/>}/>
      <Route path='/sign-up' element ={<Signup/>}/>
      <Route path='/chat' element={<Chat token = {token} email = {email}/>}/>
      <Route path='/createchat' element={<CreateChat token ={token}/>}/>
      <Route path='/' element={<Home/>}/>
      </Routes>
      
    </Router>

  );
}

export default App;
