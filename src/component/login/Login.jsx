import React, { useState } from 'react'
import './login.css'
import loginService from '../../services/login'
function Login() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState(null)

    const handleLogin = async (event) => {
        try {
            event.preventDefault()
        const user = loginService({username, password})
        console.log(user);
        setUser(user)
        setUsername('')
        setPassword('')
        } catch (error) {
            console.log(error);
        }
    }
  
    return (
    <>
        <div className="login">
        <form className="login-form" onSubmit={handleLogin}>
            <input type="text" name="username" placeholder='Usuario' value={username} onChange={({target}) => setUsername(target.value)}/>
            <input type="password" name="pasword" placeholder='Contraseña' value={password} onChange={({target}) => setPassword(target.value)}/>
            <button>Enviar</button>
        </form>
        </div>
    </>
  )
}

export default Login