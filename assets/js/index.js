

var cinema = {
    address: "Cavea Cinemas",
    languages: ["English", "Georgian", "Russian"],
    finance: [
        {budget: 500000, boxoffice: 5000000},
        {budget: 200000, boxoffice: 2000000},
        {budget: 300000, boxoffice: 3000000}
    ],
    movies: [
        {name: "Top Gun", IMDB: 8.7},
        {name: "Uncharted", IMDB: 6.4},
        {name: "Dr.Strange", IMDB: 7.3}
    ]
}

for (var i = 0; i<cinema.movies.length - 2; i++) {
    document.getElementById("first").innerHTML=cinema.movies[i].name + " - IMDB: " + cinema.movies[i].IMDB;
}
for (var i = 0; i<cinema.movies.length - 1; i++) {
    document.getElementById("second").innerHTML=cinema.movies[i].name + " - IMDB: " + cinema.movies[i].IMDB;
}
for (var i = 0; i<cinema.movies.length; i++) {
    document.getElementById("third").innerHTML=cinema.movies[i].name + " - IMDB: " + cinema.movies[i].IMDB;
}
