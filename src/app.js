import * as readline from 'node:readline'
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

try {
  console.log('Welcome to the tictactoe app!')
  console.log('--- Game Board ---')
  const gameBoard = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
  console.log(gameBoardRepresentation(gameBoard))
  
  const player1 = 'X'
  const player2 = 'O'

  chooseNumberOnBoard(gameBoard, player1)

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
  rl.question(`Player ${player}, choose a number on the board: `, async number => {
    console.log(`\nYou chose number ${number}!`)
    if (!gameBoard.includes(number)) {
      console.log('Number is taken')
      chooseNumberOnBoard(gameBoard, player)
    } else {
      const index = gameBoard.indexOf(number)
      gameBoard[index] = player
      // Checks if somebody has won
      const winner = checkForWinner(gameBoard)

      if (player === 'X') {
        player = 'O'
      } else {
        player = 'X'
      }

      chooseNumberOnBoard(gameBoard, player)
    }
  })
  console.log(gameBoardRepresentation(gameBoard))
}

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