console.log("helloooo")

// The words that the user need get get and random selected towards them

function getRandomWord(){
    let movies = ['ZombieLand', 'JohnWick', 'titanic', 'matrix']
    randomIndex = Math.floor(Math.random() * movies.length);
    randomWord = movies[randomIndex]
}
//let movies = ['ZombieLand', 'JohnWick', 'titanic', 'matrix']
//let randomIndex = Math.floor(Math.random() * movies.length);
//let randomWord = movies[randomIndex]
//console.log(randomWord)