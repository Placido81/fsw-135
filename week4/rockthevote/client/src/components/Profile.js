import React, {useContext} from 'react'
import {UserContext} from '../context/UserProvider'



export default function Profile(){
  const {user} = useContext(UserContext)
    return (
      <div className="profile">
        <h1>Welcome {user.username} !</h1>
        <h3 >Add A Issue</h3>
        
      </div>
    )
  }
  