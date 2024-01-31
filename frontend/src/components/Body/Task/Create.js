import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import './task.css';

const Create = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const post = async() => {
        const token = localStorage.getItem("token");
        let item = {title, description, status: 1, token};

        console.log(item);
        
        axios.post('http://127.0.0.1:8000/api/tasks',item)
        .then((res)=>{console.log('Task Created Successfully')})
        .catch((err)=>console.error('Error:', err));
    }

    return (
        <div className='contact-form'>
                <div className="colums">
                    <div className="item">
                        <label>Title</label>
                        <input type="text" onChange={(event) => { setTitle(event.target.value) }} placeholder='Title of the task' required />
                    </div>
                    <div className='item lst-item'>
                        <label>Description</label>
                        <textarea id="message" onChange={(event) => { setDescription(event.target.value) }} cols="30" rows="7"></textarea>
                    </div>
                </div>
                <div className="submit">
                    <button onClick={post} className="bg-primary">Create Task</button>
                </div>
        </div>
    )
}

export default Create;