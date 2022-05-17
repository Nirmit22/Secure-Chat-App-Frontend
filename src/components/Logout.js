import React from 'react'


const Logout = ({setToken, setEmail}) => {
    const click = ()=>{
        setToken(undefined)
        setEmail('')
        alert('You have been logged out')
    }
  return (
    <button onClick={click}></button>
  )
}

export default Logout
