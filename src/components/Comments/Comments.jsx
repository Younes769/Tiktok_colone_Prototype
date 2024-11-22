import { useState } from 'react'
import './Comments.css'

function Comments({ comments, isOpen, onClose }) {
  const [newComment, setNewComment] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add new comment logic here
    setNewComment('')
  }

  return (
    <div className={`comments-section ${isOpen ? 'open' : ''}`}>
      <div className="comments-header">
        <h3>Comments ({comments.length})</h3>
        <button onClick={onClose} className="close-button">×</button>
      </div>

      <form onSubmit={handleSubmit} className="comment-form">
        <input
          type="text"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment..."
          className="comment-input"
        />
        <button type="submit" className="comment-submit">Post</button>
      </form>

      <div className="comments-list">
        {comments.map(comment => (
          <div key={comment.id} className="comment">
            <div className="comment-avatar">
              {comment.user.charAt(1).toUpperCase()}
            </div>
            <div className="comment-content">
              <div className="comment-user">{comment.user}</div>
              <div className="comment-text">{comment.text}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Comments 