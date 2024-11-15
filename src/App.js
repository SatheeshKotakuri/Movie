import React, { useState } from 'react';

import './movies.css'

export default function App() {
    
    const [movies, setMovies] = useState([]);
    const [name, setName] = useState("");

    const a = (e) => {
        e.preventDefault()
        fetch(`https://www.omdbapi.com/?apikey=18eaeb4f&s=${name}&type=movie&page=1`)
            .then(res => res.json())
            .then(json => setMovies(json.Search))
    }

    const b = (e) => {
        setName(e.target.value)
    }

    return (
        <>
        <div className='container-fluid' id="SA" >
            <div className='row'>
                <div className='col-md-12'>
    
            <center>
                        <h1 className='' id="fo">Movie Search</h1>
                        <form onSubmit={a}>
                            <input type='text' value={name} onChange={b} placeholder='search item' className='w-50 p-2 m-4 ' />
                            <input type='submit' value="search" className='btn btn-danger p-2 mb-2' />
                        </form>
                    </center> 
                    </div>
                    </div>
                    </div>
                 
          <div className='container-fluid'>
                    <div className='row'>
                        {movies && movies.map((movie) => (
                            <div key={movie.imdbID} className='col-md-4 mb-4'>
                                <div className='card' id="api">
                                    <img src={movie.Poster} className='card-img-top' alt={movie.Title} width='100%' height='350px'id="movi"/>
                                    <div className='card-body'>
                                        <h5 className='card-title'>{movie.Title}</h5>
                                        <p className='card-text'>Year: {movie.Year}</p>
                                        <a href={`https://www.imdb.com/title/${movie.imdbID}`} target='_blank' rel='noopener noreferrer' className='btn text-light' style={{ borderRadius: '15%', backgroundColor: 'red' }}>Details</a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    
                    
            </div>
        </>
    );
}
