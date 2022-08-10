import React, { useEffect, useState } from 'react'
import './profile.css'
const Profile = () => {
  const [user, setUser] = useState('')
  useEffect(() => {
    const localStorage = window.localStorage.getItem('username')
    console.log(localStorage);
    setUser(localStorage)
  }, [])  
  return (
      <div style={{display: 'flex', alignItems: 'center', height: '100vh', width: '100%', justifyContent: 'center'}}>
        <div className={'profile'}>
            <p>Bienvenido {user}</p>
        </div>
      </div>
  )
}

export default Profile