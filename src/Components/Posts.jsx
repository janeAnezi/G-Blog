import React, { useState } from 'react'
import PostItem from '../Components/PostItem'
import { Dummy_Posts } from './Data'



export default function Posts() {
    const [posts, setPosts] = useState(Dummy_Posts)
    
  return (
    <section className='posts'>
      {posts.length > 0 ? <div className='container posts-container'>
        { posts.map(({id, postImg, category, title, content, authorID}) => <PostItem key={id} postImg={postImg} category={category} title={title} content={content} authorID={authorID} postID={id} />)}
      </div> : <h1>No Posts Found</h1>}
      
    </section>
  )
}
