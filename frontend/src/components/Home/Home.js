import React from 'react';
import Header from '../Header/Header';
import Registration from '../Body/Registration/Registration';
import Login from '../Body/Login/Login';
import Create from '../Body/Task/Create';
import Update from '../Body/Task/Update';
import Task from '../Body/Task/Task';

const Home = () => {
    return (
        <div>
            <Header/>
            {/* <Login/> */}
            {/* <Create/> */}
            {/* <Update/> */}
            <Task/>
        </div>
    );
};

export default Home;