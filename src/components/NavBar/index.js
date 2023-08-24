// Write your code here.
import './index.css'

const NavBar = props => {
  const {score, totalScore, isGameMode} = props
  return (
    <div className="navbar-container">
      <div className="navbar-log-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
            alt="emoji logo"
          />
        </div>
        <div>
          <h1>Emoji Game</h1>
        </div>
      </div>
      {isGameMode && (
        <div className="score-card">
          <div className="score">
            <p>{`Score: ${score.toString()}`}</p>
          </div>
          <div className="score">
            <p>{`Top Score: ${totalScore.toString()}`}</p>
          </div>
        </div>
      )}
    </div>
  )
}
export default NavBar
