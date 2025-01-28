import React from 'react'

// Destructuring the props object
const Search = ({ searchTerm, setSearchterm }) => {
    // Props should never be changed! They must be treated as readonly
  return (
    <div className='search'>
        <div>
            <img src="search.svg" alt="search" />
            <input 
                type='text'
                placeholder='Search through thousands of movies'
                value={searchTerm}
                onChange={(event) => setSearchterm(event.target.value)}
            />
        </div>
    </div>
  )
}

export default Search