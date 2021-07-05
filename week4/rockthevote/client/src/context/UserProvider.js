import React, { useState } from 'react';
import axios from 'axios';

export const UserContext = React.createContext()


export default function UserProvider(props){
  const initState = { 
    user: JSON.parse(localStorage.getItem("user")) || {}, 
    token: JSON.parse(localStorage.getItem("token")) || "", 
    issues: JSON.parse(localStorage.getItem("issues")) || [],
  }

  const [userState, setUserState] = useState(initState)




  function signup(credentials){
    axios.post("/auth/signup", credentials)
      .then(res => {
        const { user, token } = res.data
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function login(credentials){
    axios.post("/auth/login", credentials)
      .then(res => {
        const { user, token } = res.data
        
        setUserState(prevUserState => ({
          ...prevUserState,
          user,
          token
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  function logout(){
    localStorage.removeItem("token")
    localStorage.removeItem("user")
    localStorage.removeItem("issues")
    setUserState({
      user: {},
      token: "",
      issues: []
      
    });
  }

  


  function addIssue(newIssue){
    axios.post("/api/issue", newIssue)
      .then(res => {
        setUserState(prevState => ({
          ...prevState,
          issues: [...prevState.issues, res.data]
        }))
      })
      .catch(err => console.log(err.response.data.errMsg))
  }

  return (
    <UserContext.Provider
      value={{
        ...userState,
        signup,
        login,
        logout,
        addIssue,
         }}>
      { props.children }
    </UserContext.Provider>
  );
}
