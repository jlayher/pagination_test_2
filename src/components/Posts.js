import React from 'react'

const Posts = ({ posts, loading }) => {

    //while async fetch is occuring, show this h2 for Loading.  Toggled by parent
    if (loading) {
        return <h2>Loading...</h2>
    }
    
  return (
      <ul className='list-group mb-4'>
          {/* map over the currentPosts array (labeled as "posts" here).  Generate an li for every post, assign a key= post.id, and use the post.title as text */}
        {posts.map((post) => (
            <li key={posts.id} className='list-group-item'> 
                {post.title}
            </li>
        ))}
    </ul>
  )
}

export default Posts
