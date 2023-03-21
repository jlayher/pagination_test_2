import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';



import Posts from './components/Posts';
import Pagination from './components/Pagination';

function App() {

  // state

  //store fetched posts (total posts)
  const [posts, setPosts] = useState([]);
  //trigger loading to true when posts are being loaded
  const [loading, setLoading] = useState(false);
  //set current page to the pagination button clicked (initialize as 1).  Use value to calculate the indexOfLastPost (used for getting current posts)
  const [currentPage, setCurrentPage] = useState(1);
  //set the number of posts to show per page.  Used to calculate the indexOfLastPost and indexOfFirstPost, which are used to generate the currentPosts array
  const [postsPerPage, setPostsPerPage] = useState(10);
 

  //on page load, fetch the posts (total posts) and while fedtching, set loading to true.
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    };

    fetchPosts();
  }, []);

//get current posts by slicing the posts (total posts array) depending on page number and number of posts per page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);


// Change page 
  const paginate = (pageNumber) => setCurrentPage(pageNumber);


  return (
    <div className="container mt-5">
      <h1 className='text-primary mb-3'>My Blog</h1>
      {/* pass currentPosts and loading state. */}
      <Posts posts={currentPosts} loading={loading} />
      <Pagination postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
    </div>
  );
}

export default App;
