import React from "react";
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import './task.css';

const Update = () => {

    const location = useLocation();
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [data, setData] = useState("");

    const post = async() => {
        
        const id = location.state;
        const token = localStorage.getItem("token");
        const url = "http://127.0.0.1:8000/api/taskupdate/"+id;
        const item = {title, description, token};
        console.log(item);

        await axios.put(url, item)
        .then((res)=> {console.log("Task Updated Successfully"); navigate('/home')})
        .catch((err)=>console.error(err));
    }

    const getData = async() => {
        const id = location.state;
        const token = localStorage.getItem("token");
        const url = "http://127.0.0.1:8000/api/task/"+id;
        const item = {token};

        await axios.put(url, item)
        .then((res)=> {setData(res.data); setTitle(res.data.title); setDescription(res.data.description)})
        .catch((err)=>console.error(err));
    }
    const checkauth = () => {
        const auth = localStorage.getItem('token');
        if(!auth) window.location.href = '/';
    }

    useEffect(()=> {
        getData();
        checkauth();
    }, []);

    return (
        <div className='contact-form'>
                <div className="colums">
                    <div className="item">
                        <label>Title</label>
                        <input type="text" onChange={(event) => { setTitle(event.target.value) }} value={title} placeholder='Title of the task' required />
                    </div>
                    <div className='item lst-item'>
                        <label>Description</label>
                        <textarea id="message" onChange={(event) => { setDescription(event.target.value) }} value={description} cols="30" rows="7"></textarea>
                    </div>
                </div>
                <div className="submit">
                    <button onClick={post} className="bg-primary">Update Task</button>
                </div>
        </div>
    )
}

export default Update;