import * as readline from 'node:readline'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

try {
  console.log('Welcome to the tictactoe app!')
  console.log('--- Game Board ---')
  const gameBoard = ['1', '2', '3', '4', '5', '6', '7', '8', '9']

  const startPlayer = 'X'

  chooseNumberOnBoard(gameBoard, startPlayer)
} catch (error) {
  console.error(error)
}

/**
 * Takes a game board array and turns it into a string.
 * 
 * @param {number[]} gameBoard - The game board to turn into a string. 
 * @returns {string} A string representation of the game board. 
 */
 function gameBoardRepresentation (gameBoard) {
  let gameBoardRepresentation = ''
  for (let i = 0; i < gameBoard.length; i++) {
    if (i % 3 === 0) {
      gameBoardRepresentation += '\n'
    }
    
    gameBoardRepresentation += gameBoard[i]
  }

  return gameBoardRepresentation
}

function chooseNumberOnBoard(gameBoard, player) {
  console.log(gameBoardRepresentation(gameBoard))
  
  rl.question(`Player ${player}, choose a number on the board: `, async number => {
    console.log(`\nYou chose number ${number}!`)

    if (!gameBoard.includes(number)) {
      // TODO: lägg till om numret inte finns på gameboard
      console.log('Number is taken')
      chooseNumberOnBoard(gameBoard, player)
    } else {
      const index = gameBoard.indexOf(number)
      gameBoard[index] = player

      const winner = checkForWinner(gameBoard)
      if (winner) {
        presentWinner(winner, gameBoard)
        rl.close()
      } else if (isBoardFull(gameBoard)) {
          console.log('Draw. Noone won!');
          rl.close()
      } else {
        if (player === 'X') {
          player = 'O'
        } else {
          player = 'X'
        }
        chooseNumberOnBoard(gameBoard, player)
      }
    }
  })
}

function isBoardFull (gameBoard) {
  return gameBoard.every(index => index === 'O' || index === 'X')
}

function presentWinner(winner, gameBoard) {
  console.log(gameBoardRepresentation(gameBoard))
  console.log(`Player ${winner} won!`);
}

/**
 * Checks if we have a winner!
 */
function checkForWinner(gameBoard) {
  let winner = ''
  if ((gameBoard[0] === gameBoard[1] && gameBoard[0] === gameBoard[2]) 
    || (gameBoard[0] === gameBoard[3] && gameBoard[0] === gameBoard[6])
    || (gameBoard[0] === gameBoard[4] && gameBoard[0] === gameBoard[8])
    ) {
    winner = gameBoard[0]
  }
  if ((gameBoard[4] === gameBoard[3] && gameBoard[4] === gameBoard[5]) 
  || (gameBoard[4] === gameBoard[1] && gameBoard[4] === gameBoard[7])
  || (gameBoard[4] === gameBoard[2] && gameBoard[4] === gameBoard[6])
  ) {
    winner = gameBoard[4]
  }
  if ((gameBoard[8] === gameBoard[7] && gameBoard[8] === gameBoard[6]) 
  || (gameBoard[8] === gameBoard[5] && gameBoard[8] === gameBoard[2])
  ) {
    winner = gameBoard[8]
  }
  return winner
}