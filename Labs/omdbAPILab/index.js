const domParser = new DOMParser();

const apiKey = '6b47d5aa'; //Put api key here.

const movieSearchResultSection = document.querySelector('.movie-search-results');
const movieSearchInput = document.querySelector('#movie-search-input');

const movieSearchResultTemplate = (show, index) => 
`
        <div class="movie-result fade-in" data-nth-child=${index} onclick="findTrailer(${show.Title})">
            <h3 class="movie-name">${show.title}</h3>
            <h4>${show.genre}</h3>
            <h4>Released ${show.released}</h3>
            <h4>${show.runtime}</h3>
            <hr>
            <p class="movie-description">${show.plot}</p>
        </div>
`

const movieSearchResultTemplateMkII = (show, index) => {
    let movieResult = document.createElement('div');
    movieResult.className = "movie-result fade-in";
    movieResult.setAttribute('data-nth-child', index);

    let movieTitleNode = document.createElement('h3');
    movieTitleNode.classList.add('movie-name');
    movieTitleNode.innerHTML = show.title;

    let movieGenreNode = document.createElement('h4');
    movieGenreNode.innerHTML = show.genre;

    let movieReleasedNode = document.createElement('h4');
    movieReleasedNode.innerHTML = show.released;

    let movieRuntimeNode = document.createElement('h4');
    movieRuntimeNode.innerHTML = show.runtime;

    let hrNode = document.createElement('hr');
    let movieDescriptionNode = document.createElement('p');
    movieDescriptionNode.className = "movie-description";
    movieDescriptionNode.innerHTML = show.plot;

    movieResult.append(movieTitleNode);
    movieResult.append(movieGenreNode);
    movieResult.append(movieReleasedNode);
    movieResult.append(movieRuntimeNode);
    movieResult.append(hrNode);
    movieResult.append(movieDescriptionNode);

    return movieResult;
}

const collectMovieData = async (title) => {
    let resp = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${title}`);
    let data = await resp.json();
    return data;
}

const collectMovies = () => {
    let movieTitles = movieSearchInput.value.split(',');
    let shows = [];
    movieTitles.forEach((title, i) => {
        fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}&t=${title}`)
            .then(resp => resp.json())
            .then(data => {
                let show = {
                    title: data.Title,
                    genre: data.Genre,
                    released: data.Released,
                    runtime: data.Runtime,
                    plot: data.Plot
                }
                movieSearchResultSection.innerHTML += movieSearchResultTemplate(show, 1 + (i / 10));
            })
            .catch(err => console.log('Error when fetching: ' + title + ': ', err))
    });
    return shows;
}

const findMovie = () => {
    let movieTitles = movieSearchInput.value.split(',');
    movieSearchResultSection.innerHTML = "";

    let shows = [];
    collectMovies()
        .then(data => shows = data);
    console.log(shows);

    shows.forEach((show, i) => {
        movieSearchResultSection.innerHTML += movieSearchResultTemplate(show, 1 + (i / 10));
    });
}