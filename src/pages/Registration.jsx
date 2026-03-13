import React, { useState } from 'react'

const  Registration = () => 
{
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
    });

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const existingRegistrations = JSON.parse(localStorage.getItem('xRegistrations')) || [];
        const newRegistration = 
        {
            ...formData,
            id: Math.floor(Math.random()*7000000) + 1000000, 
            registeredAt: new Date().toLocaleString(),
        };

        existingRegistrations.push(newRegistration);

        localStorage.setItem('xRegistrations', JSON.stringify(existingRegistrations));

        console.log('Registration Saved: ', newRegistration);
        alert('Registrarion submitted successfully and saved!');

        setFormData({
            fullName: '',
            username: '',
            email: '',
            password: '',
        });
    };

  return (
    <div>
            <h1> Registration </h1>
            <form onSubmit={handleSubmit} >

                <div>
                    <label>  Full Name</label>
                    <input type='text'name='fullName'
                     value={formData.fullName} onChange={handleChange} 
                      required placeholder=' Enter your full name  '
                    />
                </div>

                <div>
                    <label>  Username  </label>
                    <input type='text' name='username'
                    value={formData.username} onChange={handleChange}
                    required placeholder=' Enter your username'
                    />
                </div>

                <div>
                    <label>  Password   </label>
                    <input type='password' name='password'
                    value={formData.password} onChange={handleChange}
                    required placeholder=' Enter yout password  '
                    />
                </div>

                <div>
                    <label>  Email ID  </label>
                    <input type='email' name='email'
                    value={formData.email} onChange={handleChange}
                    required placeholder=' Enter your email'
                    />
                </div>
            
            <button type='submit' className='submit-btn'>  Register  </button>
            </form>
    </div>
  )
}
export default Registration;