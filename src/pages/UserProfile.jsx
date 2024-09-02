import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../images/earth-science.jpg'
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
import { useState } from 'react'

export default function UserProfile() {
    const [avatar, setAvatar] = useState(' ')
  return (
    <section className='profile'>
        <div className="container profile_container">
            <Link to={`/myposts/sdfsdf`} className='btn'>My Posts</Link>

            <div className="profile-details">
                <div className="avatar-wrapper">
                    <div className="profile-avatar">
                        <img src={profileImg} alt=" author profile image" />
                    </div>
                    {/* form to update avatar */}
                    <form className="avater-form">
                        <input type="file" name="avatar" id="avatar" accept='png, jpg, jpeg' onChange={e => setAvatar(e.target.files[0])} />
                        <label htmlFor="avatar"><FaEdit /></label>
                    </form>
                    <button className="profile-avatar-btn"><FaCheck /></button>
                </div>
                <h1>YourFavTechSis</h1>
            </div>
        </div>
      
    </section>
  )
}
