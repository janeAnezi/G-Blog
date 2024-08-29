import React, { useState } from 'react'

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
    <section className='register'>
      <div className="container">
        <h2>Sign Up</h2>
      </div>
      <form className='form register-form'>
        <p className='form-err-msg'>This is the error message</p>
        <input type="text" placeholder='Full Name' name='name' value={userData.name} onChange={changeInputHandler}/>
      </form>
    </section>
  )
}
