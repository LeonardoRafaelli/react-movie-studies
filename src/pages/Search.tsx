import { useState } from "react";

function Search() {

    const [search, setSearch] = useState("");

    const apiKey ="24143775d5cf2587c06b9f274dc093b5"
    

    const searchMovie = () => {
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=pt-br&page=1&include_adult=false&query=${search}`)
        .then(result => {console.log(result)})
    }

    return (
    <>
        <input
            type="text"
            onChange={(e) => {setSearch(e.target.value)}}
            value={search}
            onKeyDown={searchMovie}
        />
        
    </>
    );
}

export default Search;