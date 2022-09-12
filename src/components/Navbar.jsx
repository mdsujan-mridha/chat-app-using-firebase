import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'

const Navbar = () => {
  const {currentUser} = useContext(AuthContext)

  return (
    <div className='navbar' style={{
      display:'flex',
      justifyContent:'space-evenly',
      alignItems:'center'
      
    }}>
      <span className="logo">Green Chat</span>
      <div className="user">
        <img style={{
          width:'35px',
          height:'35px'

        }} src={currentUser.photoURL} alt="" />
        <span>{currentUser.displayName}</span>
        <button style={{
            width:'120px',
            height:'30px',
            borderRadius:'7px',
            fontSize:'18px'


        }} onClick={()=>signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar