import React from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import AdminLogout from './AdminLogout'
import Home from './Home'
import Applications from './Applications'
import Fetch from './fetch';

export default function AdminNavBar() 
{
  return (
    <div>

        <h1>Admin Dashboard</h1>

        <Link to="/admin/home">Home</Link>
        <Link to="/admin/fetch">Fetch</Link>
        <Link to="/admin/registeredusers">Registered Users</Link>
        <Link to="/admin/logout">Logout</Link>

        <Routes>
            <Route path="home" element={<Home/>}/>
            <Route path="fetch" element={<Fetch/>}/>
            <Route path="registeredusers" element={<Applications/>}/>
            <Route path="logout" element={<AdminLogout/>}/>
        </Routes>

    </div>
  )
}