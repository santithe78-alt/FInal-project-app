console.log("helloooo")
let currWord = getRandomWord();

function getRandomWord(){
    let movies = ['ZombieLand', 'JohnWick', 'titanic', 'matrix']
    let randomIndex = Math.floor(Math.random() * movies.length);
    let randomWord = movies[randomIndex]
    return randomWord;
}


console.log(currWord)
console.log(currWord.length)



function keyClick(event) {
    let letter = event.target.innerText;
    console.log(letter)
}

function checkLetter(letter) {
    //see if the keyboard letter is the same as the word in the global var
}