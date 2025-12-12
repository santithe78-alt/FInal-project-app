console.log("helloooo")
let currWord = getRandomWord();
let loading = loadWord();
let wrongGuesses = 0;
console.log(currWord)
console.log(currWord.length)
function getRandomWord(){
    let movies = ['zombieland', 'john wick', 'titanic', 'matrix','die hard','mad max','terminator','alien','blade runner','speed','mission impossible','fast and furious','gladiator','inception']
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
        if (checkWin()) {
            addPoints();
        }
    }
    else {
        wrongGuesses++;
        showBodyPart(wrongGuesses)

        button.innerText = "X";
        console.log("wrong")
    }
}

function showBodyPart(wrongCounts){
    if (wrongGuesses === 1) {
        document.getElementById("head").style.display = "block";
    }
    else if (wrongCounts === 2) {
        document.getElementById("torse").style.display = "block";
    }
    else if (wrongCounts === 3) {
        document.getElementById("leftArm").style.display = "block";
    }
    else if (wrongCounts === 4) {
        document.getElementById("rightArm").style.display = "block";
    }
    else if (wrongCounts === 5) {
        document.getElementById("leftLeg").style.display = "block";
    }
    else if (wrongCounts === 6) {
        document.getElementById("rightLeg").style.display = "block";
        gameOver();
    }
}
function checkWin() {
    let allps = document.querySelectorAll("#word-display p");
    
    for(let i = 0; i < allps.length; i++) {
        if (allps[i].innerText === "_") {
            return false;
        }
    }
    return true;
}

function addPoints(){
    let scoreElement = document.getElementById("score");
    let currentScore = parseInt(scoreElement.innerText);
    let newScore = currentScore +10
    scoreElement.innerText = newScore
    setTimeout(startNewWord,2000);
    console.log("You win!!!")
}
function startNewWord() {
    currWord = getRandomWord();
    console.log("New word:", currWord);
    let wordDisplay = document.getElementById("word-display");
    wordDisplay.innerHTML = "";
    loadWord();
    wrongGuesses = 0;
    document.getElementById("head").style.display = "none";
    document.getElementById("torse").style.display = "none";
    document.getElementById("leftArm").style.display = "none";
    document.getElementById("rightArm").style.display = "none";
    document.getElementById("leftLeg").style.display = "none";
    document.getElementById("rightLeg").style.display = "none";
    

    let buttons = document.querySelectorAll("#keyboard button");
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = buttons[i].id;
        buttons[i].disabled = false; 
}
}
function gameOver() {
    let scoreElement = document.getElementById("score");
    let currentScore = parseFloat(scoreElement.innerText);
    let newScore = currentScore - 5;

    if(newScore <0) {
        newScore = 0;
    }
    scoreElement.innerText = newScore;
    console.log("game over")

    setTimeout(startNewWord,2000);
}