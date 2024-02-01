import React from 'react';
import Header from '../Header/Header';
import Registration from '../Body/Registration/Registration';
import Login from '../Body/Login/Login';
import Create from '../Body/Task/Create';
import Update from '../Body/Task/Update';
import Task from '../Body/Task/Task';
import { Route, Routes } from 'react-router-dom';


const Home = () => {
    return (
        <Routes>
             <Route path='/' element={[
                <Header/>,
                <Registration/>
            ]}/>
            <Route path='/home' element={[
                <Header/>,
                <Task/>
            ]} />
            <Route path='/login' element={[
                <Header/>,
                <Login/>
            ]}/>
            <Route path='/task' element={[
                <Header/>,
                <Create />
            ]}/>
            <Route path='/update' element={[
                <Header/>,
                <Update/>
            ]}/>
        </Routes>
    );
};

export default Home;