import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import './registration.css';

const Registration = () => {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async() => {
        let item = {username, email, password};
        console.log(item);
        axios.post('http://127.0.0.1:8000/api/register',item)
        .then((res)=>{localStorage.setItem("token", res.data.token);})
        .catch((err)=>console.error('Error:', err));
    }

    return (
        <div className="register">
            <div id="signupCard">
                <div id="form_inp">
                    <h2>Register</h2>
                    <div id='signin'>
                        <input type="text" onChange={(event) => { setUsername(event.target.value) }} id="username" placeholder="Enter username" />
                        <input type="text" onChange={(event) => { setEmail(event.target.value) }} id="email" placeholder="Enter email" />
                        <input type="password" onChange={(event) => { setPassword(event.target.value) }} id="pw" placeholder="Set Password" /> <br />
                        <button onClick={register} className="bg-primary">Register</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Registration;