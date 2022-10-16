import { React, useState } from 'react'
import { useLocation } from 'react-router-dom';
import FCNavBar from './FCNavBar'
import FCMovieList from './FCMovieList';

export default function FCFavoritesMovies() {
  const { state } = useLocation();
  const movies = state;
  const [favoritesMovies, setFavoritesMovies] = useState(movies)

  const deleteMovies = (movie) => {
    const newArrayFavorites = favoritesMovies.filter(m => m.imdbID !== movie.imdbID)
    setFavoritesMovies(newArrayFavorites)
  }

  return (
    <div className='favorites'>
      <FCNavBar FvoritesMovies={favoritesMovies} />
      <h1>Favorites Movies</h1>
      {favoritesMovies.length > 0 ?
        <div className='movies-list'>
          <FCMovieList movies={favoritesMovies} click={deleteMovies} text="Delete" />
        </div>
        :
        <div style={{color: "red", height: "100vh"}}>There are no favorite movies selected</div>
        
      }
    </div>
  )
}
