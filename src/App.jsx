import React, { useState } from 'react'
import Search from './components/Search'

const App = () => {
  const [searchTerm, setSearchterm] = useState('');
  // State fields can also be passed as props
  // Never chnage states manually, only use the setter function
  return (
    <main>
      <div className='pattern'/>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without The Hassle</h1>
        </header>
        <p>Search</p>
        <Search searchTerm={searchTerm} setSearchterm={setSearchterm} />
      </div>
    </main>
  )
}

export default App