import React from 'react'
import Search from './components/Search'

const App = () => {
  return (
    <main>
      <div className='pattern'/>
      <div className="wrapper">
        <header>
          <img src="./hero.png" alt="Hero Banner" />
          <h1>Find <span className='text-gradient'>Movies</span> You'll Enjoy Without The Hassle</h1>
        </header>
        <p>Search</p>
        <Search />
      </div>
    </main>
  )
}

export default App