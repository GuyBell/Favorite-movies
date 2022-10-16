import React from 'react'

export default function FCMovieList({ movies, click, text }) {
  return (
    <div className='movie d-flex justify-conten-center'>
      {movies.map((m, index) =>
        <div className='div-img' key={index}>
          <img src={m.Poster} alt="movie"></img>
          <div className='likeMovie' onClick={()=>click(m)}>{text}</div>
        </div>
      )}
    </div>
  )
}
