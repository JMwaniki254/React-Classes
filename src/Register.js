import React, { useState } from "react";
import './css/Register.css'

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signUp = e => {
        e.preventDefault();
    console.log(username);
    }
    return (
        <div className="container">
            <form onSubmit={signUp}>
                <h1>Register Here</h1>
                <div>
                    <label>Username</label>
                    <input value={username} onChange={e => setUsername(e.target.value)} type="text"></input>
                </div>
                <div>
                    <label>Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email"></input>
                </div>
                <div>
                    <label>Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type="password"></input>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password"></input>
                </div>
                <button type="submit" >Register</button>
            </form>
        </div>
    )
}

export default Register;