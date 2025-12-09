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
let allps = document.querySelectorAll("#word-display p");
let button = document.getElementById(letter.toUpperCase());
    if (currWord.indexOf(letter) !== -1) {

        for(let i = 0; i < currWord.length; i++) {
            if (currWord[i] === letter){
                allps[i].innerText = letter;
            }
            
        }
        console.log("correct")
    }
    else {
            button.innerText = "X";
        console.log("wrong")
    }
}

