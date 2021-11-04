import React, { useState, useEffect } from 'react'
import User from './components/User'

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data)
        console.log(data)
      });
  }, [])

  return (
    <div className="container">
      <h1>A User List</h1>
      {users.map((user) => {
        return <User key={user.id} user={user} />
      })}
    </div>
  );
}

export default App;
