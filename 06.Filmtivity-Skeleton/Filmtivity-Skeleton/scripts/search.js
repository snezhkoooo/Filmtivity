document.addEventListener('DOMContentLoaded', () => {
    const searchBtn = document.getElementById('search-btn');
    searchBtn.addEventListener('click', () => {
        const title = document.getElementById('search').value.trim();
        if (title) {
            fetchMovie(title);
        } else {
            alert('Please enter a movie title.');
        }
    });
});

function fetchMovie(title) {
    const API_KEY = 'b088c45aff944c7bc57b0e542e66ee92';
    const API_URL = `https://api.themoviedb.org/3/search/movie?api_key=${b088c45aff944c7bc57b0e542e66ee92}&query=${title}`;

    fetch(API_URL)
        .then(response => response.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                displayMovieDetails(data.results[0]);
            } else {
                alert('No movie found.');
            }
        })
        .catch(error => console.error('Error fetching movie:', error));
}

function displayMovieDetails(movie) {
    const detailsPage = document.getElementById('details-page');
    detailsPage.innerHTML = `
        <h2>${movie.title}</h2>
        <p>Release Date: ${movie.release_date}</p>
        <p>Overview: ${movie.overview}</p>
        <p>Rating: ${movie.vote_average}</p>
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
    `;
}