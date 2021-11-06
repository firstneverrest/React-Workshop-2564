import React from 'react'

const User = (props) => {
    return (
        <div className="user">
            <h4>Name: {props.user.name}</h4>
            <p>Username: {props.user.username}</p>
            <p>Email: {props.user.email}</p>
            <p>Company: {props.user.company.name}</p>
        </div>
    )
}

export default User

// props
// component