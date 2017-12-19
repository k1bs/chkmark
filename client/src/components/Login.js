import React from 'react'

const Login = ({ onLoginClick }) => {
  let username
  let password
  return (
    <div className='auth-form'>
      <form onSubmit={(e) => {
        e.preventDefault()
        onLoginClick(username.value, password.value)
      }}>
        <input
          type='text'
          placeholder='Username'
          ref={node => {
            username = node
          }} />
        <input
          type='password'
          placeholder='Password'
          ref={node => {
            password = node
          }} />
        <input type='submit' value='Login' />
      </form>
    </div>
  )
}

export default Login
