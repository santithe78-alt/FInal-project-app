console.log("helloooo")


function listCategories () {
movies = ['ZombieLand', 'JohnWick', 'titanic', 'matrix']
people = ['einstein', 'shakespeare', 'newton', 'darwin']
games = ['Minecraft', 'Doom', 'Apex', 'Fortnite', 'Hangman']
}
//console.log(listCategories)

function getRandomWord () {
const list = wordsByCategory[cat]
return list[Math.floor(Math.random() * list.length)]
}
