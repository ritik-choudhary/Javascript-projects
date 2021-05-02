window.addEventListener('load',init)
// global variables

// available levels
const levels = {
    easy: 8,
    medium: 5,
    hard: 3
}
const currentLevel = levels.easy

let time = currentLevel
let score = 0
let isPlaying

const wordInput = document.querySelector('.word-input')
const timeDisplay = document.querySelector('.time-left')
const currentWord = document.querySelector('.word')
const scoreDisplay = document.querySelector('.score')
const message = document.querySelector('.status')
const seconds = document.querySelector('#seconds')

const words = ['elephant','robotics','gigantic','enormous','fish','rattle','sunday','monster','summary','instructions','publisher','actor','none','rendezvous','hipster','ceramic','omnipresent','beast','suction','alpha','binoculars','vacuum','sydney','zebra','queen','sagittarius','abyss','chivalry','injection','horrendous','evil','master','psychopath']

function init(){
    // show number of seconds
    seconds.innerHTML = currentLevel
    // load word from array
    showWord(words)
    // start matching on word input
    wordInput.addEventListener('input',startMatch)
    // call countdown every second
    setInterval(countdown,1000)
    // check game status
    setInterval(checkStatus,50)
}

function showWord(words){
    currentWord.innerHTML = words[Math.floor(Math.random() * words.length)]
}
function countdown(){
    if(time>0){
        time--
    }
    else if(time===0){
        isPlaying = false
    }
    timeDisplay.innerHTML = time
}
function checkStatus(){
    if(!isPlaying && time === 0){
        message.innerHTML = 'Game Over'
        score = -1
    }
}
function startMatch(){
    if(matchWords()){
        isPlaying = true
        time = currentLevel+1
        showWord(words)
        wordInput.value = ''
        score++
    }
    if(score === -1){
        scoreDisplay.innerHTML = 0
    }
    else{
        scoreDisplay.innerHTML = score
    }
    
}
function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
        message.innerHTML = 'CORRECT!!!'
        return true
    }
    else{
        message.innerHTML = ''
        return false
    }
}