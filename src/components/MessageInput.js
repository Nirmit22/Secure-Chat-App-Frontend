import { useState } from "react"
import { Container } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { useStyles } from './styles'

const MessageInput = ({ onAdd }) => {
  const classes = useStyles();
  const [text, setText] = useState('')
  //const [name, setName] = useState('')
  const OnSubmit = (e) => {
    e.preventDefault();
    // if(!name)
    // {
    //   alert('Please enter name')
    //   return
    // }
    if (!text) {
      alert('Empty messages cannot be sent')
      return
    }

    onAdd({ text })
    setText('')
  }

  return (
    <div>
      <form onSubmit={OnSubmit}>
        {/* Name: <br></br>
            <input type='text' value={name} label = 'Name' onChange={(e)=>setName(e.target.value)}></input> <br></br> */}
        <h1 style={{ color: "#000", alignItems: "center", fontSize: "1.2rem", fontFamily: 'Poppins' }}>
          Message :
        </h1> <br></br>
        <TextField className={classes.outfield}
          InputProps={{
            className: classes.txtfield,
          }}
          InputLabelProps={{
            className: classes.txtfield,
          }}
          type='text' value={text} label='Message' onChange={(e) => setText(e.target.value)} /><br/>
        <Button
          style={{backgroundColor:"black",color:"white"}}
          type='submit' value='Send'>
          Send
        </Button>
        <br></br> <br></br>
        {/* <button onClick={onClick} className='btn'>Send</button> */}
      </form>

    </div>
  )
}

export default MessageInput
