import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarHeader, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';

const Sidebar = ({setChatid , chats}) => {

    chats = [1,2,3,4]
  return (
    <ProSidebar>
        <SidebarHeader>
        All Chats
        </SidebarHeader>
        <Menu iconShape="square">
        {chats.map( (m) => (
          <MenuItem >Chat {m}</MenuItem>
        ))
        }
        <MenuItem >Chat 1</MenuItem>
        <SubMenu title="Components">
        <MenuItem>Component 1</MenuItem>
        <MenuItem>Component 2</MenuItem>
        </SubMenu>
        </Menu>
        <SidebarFooter>
            ALL CHATS
    {/**
     *  You can add a footer for the sidebar ex: copyright
     */}
        </SidebarFooter>
    </ProSidebar>   
  )
}

export default Sidebar
