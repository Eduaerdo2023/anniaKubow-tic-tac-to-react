
const Cell = ({ id, go, setGo, cells, setCells, cell, winningMessage }) => {

  const handleClick = (e) => {
    if (!winningMessage) {
      console.log(e.target);
      const taken = e.target.firstChild?.classList.contains('circle')
        || e.target.firstChild?.classList.contains('cross') ||
        e.target.classList.contains('circle') ||
        e.target.classList.contains('cross')
      if (!taken) {
        if (go === 'circle') {
          handleCellChange('circle')
          setGo('cross')
        }
        if (go === 'cross') {
          handleCellChange('cross')
          setGo('circle')
        }
      }
    }
  }
  const handleCellChange = (className) => {
    const nextCells = cells.map((cell, index) => {
      if (index === id) {
        return className
      } else {
        return cell
      }
    })
    setCells(nextCells)
  }


  return (
    <div className="square" id={id} onClick={handleClick}>
      <div className={cell}></div>
    </div>
  )
}

export default Cell
