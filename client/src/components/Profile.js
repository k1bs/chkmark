import React from 'react'

const Profile = ({ user }) => {
  return (
    <div className='profile-container'>
      <h3>{user.name}</h3>
      <h3>{user.username}</h3>
      <h3>{user.email}</h3>
    </div>
  )
}

export default Profile
