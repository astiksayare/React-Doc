import React from "react"

export const ObjectDestructuring = () => {

    const [movie, setMovie] = React.useState({
        name: 'Avengers',
        rating: 9
    });

    const updateMovieRating = () => setMovie({...movie, rating: 10});

    return (
        <section>
            <h1>Movie Name: {movie.name}</h1>
            <h1>Movie Rating: {movie.rating}</h1>
            <button className="btn mt-1" onClick={updateMovieRating}>Change Rating</button>
        </section>
    )
}