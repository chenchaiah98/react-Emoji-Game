// Write your code here.
import './index.css'

const WinOrLossCard = props => {
  const {playAgain, imgUrl, heading, score} = props

  const play = () => {
    playAgain()
  }
  return (
    <div className="winLoss-container">
      <div className="winLoss-text">
        <div>
          <h1>{`You ${heading}`}</h1>
        </div>
        <div>
          <p className="score-text">{score === 12 ? 'Best Score' : 'Score'}</p>
          <p className="score-details">{`${score}/12 `}</p>
        </div>
        <button type="button" onClick={play} className="play-again-btn">
          Play Again
        </button>
      </div>

      <div className="winLoss-img">
        <img src={imgUrl} alt="win or lose" />
      </div>
    </div>
  )
}

export default WinOrLossCard
