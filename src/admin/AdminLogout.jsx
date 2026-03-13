import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function AdminLogout() 
{
    const navigate = useNavigate();

    useEffect(() => {
        const handleLogout = () => {

        sessionStorage.removeItem('isAdmin')
        sessionStorage.removeItem('adminUsername')

        setTimeout(() => {
            window.location.href ='/'
        }, 500)
        }
        handleLogout()
    }, [navigate]); 

  return (
    <div>
        <h2> Logging out ... </h2>
    </div>
  )
}