import React from 'react';

// компонент создаёт карточку для фильма
function Movie(props) {
    // декомпозируем объект props по переменным для удобства
    const {poster, title, type, year, id} = props;
    return(
        <div className='card movie' id={id}>
            <div class="card-image waves-effect waves-block waves-light">
                <img className='activator imgsize' src={poster} />
            </div>

            <div className="card-content">
                <span className="card-title">{title}</span>
                <p>{year}<span className='right'>{type}</span></p>
            </div>

        </div>
    )
}


export default Movie;