console.log("helloooo")

function getRandomWord(){
    let movies = ['ZombieLand', 'JohnWick', 'titanic', 'matrix']
    let randomIndex = Math.floor(Math.random() * movies.length);
    let randomWord = movies[randomIndex]
    return randomWord;
}

function createBlanks() {
    const words = getRandomWord();
    const len = words.length;
    return len;
}

console.log(createBlanks())
console.log(getRandomWord())



function keyClick(event) {
    let letter = event.target.innerText;
console.log(letter)
}
