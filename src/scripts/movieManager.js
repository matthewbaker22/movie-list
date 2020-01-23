const movieFactory = (movie) => {
    return `
        <section class="movie">
        <div class="center">
            <h1>Title: ${movie.title}</h1>
            <h2>Date: ${movie.releaseDate}</h2>
        </div>
        </section>
    `
}

const renderMovies = (movies) => {
    const container = document.querySelector("#movie-container")
    movies.forEach(movie => {
        const movieHtml = movieFactory(movie)
        container.innerHTML += movieHtml
    })
}