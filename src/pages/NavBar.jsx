import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import HomePage from './HomePage'
import Registration from './Registration'
import AdminLogin from './AdminLogin'
import AdminNavBar from '../admin/AdminNavBar'

export default function NavBar() {
  return (
    <div>

        <Link to="/">Home</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/login">Admin Login</Link>

        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/registration' element={<Registration/>}/>
            <Route path='/login' element={<AdminLogin/>}/>
            <Route path='/admin/*' element={<AdminNavBar/>}/>
        </Routes>

    </div>
  )
}