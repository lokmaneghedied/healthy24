import {getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

interface Doctor {
  id  : string,
  fullName:string,
  title : string,
  location: string,
  profileDescription: string,
  profileImage : string,
  profileCover: string
}

export const SignUp = () => {
  const [fullName, setFullName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  const [err , setErr] = useState('')
  
  const auth = getAuth()
  
  const navigate = useNavigate();

  const handleSignUp = (e:any) =>{
    e.preventDefault()
    createUserWithEmailAndPassword(auth, email, password)
    .then((UserCredential)=>{
      const newDoctor:Doctor = {
        id : UserCredential.user.uid,
        fullName : fullName,
        location : "Algiers Algeria",
        title : "",
        profileDescription : "",
        profileImage : "",
        profileCover : ""
      }
      fetch('http://localhost:5000/doctors',{
        method : 'POST',
        headers : {'Content-type':'application/json'} ,
        body: JSON.stringify(newDoctor)
      }).then((res)=>{
        if(res.ok){
            setErr('')
            navigate('/dashboard')
        }else{
          setErr('something went wrong, please try again')
        }
      })
    }).catch((error)=>{
      setErr(error['message'])
    })
    console.log(err)
    }

  return (
    <section>
      <h1>Sign up</h1>
      <form onSubmit={handleSignUp}>
      <label>
          Full Name
          <input 
            name="fullName" 
            type="text" 
            value={fullName}
            onChange={(e)=>setFullName(e.target.value)}
            placeholder="Full Name" />
        </label>
        <label>
          Email
          <input 
            name="email" 
            type="text" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Email" />
        </label>
        <label>
          Password
          <input 
            name="password" 
            type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            placeholder="Password" />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </section>  
  )
}
