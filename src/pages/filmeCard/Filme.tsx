import React from 'react'
import './Filme.scss'

interface Props {
    filme: any
}

    function Filme({filme} : Props) {
        // console.log(filme);
        return ( 
        <div className="movie-card">
            {filme.poster_path ?
                <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt=""/> : null
            }
            {/* <img src={"/"} alt="" /> */}
            <p>{filme.title}</p>
        </div>
     );
}

export default Filme;