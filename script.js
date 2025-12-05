console.log("helloooo")
let currWord = getRandomWord();
let loading = loadWord();
console.log(currWord)
console.log(currWord.length)
function getRandomWord(){
    let movies = ['zombieland', 'john wick', 'titanic', 'matrix']
    let randomIndex = Math.floor(Math.random() * movies.length);
    let randomWord = movies[randomIndex]
    return randomWord;
}

function loadWord() {
    let wordDisplay = document.getElementById("word-display")
    let displayString = "";
    for (let i = 0; i < currWord.length; i++) {
        let p = document.createElement("p");
        wordDisplay.appendChild(p)
        p.innerText = "_"
    }
}

function keyClick(event) {
    let letter = event.target.innerText;
    console.log(letter)
    checkLetter(letter.toLowerCase());
}

function checkLetter(letter) {
    //console.log(currWord.indexOf(letter));
    if (currWord.indexOf(letter) !== -1) {
        console.log("correct")
    }
    else {
        console.log("wrong")
    }
}

