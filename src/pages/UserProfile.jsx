import React from 'react'
import { Link } from 'react-router-dom'
import profileImg from '../images/earth-science.jpg'
import { FaEdit } from "react-icons/fa";

export default function UserProfile() {
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
                        <input type="file" name="avatar" id="avatar" />
                        <label htmlFor="avatar"><FaEdit /></label>
                    </form>
                </div>
            </div>
        </div>
      
    </section>
  )
}
