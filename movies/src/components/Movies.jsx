import React from 'react';
import { Movie } from './Movie';

function Movies(props) {
    const { movies = [] } = props;

    return (
        <div className='movies'>
            {movies.lenght ? (
                movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
            ) : (
                <h4>Nothong found</h4>
            )}
        </div>
    );
}

export { Movies };
