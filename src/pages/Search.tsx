import { useState } from "react";
import Filme from "./filmeCard/Filme";
import './Search.scss'

function Search() {

    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);	// movies is an array of objects

    const apiKey ="24143775d5cf2587c06b9f274dc093b5"
    

    const searchMovie = () => {
        if(search !== ""){
            fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-br&page=1&query=${search}`)
            .then(response => response.json())
            .then(data => {
                setMovies(data.results);
            })
        } else {
            setMovies([]);
        }
    }

    

    return (
        <div className="search-container">
            <div className="search-fields">
                <input
                    type="text"
                    onChange={(e) => {setSearch(e.target.value)}} 
                    value={search}
                    placeholder="Search for a movie here"
                    onKeyUpCapture={searchMovie}	
                    />
            </div>
            <div className="movie-section-container">
                <div className="all-movies-container">
                    <div className="each-movie-container">
                        {
                            movies.map(filme => {
                                return <Filme filme={filme} />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;