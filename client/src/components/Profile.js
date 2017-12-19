import React from 'react'

const Profile = ({ user }) => {
  return (
    <div className='profile-container'>
      <div>
        <h1>{user.username}</h1>
        <br />
        <h4>{user.name}</h4>
        <br />
        <h4>{user.email}</h4>
      </div>
    </div>
  )
}

export default Profile
