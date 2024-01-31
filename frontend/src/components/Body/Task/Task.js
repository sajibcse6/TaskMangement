import React from "react";
import { useState, useEffect } from 'react';
import axios from "axios";
import './task.css';

const Task = () => {
    const [tasklist, setTasklist] = useState([]);

    const task = async () => {
        const token = localStorage.getItem("token");
        const url = "http://127.0.0.1:8000/api/tasklist";
        const item = { token };

        await axios.post(url, item)
            .then((res) => { setTasklist(res.data); console.log(res) })
            .catch((err) => console.error(err));
    }

    useEffect(() => {
        task();
    }, []);

    return (
        <div className="task-container">
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
                                <div className="btn bg-primary">Update</div>
                                <div className="btn bg-danger">Delete</div>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Task;