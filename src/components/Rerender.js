import React from 'react'

const Rerender = (props) => {

    const data = props.fetchMessages()
    while(data === props.messages);

    props.setMessages(data)
  return (
    <div>
      
    </div>
  )
}

export default Rerender
