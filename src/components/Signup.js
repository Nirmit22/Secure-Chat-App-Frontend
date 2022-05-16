import React, {useState} from 'react'

const Signup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [name, setName] = useState("")
    const [age, setAge] = useState("")

    const signup = async(obj) =>{

        const user = {
          email: obj.email,
          password: obj.password,
          name: obj.name,
          age: obj.age
        }
        //var token;
        const res = await fetch(`${process.env.REACT_APP_SERVER}/auth/signup`,{
            method: 'POST',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        
        //alert("Signup Successful")
        const response = await res.json()
        console.log(response);

        alert(response.message)

        return
    }

    const onSubmit = (e)=>{
        // e.preventDefault;
        if(!email)
      {
        alert('Please enter email')
        return
      }
      if(!password)
      {
        alert('Please enter password')
        return
      }
      if(!name)
      {
        alert('Please enter name')
        return
      }
      if(!age)
      {
        alert('Please enter age')
        return
      }

      signup({email, password, name, age})
      setEmail('');
      setPassword('');
      setAge('');
      setName('');


    }
  return (
    <>
    <form onSubmit={onSubmit}>
        <div>
            Name
            <input type="text" label="name" value={name} onChange = {(e) => setName(e.target.value)}/>
        </div>
        <div>
            Age
            <input type="text" label="age" value={age} onChange = {(e) => setAge(e.target.value)}/>
        </div>
        <div>
            Email
            <input type="text" label="email" value={email} onChange = {(e) => setEmail(e.target.value)}/>
        </div>
        <div>
            Password
            <input type="password" label="password" value={password} onChange = {(e) => setPassword(e.target.value)}/>
        </div>
        <div>
            <input type="Submit" value="Sign Up" />
        </div>
    </form>
  </>
  )
}

export default Signup
