const getMovies = () => {
    const movieUrl = "http://localhost:3000/movies";
    fetch(movieUrl)
        .then(resp => resp.json())
        .then(moviesFromAPI => {
            renderMovies(moviesFromAPI)
        });
};