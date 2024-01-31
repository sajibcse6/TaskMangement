import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import './task.css';

const Update = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [data, setData] = useState("");

    const post = async() => {
        const id = 1;
        const token = localStorage.getItem("token");
        const url = "http://127.0.0.1:8000/api/taskupdate/"+id;
        const item = {token};

        await axios.put(url, item)
        .then((res)=> {console.log("Task Updated Successfully")})
        .catch((err)=>console.error(err));
    }

    const getData = async() => {
        const id = 1;
        const token = localStorage.getItem("token");
        const url = "http://127.0.0.1:8000/api/task/"+id;
        const item = {token};

        await axios.put(url, item)
        .then((res)=> {setData(res.data)})
        .catch((err)=>console.error(err));
    }

    useEffect(()=> {
        getData();
    }, []);

    return (
        <div className='contact-form'>
                <div className="colums">
                    <div className="item">
                        <label>Title</label>
                        <input type="text" onChange={(event) => { setTitle(event.target.value) }} value={data.title} placeholder='Title of the task' required />
                    </div>
                    <div className='item lst-item'>
                        <label>Description</label>
                        <textarea id="message" onChange={(event) => { setDescription(event.target.value) }} value={data.description} cols="30" rows="7"></textarea>
                    </div>
                </div>
                <div className="submit">
                    <button onClick={post} className="bg-primary">Update Task</button>
                </div>
        </div>
    )
}

export default Update;