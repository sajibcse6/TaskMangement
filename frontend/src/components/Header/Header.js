import React from "react";

const Header = () => {
    return (
        <div className="header-container">
            <nav className="navbar bg-primary" data-bs-theme="dark">
                <div className="container-fluid">
                    <h1 className="navbar-brand">Task Management</h1>
                    <a className="navbar-brand" href="#">Login</a>
                </div>
            </nav>
        </div>
    )
}

export default Header;