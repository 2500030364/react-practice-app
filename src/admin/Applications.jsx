import React, { useEffect, useState } from 'react'

export default function Applications() 
{
  const [applications, setApplications] = useState([])

  useEffect(() => {

    const storedRegistrations =
      JSON.parse(localStorage.getItem("xRegistrations")) || []

    setApplications(storedRegistrations)

  }, [])

  return (
    <div>
      <h1>Applications</h1>

      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Full Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Password</th>
          </tr>
        </thead>

        <tbody>
          {applications.map((app, index) => (
            <tr key={index}>
              <td>{app.id}</td>
              <td>{app.fullName}</td>
              <td>{app.username}</td>
              <td>{app.email}</td>
              <td>{app.password}</td>
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  )
}