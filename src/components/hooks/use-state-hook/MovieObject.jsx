
import { useState } from 'react';

const styles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}

const MovieObject = () => {

    const [movie, setMovie] = useState({
        title: 'Avenger',
        rating: 8
    });

    const addMovie = () => {
        setMovie({...movie, title: 'Avenger Infinity War', rating: 10})
    }

    return (
        <div style={styles}>
        <h1>Movie: {movie.title}</h1>
        <h1>Rating: {movie.rating}</h1>

        <div>
            <button style={{marginTop: '1rem'}} onClick={addMovie}>Add Movie</button>
        </div>
        </div>
    )
}

export default MovieObject;