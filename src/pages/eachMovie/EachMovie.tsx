import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function EachMovie({props}: any) {
  
  const apiKey ="24143775d5cf2587c06b9f274dc093b5"

  
  const params = useParams();
  let currentMovie: any = {}; 

  const handleMovieFetch = async () => {
    currentMovie = await fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      return data;
    })
    console.log(currentMovie.poster_path);
  }

  useEffect(() => {
    handleMovieFetch();
  }, [])

    return(
      <div className="movie">
          <img src={`https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`} alt="" />
          <p>Filme {params.id}</p>
      </div>
    )

}

export default EachMovie;