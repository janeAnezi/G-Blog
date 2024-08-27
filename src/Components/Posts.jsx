import React, { useState } from 'react'
import PostItem from '../Components/PostItem'
import postImg1 from '../images/about-img.png'
import postImg2 from '../images/about-img.png'
import postImg3 from '../images/about-img.png'
import postImg4 from '../images/about-img.png'


const Dummy_Posts = [
    {   id: '1', 
        postImg: postImg1,
        category: 'education',
        title: 'Post 1',
        content: 'This is the The background-color property sets the background color of an element. The background of an element is the total size of the element, including padding and border (but not the margin). Tip: Use a background color and a text color that makes the text easy to read.',
        authorID: 3
    },
    {   id: '2', 
        postImg: postImg2,
        category: 'science',
        title: 'Post 2',
        content: 'This is the The background-color property sets the background color of an element. The background of an element is the total size of the element, including padding and border (but not the margin). Tip: Use a background color and a text color that makes the text easy to read.',
        authorID: 4
    },
    {   id: '3', 
        postImg: postImg1,
        category: 'education',
        title: 'Post 3',
        content: 'This is the The background-color property sets the background color of an element. The background of an element is the total size of the element, including padding and border (but not the margin). Tip: Use a background color and a text color that makes the text easy to read.',
        authorID: 2
    },
    {   id: '4', 
        postImg: postImg1,
        category: 'technology',
        title: 'Post 4',
        content: 'This is the The background-color property sets the background color of an element. The background of an element is the total size of the element, including padding and border (but not the margin). Tip: Use a background color and a text color that makes the text easy to read.',
        authorID: 1
    },
]

export default function Posts() {
    const [posts, setPosts] = useState(Dummy_Posts)
  return (
    <section>
      { posts.map(({id, postImg, category, title, content, authorID}) => <PostItem key={id} postImg={postImg} category={category} title={title} content={content} authorID={authorID} postID={id} />)}
    </section>
  )
}
