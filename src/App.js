import './App.css';
import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import {Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Home from './page/User/Home';
 import LoginPage from './page/User/LoginPage';
 import RegisterPage from './page/User/RegisterPage';
 import Dashboard from './page/Dev/Dashboard';
 import AddDetails from './page/Dev/AddDetails';
import Addquery from './page/Dev/Addquery';
import AdminPage from './page/Admin/AdminPage';
import UpdateDetails from './page/Dev/UpdateDetails';
import AddResponse from './page/Dev/AddResponse';
import ViewDeveloper from './page/Admin/ViewDeveloper';
import DeleteQuery from './page/Admin/DeleteQuery';
import DeleteResponse from './page/Admin/DeleteResponse';
import ViewResponses from './page/Dev/ViewResponses';

function App() {
  return <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/login' element={<LoginPage/>}/>
    <Route path='/register' element={<RegisterPage/>}/>
    <Route path='/dashboard' element={<Dashboard/>}/>
    <Route path='/adddetails' element={<AddDetails/>}/>
    <Route path='/updatedetails' element={<UpdateDetails/>}/>
    <Route path='/addquery' element={<Addquery/>}/>
    <Route path='/adminpage' element={<AdminPage/>}/>
    <Route path='/deletequery' element={<DeleteQuery/>}/>
    <Route path='/deleteresponse' element={<DeleteResponse/>}/>
    <Route path='/AddResponse' element={<AddResponse/>}/>
    <Route path='/ViewDeveloper' element={<ViewDeveloper/>}/>
    <Route path='/ViewResponses' element={<ViewResponses/>}/>
    </Routes>
    </BrowserRouter>

}

export default App;
