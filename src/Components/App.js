import React, {useState, useEffect} from 'react';
import '../styles/App.css';
import { girlNames } from '../data/girlNames';
import { dudeNames } from '../data/dudeNames';
import Posts from './Posts';
import PaginationLinks from './PaginationLinks';

export default function App() {
  let [posts, setPosts] = useState([]);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage] = useState(10);

  const getIndexOfLastPost = currentPage * postsPerPage;
  const getIndexOfFirstPost = getIndexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(getIndexOfFirstPost, getIndexOfLastPost);

  const changePage = pageNumber => setCurrentPage(pageNumber);

  useEffect(() => {
    setPosts(girlNames.concat(dudeNames))
  }, []);

  return (
    <div className="page">
      <div className="page-header cf">
        <h2>Students</h2>
        {/* insert search form here */}
      </div>
      
      {/* generate list of fake users */}
      <Posts posts={currentPosts}/>

      {/* add pagination links here */}
      <PaginationLinks 
        posts={posts} 
        postsPerPage={postsPerPage}
        changePage={changePage}
      />

    </div>
  );
}
