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

try {
  console.log('Welcome to the tictactoe app!')
  console.log('--- Game Board ---')
  const gameBoard = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  console.log(gameBoardRepresentation(gameBoard))
  
  const player1 = []
  const player2 = []
  
  console.log('Player 1, choose a number: ')

} catch (error) {
  console.error(error)
}