function fetchTopTenMovies() {
    const API_KEY = 'your_api_key_here';
    const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${b088c45aff944c7bc57b0e542e66ee92}&language=en-US&page=1`;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => displayMovies(data.results.slice(0, 12)))
        .catch(error => console.error('Error fetching movies:', error));
}

function displayMovies(movies) {
    const container = document.getElementById('movie-container');
    container.innerHTML = '';
    
    movies.forEach(movie => {
        const card = document.createElement('div');
        card.classList.add('movie-card');
        card.innerHTML = `
            <div class="card-front">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            </div>
            <div class="card-back">
                <h2>${movie.title}</h2>
                <p>${movie.overview}</p>
                <p>Rating: ${movie.vote_average}</p>
            </div>
        `;
        container.appendChild(card);
    }
    )}