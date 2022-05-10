import React from 'react'
import './FilmeSearch.scss'
import Link from 'react-router-dom'


    function Filme({filme}) {
        console.log(filme);
        return ( 
        <div className="movie-card">
            <div className="movie-image">
            {filme.poster_path ?
                <img src={`https://image.tmdb.org/t/p/w500/${filme.poster_path}`} alt=""/> : null
            }
            </div>
            <div className="movie-description">
                <div>
                    <h3>{filme.title}</h3>
                </div>
                <div className="access-movie">
                    <div>
                        <p>{filme.release_date}</p>
                    </div>
                    <div>
                        <Link to="/movie">
                        <button>Acessar</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Filme;