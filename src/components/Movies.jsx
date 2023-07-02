import React from 'react';

import Movie from './Movie';

// компонент Movies будет рендерить карточки с фильмами для каждого элемента массива из state Main 
function Movies(props) {

    // рендерим компонент Movie для каждого объекта в props с помощью map
    return(
        <div className='movies'>
            {props.films.map(film => (
                <Movie 
                    poster={film.Poster}
                    title={film.Title}
                    type={film.Type}
                    year={film.Year}
                    id={film.imdbID}
                    key={film.imdbID}
                />
            ))}
        </div>
    )
}

export default Movies;