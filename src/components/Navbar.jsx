// import React from 'react'
// import logo from '../../src/assets/logo.png'
// import search from '../../src/assets/search_icon.svg'
// import bell from '../../src/assets/bell_icon.svg'
// import profile from '../../src/assets/profile_img.png'
// import caret from '../../src/assets/caret_icon.svg'
// import './Navbar.css'
// const Navbar = () => {
//   return (
//     <div>
//       <div className='navbar'>
//         <div className="navbar-left">
//             <img src={logo} alt="" />
//             <ul>
//                 <li>Home</li>
//                 <li>Tv shows</li>
//                 <li>Movies</li>
//                 <li>New and popular</li>
//                 <li>Browser by language</li>
                
//             </ul>
//         </div>
//         <div className="navbar-right">
//             <img src={search} alt="" className='icons'/>
//             <p>Children</p>
//             <img src={bell} className='icons'/>
//             <div className="navbar-profile">
//             <img src={profile} className='profile'/>
//             <img src={caret} className='caret'/>
//             <div className="dropdown">
//                 <p>Signout</p>
//             </div>
//             </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Navbar


import React, { useState, useEffect } from 'react';
import logo from '../../src/assets/logo.png';
import search from '../../src/assets/search_icon.svg';
import bell from '../../src/assets/bell_icon.svg';
import profile from '../../src/assets/profile_img.png';
import caret from '../../src/assets/caret_icon.svg';
import './Navbar.css';

const Navbar = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [query, setQuery] = useState('');  // Initialize query state
  const [searchTerm, setSearchTerm] = useState('');  // Initialize searchTerm state
  const apiKey = 'a1ecd6f68859fca8868d03b1624ba92d';  // Replace with your actual TMDB API key

  useEffect(() => {
    const fetchMovies = async () => {
      if (query!== '') {  // Only fetch if there's a query
        try {
          const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`);
          const data = await response.json();
          if (data.results) {
            setMovies(data.results);
          } else {
            setError(data.status_message);
          }
        } catch (error) {
          setError('Failed to fetch movies');
        }
      }
    };

    fetchMovies();
  }, [query, apiKey]);

  const handleSearch = (e) => {
    e.preventDefault();
    setQuery(searchTerm);  // Update query with the search term when form is submitted
  };

  return (
    <div>
      <div className='navbar'>
        <div className="navbar-left">
          <img src={logo} alt="" />
          <ul>
            <li>Home</li>
            <li>Tv shows</li>
            <li>Movies</li>
            <li>New and popular</li>
            <li>Browser by language</li>
          </ul>
        </div>
        <div className="navbar-right">
          <form onSubmit={handleSearch} className="mb-4">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search for a movie..."
              className="border p-2 rounded mr-2"
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded">Search</button>
          </form>
          <img src={search} alt="" className='icons'/>
          <p>Children</p>
          <img src={bell} className='icons'/>
          <div className="navbar-profile">
            <img src={profile} className='profile'/>
            <img src={caret} className='caret'/>
            <div className="dropdown">
              <p>Signout</p>
            </div>
          </div>
        </div>
      </div>
      {movies.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {error && <p className="col-span-full text-red-500">{error}</p>}
          {movies.map((movie) => (
            <div key={movie.id} className="border rounded p-4">
              <h2 className="text-xl font-bold">{movie.title}</h2>
              <p className="text-gray-700">Year: {movie.release_date}</p>
              <p className="text-gray-700">Type: {movie.media_type}</p>
              <p className="text-gray-700">IMDb ID: {movie.id}</p>
              {movie.poster_path && (
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} className="w-full h-auto" />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;