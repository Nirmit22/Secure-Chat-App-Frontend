import { useState } from "react"

const MessageInput = ({onAdd}) => {
  const [text, setText] = useState('')
  const [name, setName] = useState('')
  const OnSubmit = (e)=>{
    e.preventDefault();
    if(!name)
    {
      alert('Please enter name')
      return
    }
    if(!text)
    {
      alert('Empty messages cannot be sent')
      return
    }

    onAdd({name,text})
    setText('')
  }
    
  return (
    <div>
        <form onSubmit={OnSubmit}>
              Name: <br></br>
            <input type='text' value={name} label = 'Name' onChange={(e)=>setName(e.target.value)}></input> <br></br>
              Message: <br></br>
            <input type='text' value={text} label = 'Message' onChange={(e)=>setText(e.target.value)}></input>
            <input type='submit' value='Send'></input> <br></br> <br></br>
            {/* <button onClick={onClick} className='btn'>Send</button> */}
        </form>

    </div>
  )
}

export default MessageInput
