import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Link, useLocation, redirect } from "react-router-dom";

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const item = localStorage.getItem('token');

    const logout = () => {
        localStorage.removeItem('token');
        window.location.reload(false);
    }

    useEffect(()=> {

    }, []);

    return (
        <div className="header-container">
            <nav className="navbar bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <Link to='/home' className="navbar-brand">Task Management</Link>
                    {
                        item ? <Link onClick={logout} className="navbar-brand" >Logout</Link>
                        : location.pathname==='/login' ? <Link to='/' className="navbar-brand">Registration</Link>
                        : <Link to='/login' className="navbar-brand">Login</Link>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Header;