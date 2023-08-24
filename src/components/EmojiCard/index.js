// Write your code here.
import './index.css'

const EmojiCard = props => {
  const {each, onEmojiClick} = props
  const {id, emojiUrl, emojiName} = each

  const emojiBtn = () => {
    onEmojiClick(id)
  }

  return (
    <li className="list-item">
      <button className="button" type="button" onClick={emojiBtn}>
        <div>
          <img src={emojiUrl} alt={emojiName} />
        </div>
      </button>
    </li>
  )
}
export default EmojiCard
