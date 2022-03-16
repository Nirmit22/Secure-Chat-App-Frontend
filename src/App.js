import { useState, useEffect } from "react";
import Allmessages from "./components/Allmessages";
import MessageInput from "./components/MessageInput";
import Rerender from "./components/Rerender";

function App() {

  const [messages, setMessages] = useState([]);
  useEffect(()=>{
    const getMessages = async() => {
      const messagesFromServer = await fetchMessages()
      setMessages(messagesFromServer)
    }
    

    getMessages()
  },[])

  const fetchMessages = async () =>{
    const res = await fetch('https://shrouded-gorge-29871.herokuapp.com/')
    const data = await res.json()

    //console.log(data);
    return data;
  }

  const addMessage = async(obj) => {

    const finmessage = {

      chatid : 1 ,
      userid : obj.name ,
      message : obj.text
    }

    
    const res = await fetch('https://shrouded-gorge-29871.herokuapp.com/', {
      method: 'POST',
      headers:{
        'Content-type': 'application/json'
      },
      body: JSON.stringify(finmessage)
    })

    //const data= await res.json()
    const data = await fetchMessages()
    setMessages(data)
    //setMessages([...messages, finmessage])
  }
  return (
    <div>
      <h1>Secure Chat Application</h1>
      {/* <Chatbox name='Nirmit' message='Hello' /> */} 
      <MessageInput onAdd={addMessage}></MessageInput>
      <Allmessages messages={messages}></Allmessages>
      {/* <Rerender fetchMessages={fetchMessages} messages={messages} setMessages={setMessages}></Rerender> */}
    </div>

  );
}

export default App;
