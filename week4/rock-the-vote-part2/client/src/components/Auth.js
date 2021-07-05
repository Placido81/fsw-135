import React, { useState, useContext } from 'react'
import AuthForm from './AuthForm'
import { UserContext } from '../context/UserProvider'

const initInputs = { username: "",  password: "" }

export default function Auth(){
  const [inputs, setInputs] = useState(initInputs)
  const [toggle, setToggle] = useState(true)

  const { signup, login, errMsg} = useContext(UserContext)

  function handleChange(e){
    const {name, value} = e.target
    setInputs(prevInputs => ({
      ...prevInputs,
      [name]: value
    }))
  }

  function handleSignup(e){
    e.preventDefault()
    signup(inputs)
  }

  function handleLogin(e){
    e.preventDefault()
    login(inputs)
  }

  

  return (
    <div className="auth-container">
      <h1>Rock The Vote</h1>
      { !toggle ?
        <>
          <AuthForm 
            handleChange={handleChange}
            handleSubmit={handleSignup}
            inputs={inputs}
            btnText="Sign up"
            errMsg={errMsg}
            
          />
          <button onClick={() => setToggle(prev => !prev)}>Already a member?</button>
        </>
      :
      
        <>
        <AuthForm 
        handleChange={handleChange}
        handleSubmit={handleLogin}
        inputs={inputs}
        btnText="Login"
        errMsg={errMsg}
        
        
      />
          <button onClick={() => setToggle(prev => !prev)}>Not a member?</button>   
      </>
    
      }
     
    </div>
  )
}
