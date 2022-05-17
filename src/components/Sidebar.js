import React, { useState } from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import { Button, Grid, ListItem } from "@material-ui/core";
import 'react-pro-sidebar/dist/css/styles.css';
import { useStyles } from './styles';

const Sidebar = ({setChatid , token}) => {
  const classes = useStyles();
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
        <h1 style={{ color: "#fff", alignItems: "center", fontSize: "3rem", fontFamily:'Poppins',marginLeft:"10px"}}>
        All Chats
      </h1>
        </SidebarHeader>
        <Menu iconShape="square">
        {chats.map( (m) => (
          <MenuItem style={{fontFamily:"Poppins",fontSize:"1.2rem"}} onClick = {async()=>{
            setChatid(m.chatid)
            // console.log(m.chatid)
          }}>{m.chatname}</MenuItem>
        ))
        }
        <MenuItem ><Button className={classes.formBtn} onClick={getChats}>Get Chats</Button></MenuItem>
       
        </Menu>
    </ProSidebar>   
  )
}

export default Sidebar
