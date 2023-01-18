import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const logIn = e => {
        e.preventDefault();
    console.log(username);
    navigate('/Dashboard');
    }
    return (
        <div className="container">
            <form onSubmit={logIn}>
                <h1>Log In Here</h1>
                <div>
                    <label>Username</label>
                    <input value={username} onChange={e => setUsername(e.target.value)} type={"text"}></input>
                </div>
                <div>
                    <label>Password</label>
                    <input value={password} onChange={e => setPassword(e.target.value)} type={"password"}></input>
                </div>
                <button type="submit">Log-In</button>
            </form>
        </div>
    );
}
export default Login;