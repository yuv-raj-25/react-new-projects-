let  randomNumber = parseInt(Math.random() * 100 + 1) 

const submit = document.querySelector("#subt")
const userInput = document.querySelector("#guessField")
const guessSlot = document.querySelector(".guesses")

const remaining  = document.querySelector(".lastResult")

const lowOrHi = document.querySelector(".lowOrHi")

const startOver = document.querySelector(".resultParas")

const para = document.createElement("p")

let prevGuess = []

let numGuess = 1

let playGame = true

if(playGame){
  submit.addEventListener("click" , function(e){
      e.preventDefault()
     const guess =  parseInt(userInput.value)
    //  console.log(guess)
     validateGuess(guess);
  })
}

function validateGuess(guess){
  if(isNaN(guess)){
    alert("please enter a valid number ")

  }

  else if(guess < 1){
    alert("please enter a number greater than 0")
  }
  else if(guess > 100 ){
    alert("please enter a number smaler than 100")

  }
  else{
    prevGuess.push(guess)
    if(numGuess === 11){
      cleanUpGuess(guess)
      displayMessage(`the game is over and the random number was ${randomNumber}`)
      endGame()
    }
    else{
      cleanUpGuess(guess)
      checkGuess(guess)
    }
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    displayMessage(`your guess is right `)
    endGame();

  }
  else if(guess < randomNumber){
    displayMessage(`your guess is too low `)

  }
  else if(guess > randomNumber){
    displayMessage(`your guess is to high`)
  }

}
function cleanUpGuess(guess){
  userInput.value = ""
  guessSlot.innerHTML += `${guess} ,`

  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`

}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`

}

function endGame(){
  userInput.value = ""
  userInput.setAttribute("disable", "")
  para.classList.add('button')
  para.innerHTML = `<h2 id = "newGame">start new game</h2 >`
  startOver.append(para)
  playGame = false
  newGame()

}

function newGame(){
  const newGameButotn = document.querySelector("#newGame")

  newGameButotn.addEventListener("click", function(e){
    randomNumber = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ""
    remaining.innerHTML = `${11 - numGuess}`
    userInput.removeAttribute("disable")
    
    startOver.removeChild(para)


    playGame = true
  })

}
