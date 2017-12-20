import React from 'react'

const Register = ({ onRegisterClick }) => {
  let username
  let password
  // let passwordConfirmation
  let name
  let email
  // let errorMessage = ''
  return (
    <div className='auth-form'>
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
          placeholder='username'
          ref={node => {
            username = node
          }} />
        <input
          type='password'
          placeholder='password'
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
          placeholder='name'
          ref={node => {
            name = node
          }} />
        <input
          type='email'
          placeholder='email'
          ref={node => {
            email = node
          }} />
        <input type='submit' value='register' />
      </form>
      {/* <h4>{errorMessage}</h4> */}
    </div>
  )
}

// const passwordsMatch = (pass1, pass2) => pass1 === pass2

export default Register
