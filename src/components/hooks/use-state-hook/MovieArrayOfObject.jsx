import React from "react";

const styles = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
}


const MovieArrayOfObject = () => {

    const [movies, setMovie] = React.useState([
        {
            id: 1,
            title: 'Spider Man',
            rating: 8,
        },

        {
            id: 2,
            title: 'Venom',
            rating: 9,
        },

    ]);

    const addMovie = () => {
        setMovie([...movies, { id: 3, title: 'Ant Man', rating: 5}]);
    }

    const updateMovie = () => {
        setMovie(movies.map(movie => (movie.id === 3? { id: 3, title: 'Iron Man', rating: 7} : movie)))
    }

    const removeMovie = () => {
        setMovie(movies.filter(movie => (movie.id !== 3)));
    }

    return (
        <div style={styles}>
        {
            movies.map(item => (
                <div key={item.id}>
                    <h1>Movie: {item.title}</h1>
                    <h1>Rating: {item.rating}</h1>
                </div>
            ))
        }
        <div>
            <button style={{marginTop: '1rem'}} onClick={addMovie}>Add Movie</button>
            <button style={{marginTop: '1rem'}} onClick={updateMovie}>Update Movie</button>
            <button style={{marginTop: '1rem'}} onClick={removeMovie}>Remove Movie</button>
        </div>
        </div>
    )
}

export default MovieArrayOfObject;