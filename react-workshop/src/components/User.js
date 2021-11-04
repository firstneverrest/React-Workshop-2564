import React from 'react'

const User = ({ user }) => {
    return (
        <div className="user">
            <h4>Name: {user.name}</h4>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Company: {user.company.name}</p>
        </div>
    )
}

export default User