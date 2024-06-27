import { useEffect, useState } from "react"
import Cell from './componentes/Cell'

const App = () => {
  const [cells, setCells] = useState([
    "", "", "",
    "", "", "",
    "", "", ""
  ])
  const [winningMessage, setWinningMessage] = useState("")
  const [go, setGo] = useState('circle')
  const message = "it is now " + go + "'s go."
  const checkScore = () => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ]

    winningCombos.forEach(array => {
      let circleWins = array.every(cell => cells[cell] === "circle")
      if (circleWins) {
        setWinningMessage('Circle Wins!')
        return
      }
      let crossWins = array.every(cell => cells[cell] === "cross")
      if (crossWins) {
        setWinningMessage('Cross Wins!')
        return
      }
    })
  }
  useEffect(() => {
    checkScore()
  }, [cells])
  return (
    <div className="app">
      <div className="gameboard">
        {cells.map((cell, index) =>
          <Cell
            key={index}
            id={index}
            go={go}
            setGo={setGo}
            cells={cells}
            setCells={setCells}
            cell={cell}
            winningMessage={winningMessage}
          />

        )}
      </div>
      <p>{winningMessage || message}</p>
    </div>
  )
}

export default App

