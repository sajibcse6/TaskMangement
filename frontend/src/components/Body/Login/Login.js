import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import './login.css';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const register = async() => {
        let item = {username, password};
        console.log(item);
        axios.post('http://127.0.0.1:8000/api/login',item)
        .then((res)=>{console.log('Successfully logged in'); localStorage.setItem("token", res.data.token);})
        .catch((err)=>console.error('Error:', err));
    }

    return (
        <div className="register">
            <div id="signupCard">
                <div id="form_inp">
                    <h2>Login</h2>
                    <div id='signin'>
                        <input type="text" onChange={(event) => { setUsername(event.target.value) }} id="username" placeholder="Enter username" />
                        <input type="password" onChange={(event) => { setPassword(event.target.value) }} id="pw" placeholder="Set Password" /> <br />
                        <button onClick={register} className="bg-primary">Login</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;