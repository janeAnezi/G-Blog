import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../images/earth-science.jpg'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from 'react'

export default function UserProfile() {
    const [avatar, setAvatar] = useState(profileImg)
    const [name, setName] = useState(' ')
    const [email, setEmail] = useState(' ')
    const [currentPassword, setCurrentPassword] = useState(' ')
    const [newPasword, setNewpassword] = useState(' ')
    const [confirmNewPassword,  setConfirmPassword] = useState(' ')

  return (
    <section className='profile'>
        <div className="container profile_container">
            <Link to={`/myposts/sdfsdf`} className='btn'>My Posts</Link>

            <div className="profile-details">
                <div className="avatar-wrapper">
                    <div className="profile-avatar">
                        <img src={avatar} alt=" author profile image" />
                    </div>
                    {/* form to update avatar */}
                    <form className="avatar-form">
                        <input type="file" name="avatar" id="avatar" accept='png, jpg, jpeg' onChange={e => setAvatar(e.target.files[0])} />
                        <label htmlFor="avatar"><FaEdit /></label>
                    </form>
                    <button className="profile-avatar-btn"><FaCheck /></button>
                </div>
                <h1>YourFavTechSis</h1>

                <form className='form profile-form'>
                    <p className="form-error-message">
                        this is an error message
                    </p>
                    <input type="text" placeholder='full name' value={name} onChange={e => setName(e.target.value)}/>
                    <input type="email" placeholder='Your email' value={name} onChange={e => setEmail(e.target.value)}/>
                    <input type="password" placeholder='current password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
                    <input type="text" placeholder='full name' value={name} onChange={e => setName(e.target.value)}/>
                </form>
            </div>
        </div>
      
    </section>
  )
}
