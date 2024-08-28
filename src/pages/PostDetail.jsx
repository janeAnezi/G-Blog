import React from 'react'
import PostAuthor from '../Components/PostAuthor'
import { Link } from 'react-router-dom'

export default function PostDetail() {
  return (
    <>
      <section className="post-detail">
        <div className="container post-detail-container">
            <div className="post-detail-header">
              <PostAuthor  />
              <div className="post-detail-buttons">
                <Link to={`posts/:id/edit`} className="btn-sm btn-primary">Edit</Link>
                <Link to={`posts/:id/delete`} className="btn-sm btn-danger">Delete</Link>
              </div>

            </div>
        </div>
      </section>
    </>
  )
}
