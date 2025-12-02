console.log("helloooo")
let currWord = getRandomWord();

function getRandomWord(){
    let movies = ['zombieland', 'john wick', 'titanic', 'matrix']
    let randomIndex = Math.floor(Math.random() * movies.length);
    let randomWord = movies[randomIndex]
    return randomWord;
}


console.log(currWord)
console.log(currWord.length)



function keyClick(event) {
    let letter = event.target.innerText;
    console.log(letter)
    checkLetter(letter.toLowerCase());
}

function checkLetter(letter) {
    console.log(currWord.indexOf(letter));
}