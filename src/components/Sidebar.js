import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = ({setChatid , token}) => {

  const [chats, setChats] = useState([])

  const getChats = async() =>{
    const res = await fetch(`${process.env.REACT_APP_SERVER}/userchats`,{
        method: 'GET',
        headers:{
            'Content-type': 'application/json',
            'Authorization' : `Bearer ${token}`
        }
    })
  // const setChat = async()=>{
  //   setChatid
  // }
    //alert("Signup Successful")
    const response = await res.json()
    console.log(response);
    setChats(response)

    return
}
  //getChats()
    // chats = [1,2,3,4]
  return (
    <ProSidebar>
        <SidebarHeader>
        All Chats
        </SidebarHeader>
        <Menu iconShape="square">
        {chats.map( (m) => (
          <MenuItem onClick = {async()=>{
            setChatid(m.chatid)
            console.log(m.chatid)
          }}>{m.chatname}</MenuItem>
        ))
        }
        <MenuItem ><button onClick={getChats}>Get Chats</button></MenuItem>
       
        </Menu>
        <SidebarFooter>
            All Chats
    {/**
     *  You can add a footer for the sidebar ex: copyright
     */}
        </SidebarFooter>
    </ProSidebar>   
  )
}

export default Sidebar
