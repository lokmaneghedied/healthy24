import {getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import { useNavigate } from 'react-router-dom'

export const SignIn = () => {
  
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')
  
  const auth = getAuth()

  const navigate = useNavigate();

  const handleSignIn = (e:any) =>{
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
    .then((UserCredential)=>{
      console.log(UserCredential)
      navigate('/dashboard')
    }).catch((error)=>{
      console.log(error.message)
    })
    }

  return (
    <section>
      <h1>Sign In</h1>
      <form onSubmit={handleSignIn}>
        <label>
          Email
          <input 
            name="email" 
            type="email" 
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
        <button type="submit">Sign In</button>
      </form>
    </section>  
  )
}
