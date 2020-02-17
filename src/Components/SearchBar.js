import React from 'react'

export default function SearchBar({filterSearch}) {
    return (
        <div className="student-search">
            <input onInput={(e) => filterSearch(e.target.value)} type="text" placeholder="Find a user"></input>
            <button>Search</button>
        </div>
    )
}