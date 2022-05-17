import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to='/' activeStyle >
            <h1 style={{ color: "blue", alignItems: "center", fontSize: "3rem", fontFamily: 'Poppins' }}>
              Zulu Chat
            </h1>
          </NavLink>
          <NavLink to='/login' activeStyle>
            <h5 style={{ alignItems: "center", fontSize: "1rem", fontFamily: 'Poppins' }}>
              Login
            </h5>
          </NavLink>
          <NavLink to='/profile' activeStyle>
            <h5 style={{ alignItems: "center", fontSize: "1rem", fontFamily: 'Poppins' }}>
              Profile
            </h5>
          </NavLink>
          <NavLink to='/chat' activeStyle>
            <h5 style={{ alignItems: "center", fontSize: "1rem", fontFamily: 'Poppins' }}>
              Chat
            </h5>
          </NavLink>
          <NavLink to='/createchat' activeStyle>
            <h5 style={{ alignItems: "center", fontSize: "1rem", fontFamily: 'Poppins' }}>
              Create Chat
            </h5>
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            <h5 style={{ alignItems: "center", fontSize: "1rem", fontFamily: 'Poppins' }}>
              Sign Up
            </h5>
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/login'>
            <h5 style={{ fontSize: "1rem", fontFamily: 'Poppins' }}>
              Login
            </h5>
          </NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;