import React from 'react'

interface Props {
    filme: any
}

    function Filme({filme} : Props) {
        return ( 
        <div>
            <ul key={filme.id}>
                {filme.title}
            </ul>
        </div>
     );
}

export default Filme;