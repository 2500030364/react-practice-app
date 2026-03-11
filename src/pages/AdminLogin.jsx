import React, { useState } from 'react'

export default function AdminLogin() 
{
    const[formData, setFormData] = useState({
        username: '',
        password: '',
    })
    const [error, setError] = useState('')

    const handleChange = (e) => 
    {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value,
        })
        setError('')
    }
    const handleSubmit = (e) => {
        e.preventDefault()
            const adminCredentials = JSON.parse(sessionStorage.getItem('adminCredentials'));

            const defaultUsername = 'admin'
            const defaultPassword = 'admin'

            const validUsername = adminCredentials?.username || defaultUsername
            const validPassword = adminCredentials?.password || defaultPassword

            //Validate credentials 
            if (formData.username === validUsername && formData.password === validPassword)
            {
                sessionStorage.setItem('isAdmin', 'true')
                sessionStorage.setItem('adminUsername', formData.username)
                sessionStorage.setItem('adminName', 'Administrator')
                console.log('Admin Login successful!')

                setFormData({
                    username: '',
                    password:'',
                })

                window.location.href = '/'
            } else {
                setError('Invalid username or password')
                console.log('Invalid credentials')
            }
        }

  return (
    <div>
        <h1>  Admin Login </h1>
        {error && <div>{error}</div>}
        <form onSubmit={handleSubmit}>

            <div>
                <label>  Username  </label>
                <input  type='text' name='username'
                value={formData.username} onChange={handleChange} 
                required placeholder=' Enter your username  '
                />
            </div>

            <div>
                <label>  Password  </label>
                <input type='password' name='password'
                value={formData.password} onChange={handleChange}
                required placeholder='Enter your password'
                />
            </div>

            <button type='submit'>  Login  </button>
        </form>
    </div>
  )
}
