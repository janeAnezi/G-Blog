import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Register() {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "" 
  })
  const changeInputHandler = (e) => {
    setuserData({...userData, [e.target.name]: e.target.value})
  }

  return (
    <section className='register-section'>
      <div>
      
        <div className="container">
          <h2>Sign Up</h2>
        </div>
        <form className='form register-form'>
          <p className='form-err-msg'>This is the error message</p>
          <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler}/>
          <input type="email" placeholder='Email' name='email' value={userData.email} onChange={changeInputHandler}/>
          <input type="password" placeholder='Password' name='password' value={userData.password} onChange={changeInputHandler}/>
          <input type="password" placeholder='Confirm Password' name='confirm-password' value={userData.password} onChange={changeInputHandler}/>

          <button type='submit' className='btn-primary'>Register</button>
        </form>

        <small>Already have an account? <Link to={'/login'}>SignIn</Link> </small>
        
      </div>
    </section>
  )
}
