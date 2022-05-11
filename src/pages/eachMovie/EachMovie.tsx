import * as React from 'react';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';


function EachMovie({props}: any) {
  const [currentMovie, setCurrentMovie] = useState();
  
  const params = useParams();
  console.log(params.id);

  const apiKey ="24143775d5cf2587c06b9f274dc093b5"

  const handleMovieFetch = () => {
    fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=en-US`)
    .then(response => response.json())
    .then(data => {
      setCurrentMovie(data);
      console.log(currentMovie);
    })
  }

  useEffect(() => {
    handleMovieFetch();
  })

    return(
      <div className="movie">
      
          <p>Filme {params.id}</p>
      </div>
    )

}

export default EachMovie;