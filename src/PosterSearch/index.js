import React, { useState } from 'react'

export default function PosterSearch () {
  const [disableSearch, setDisableSearch] = useState(true)
  const [movieName, setMovieName] = useState('')

  function handleInput ({ target: { value }}){
    setDisableSearch(value.length < 3)
    setMovieName(value)
  }

  return (
    <>
      <section className='PosterSearch'>
        <header className='header'>
          <h1>Posterz</h1>
          <h3>Find your favourite movie posters.</h3>
        </header>
        <main>
          <p>
            <label className='label' htmlFor='movie-name'>
              Movie title:
            </label>{' '}
            <input
              className='searchBox'
              type='search'
              id='movie-name'
              name='movie-name'
              value={movieName}
              onChange={handleInput}
              placeholder='enter the name of a movie'
            />
            <button
              id='search-button'
              className='searchButton'
              disabled={disableSearch}
            >
              Search
            </button>
            <br />
          </p>
          <p id='msg' />
        </main>
        <section id='poster-grid' className='PosterGrid' />
      </section>
    </>
  )
}
