import Chatbox from "./Chatbox"


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
    <>
        
      {messages.map( (m) => (
          <Chatbox name = {m.userid} message = {m.message}/>
      ))
      }
    </>
  )
}

export default Allmessages
