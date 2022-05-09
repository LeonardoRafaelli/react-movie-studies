import React from 'react'
import './Filme.scss'

interface Props {
    filme: any
}

    function Filme({filme} : Props) {
        console.log(filme);
        return ( 
        <div className="movie-card">
            <div>
            {filme.poster_path ?
                <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt=""/> : null
            }
            </div>
            <div className="movie-description">
            <h3>{filme.title}</h3>
            <p>{filme.release_date}</p>
            </div>
        </div>
     );
}

export default Filme;