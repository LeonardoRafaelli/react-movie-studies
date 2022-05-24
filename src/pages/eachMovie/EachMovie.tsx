import {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import movies from '../../interfaces/Movie.interface';




function EachMovie({props}: any) {
  
  const [currentMovie, setCurrentMovie] = useState<movies>()

  const params = useParams();

  useEffect(() => {
    handleMovieFetch();
  },[params])
  
  const apiKey ="24143775d5cf2587c06b9f274dc093b5"
  
  
  
  const handleMovieFetch = () => {
    fetch(`https://api.themoviedb.org/3/movie/${params.id}?api_key=${apiKey}&language=en-US`)
    .then(response => response.json())
    .then((data: movies) => {
      setCurrentMovie(data);
      console.log(data)
    })

  }


    return(
      <div className="movie">
          {(currentMovie) &&
          <img src={`https://image.tmdb.org/t/p/w500/${currentMovie.poster_path}`} alt="" /> }
          <p>Filme {params.id}</p>
      </div>
    )

}

export default EachMovie;