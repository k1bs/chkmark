import React from 'react'

const Register = ({ onRegisterClick }) => {
  let username
  let password
  // let passwordConfirmation
  let name
  let email
  // let errorMessage = ''
  return (
    <div>
      <form onSubmit={(e) => {
        e.preventDefault()
        console.log('running password match')
        // passwordsMatch(password.value, passwordConfirmation.value)
        // ? onRegisterClick(username.value, password.value, name.value, email.value)
        // : errorMessage = "Passwords don't match."
        onRegisterClick(username.value, password.value, name.value, email.value)
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
        {/* <input
          type='password'
          placeholder='Confirm Password'
          ref={node => {
            passwordConfirmation = node
          }} /> */}
        <input
          type='text'
          placeholder='Name'
          ref={node => {
            name = node
          }} />
        <input
          type='email'
          placeholder='Email'
          ref={node => {
            email = node
          }} />
        <input type='submit' value='Register' />
      </form>
      {/* <h4>{errorMessage}</h4> */}
    </div>
  )
}

// const passwordsMatch = (pass1, pass2) => pass1 === pass2

export default Register
