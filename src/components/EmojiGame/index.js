/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

// Write your code here.
import {Component} from 'react'
import './index.css'
import NavBar from '../NavBar/index'
import EmojiCard from '../EmojiCard'
import WinOrLossCard from '../WinOrLoseCard'

class EmojiGame extends Component {
  state = {
    score: 0,
    totalScore: 0,
    clickedList: [],
    isWin: null,
    isGameMode: true,
  }

  playAgain = () => {
    this.setState({score: 0, isGameMode: true, isWin: null, clickedList: []})
  }

  onEmojiClick = id => {
    const {emojisList} = this.props
    const {clickedList, score} = this.state

    const newItem = emojisList.find(each => each.id === id)
    const checkOldList = clickedList.find(eachItem => eachItem.id === id)

    if (checkOldList === newItem) {
      if (score > 11) {
        this.setState(prevState => ({
          isWin: true,
          isGameMode: false,
          score: prevState.score + 1,
          totalScore: score,
        }))
      } else {
        this.setState({isWin: false, isGameMode: false, totalScore: score})
      }
    } else if (score >= 11) {
      this.setState(prevState => ({
        isWin: true,
        isGameMode: false,
        score: prevState.score + 1,
        totalScore: score + 1,
      }))
      // } else if (score + 1 <= totalScore) {
      //   this.setState(prevState => ({
      //     score: prevState.score + 1,
      //     clickedList: [...prevState.clickedList, newItem],
      //     isGameMode: true,
      //   }))
    } else {
      this.setState(prevState => ({
        score: prevState.score + 1,
        clickedList: [...prevState.clickedList, newItem],
        isGameMode: true,
      }))
    }
  }

  render() {
    const {score, totalScore, isWin, isGameMode} = this.state
    // const {emojisList} = this.props

    const shuffledEmojisList = () => {
      const {emojisList} = this.props
      return emojisList.sort(() => Math.random() - 0.5)
    }

    return (
      <div className="bg-container">
        <NavBar score={score} totalScore={totalScore} isGameMode={isGameMode} />
        <div className="app-container">
          {isGameMode && (
            <div>
              <ul className="emoji-container">
                {shuffledEmojisList().map(each => (
                  <EmojiCard
                    key={each.id}
                    each={each}
                    onEmojiClick={this.onEmojiClick}
                  />
                ))}
              </ul>
            </div>
          )}
          {!isGameMode && (
            <>
              {isWin ? (
                <WinOrLossCard
                  heading="Won"
                  imgUrl="https://assets.ccbp.in/frontend/react-js/won-game-img.png"
                  playAgain={this.playAgain}
                  score={score}
                />
              ) : (
                <WinOrLossCard
                  heading="Lose"
                  imgUrl="https://assets.ccbp.in/frontend/react-js/lose-game-img.png"
                  playAgain={this.playAgain}
                  score={score}
                />
              )}
            </>
          )}
        </div>
      </div>
    )
  }
}

export default EmojiGame
