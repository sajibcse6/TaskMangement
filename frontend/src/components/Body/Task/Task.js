import React from "react";
import { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import './task.css';

const Task = () => {
    const [tasklist, setTasklist] = useState([]);
    const navigate = useNavigate();

    const task = async () => {
        const token = localStorage.getItem("token");
        const url = "http://127.0.0.1:8000/api/tasklist";
        const item = { token };

        await axios.post(url, item)
            .then((res) => { setTasklist(res.data); console.log(res) })
            .catch((err) => console.error(err));
    }

    const deleteTask = async (id) => {
        const token = localStorage.getItem("token");
        const url = "http://127.0.0.1:8000/api/taskdelete/"+id;
        const item = { token };

        await axios.put(url, item)
            .then((res) => { console.log("Task Deleted Successfully"); window.location.reload(false); })
            .catch((err) => console.error(err));
    }

    const checkauth = () => {
        const auth = localStorage.getItem('token');
        if(!auth) window.location.href = '/';
    }

    useEffect(() => {
        task();
        checkauth();
    }, []);

    return (
        <div className="task-container">
            <Link to='/task' className="btn btn-primary">Add a Task</Link>
            <div className="task-row">
                <div className="title">
                    <h3>Title</h3>
                </div>
                <div className="desc">
                    <h3>Description</h3>
                </div>
                <div className="status">
                    <h3>Status</h3>
                </div>
            </div>
            {
                tasklist.map(task => (
                    <div className="task-row">
                        <div className="title">
                            <p> {task.title} </p>
                        </div>
                        <div className="desc">
                            <p> {task.description} </p>
                        </div>
                        <div className="status">
                            <div className="btnhld">
                                <Link to={'/update'} state={task.id} className="btn bg-primary">Update</Link>
                                <Link onClick={()=>deleteTask(task.id)} className="btn bg-danger">Delete</Link>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Task;