import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Fetch() {

  const [data, setData] = useState([])
  const [error, setError] = useState("")

  useEffect(() => {

    axios.get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        setData(response.data)
      })
      .catch((err) => {
        setError(err.message)
      })
  }, [])

  return (
    <div>
      <h2><u>API Users</u></h2>
      {
        error ? <b>{error}</b> :
        data.length === 0 ?
        <b>Data not found</b> :
        <table border={1}>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
          </tr>

          {
            data.map((user, index) => (
              <tr key={index}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))
          }

        </table>
      }
    </div>
  )
}