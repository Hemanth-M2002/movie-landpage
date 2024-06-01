import React, { useEffect, useRef, useState } from 'react';
import './TitleCards.css';

const TitleCards = ({ title, category }) => {
    const cardsRef = useRef();
    const [apiData, setApiData] = useState([]);

    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzMmE4MGY2MWU0NmYxYzU0YTYwYTM5ODM4NTk4OWJjMiIsInN1YiI6IjY2NWExNDNhZGM4ZWZlZTQ2NzFkNThiZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dwJzEHJaJqEsKdqY_2OJHevY-VyvSEGYoBt0Q3NaSfM'
        }
    };

    const scrollLeft = () => {
        cardsRef.current.scrollBy({
            top: 0,
            left: -300,
            behavior: 'smooth'
        });
    };

    const scrollRight = () => {
        cardsRef.current.scrollBy({
            top: 0,
            left: 300,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${category ? category : "now_playing"}?language=en-US&page=1`, options)
            .then(response => response.json())
            .then(response => {
                if (response.results) {
                    setApiData(response.results);
                } else {
                    console.error('Unexpected API response structure:', response);
                }
            })
            .catch(err => console.error('API fetch error:', err));
    }, [category]);

    return (
        <div className='titlecards'>
            <h2>{title ? title : "Popular on Netflix"}</h2>
            <div className="card-container">
                <button className="scroll-button left" onClick={scrollLeft}>{"<"}</button>
                <div className="card-list" ref={cardsRef}>
                    {apiData.map((card, index) => (
                        <div className="card" key={index}>
                            <img src={`https://image.tmdb.org/t/p/w500${card.backdrop_path}`} className="card-img" alt={card.original_title} />
                            <div className="card-overlay">
                                <p>{card.original_title}</p>
                                <div className="card-buttons">
                                    <button className="play-button">Play</button>
                                    <button className="add-button">Add to List</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button className="scroll-button right" onClick={scrollRight}>{">"}</button>
            </div>
        </div>
    );
};

export default TitleCards;
