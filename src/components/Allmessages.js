import Chatbox from "./Chatbox"
import List from "@material-ui/core/List";

const Allmessages = ({messages}) => {
//const messages = [1,2,3,4];
//     const messages = [{
//         userid:'Nirmit',
//         message:'ello'
//     },
//     {
//         userid:'Nirmit',
//         message:'Helo'
//     },
//     {
//         userid:'Nirmit',
//         message:'Hell'
//     }
// ]
//console.log(messages.length)
  return (
    <List style={{alignItems:"center"}}>
        
      {messages.map( (m) => (
          <Chatbox name = {m.userid} message = {m.message}/>
      ))
      }
    </List>
  )
}

export default Allmessages
