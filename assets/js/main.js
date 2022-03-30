
let form = document.querySelector('form');

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let newTitle = document.querySelector('#search').value;
    console.log("new search", newTitle)

})

async function getMovies() {
    let title = "harry potter"
    console.log("fonction getMovie", title);
    let url = "https://www.omdbapi.com/?s="+title+"&plot=short&apikey=2a4831ba"
    const response = await fetch(url)
    const data = await response.json()
    return data.Search
}

const data = getMovies().then(function (movies) {
console.log(movies);
    movies.forEach(movie => {

        let divMovieContent = document.querySelector(".list-movies")
        let divCardContent = document.createElement("div")
        divCardContent.className = "card-content col-3"
        const img = document.createElement("img")
        const divMovieTitle = document.createElement("div")
        divMovieTitle.className = "title"

        img.setAttribute("src", movie.Poster)
        divMovieTitle.textContent = movie.Title

        divMovieContent.appendChild(divCardContent)
        divCardContent.appendChild(img)
        divCardContent.appendChild(divMovieTitle)
    });
})



  