import { React, useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import FCMovieList from './FCMovieList';
import FCNavBar from './FCNavBar';

export default function FCHomePage() {
  const { state } = useLocation();
  const favorites = state;
  const [allMovies, setAllMovies] = useState([]);
  const [favoritesMovies, setFavoritesMovies] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const url = "http://www.omdbapi.com/?s=star wars&apikey=8cef8a92"
      const response = await fetch(url);
      const data = await response.json();
      setAllMovies(data.Search);
      if (favorites != undefined) {
        setFavoritesMovies(favorites)
      }
    }
    fetchData();
  }, [])

  const addMovieToFavorites = (movie) => {
    let newFavoritesMoviesArray = [...favoritesMovies, movie];
    setFavoritesMovies(newFavoritesMoviesArray)
    let allMoviesNew = allMovies.filter(m => m.imdbID !== movie.imdbID)
    setAllMovies(allMoviesNew);
  }
  return (
    <div className='home'>
      <FCNavBar FvoritesMovies={favoritesMovies} />
      <h1>All Movies</h1>
      {allMovies.length > 0 ?
        <div className='movies-list'>
          <FCMovieList movies={allMovies} click={addMovieToFavorites} text= "Add to Favorites!" />
        </div>
        :
        <div style={{color: "red", height: "100vh"}}>There are no more movies to add to favorites</div>
      }
    </div>

  )
}
