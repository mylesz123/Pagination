import React from 'react';
import '../styles/App.css';
import { girlNames } from '../data/girlNames';
import { dudeNames } from '../data/dudeNames';
import ListItem from './ListItem';

export default function App() {
  let listOfGirls = girlNames.map(g => {
    return(
      <ListItem />
    )
  });

  let listOfDudes = dudeNames.map(d => {
    return (
      <ListItem />
    )
  })

  return (
    <div className="page">
      <div className="page-header cf">
        <h2>Students</h2>
        {/* dynamically insert search form here (optional) */}
      </div>
      
      <ul className="student-list">
        {/* dynamically generate list of fake users with list item class (user) */}
        {listOfGirls}
        {listOfDudes}
      </ul>
      {/* dynamically add pagination links here */}
    </div>
  );
}
