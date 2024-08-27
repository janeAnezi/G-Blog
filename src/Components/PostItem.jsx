import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

export default function PostItem({postID, title, content, authorID, postImg, category }) {
  return (
    <article className='post'>
        <div className="post-img">
            <img src={postImg} alt={title} />
        </div>
        <div className="post-content">
            <Link to={`./posts/${postID}`}>
                <h3>{title}</h3>
            </Link>
            <p>{content}</p>
            <div className="post-footer">
                <PostAuthor />
                <Link to={`/posts/categories/${category}`}>{category}</Link>
            </div>
        </div>
    </article>
  )
}
