import React, { useState } from 'react'

import author1 from '../images/author1.jpg'
import author2 from '../images/author2.jpg'
import author3 from '../images/author3.jpg'
import author4 from '../images/author4.jpg'

const AuthorsData = [
  {id: 1, avatar: author1, name: 'YourFavTechSis', posts: 3},
  {id: 2, avatar: author2, name: 'Emmanuel Ikenns', posts: 4},
  {id: 3, avatar: author3, name: 'Pablo Davis', posts: 2},
  {id: 4, avatar: author4, name: 'Martin John', posts: 1},
  {id: 5, avatar: author1, name: 'John Doe', posts: 0},
]

export default function Authors() {
  const [authors, setAuthors] = useState(AuthorsData)

  return (
    <section className='authors'>
      <div className="container authors-container">

      </div>
    </section>
  )
}
