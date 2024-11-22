import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as fasHeart } from '@fortawesome/free-solid-svg-icons'
import { faHeart as farHeart, faCommentDots, faShareNodes } from '@fortawesome/free-solid-svg-icons'
import './VideoSidebar.css'

function VideoSidebar({ likes, comments, shares, onCommentClick }) {
  const [liked, setLiked] = useState(false)
  const [likesCount, setLikesCount] = useState(likes)

  const handleLike = () => {
    setLiked(!liked)
    setLikesCount(liked ? likesCount - 1 : likesCount + 1)
  }

  const formatNumber = (num) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M'
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K'
    }
    return num.toString()
  }

  return (
    <div className="videoSidebar">
      <div className="videoSidebar__button" onClick={handleLike}>
        <div className={`icon-wrapper ${liked ? 'icon-wrapper--active' : ''}`}>
          <FontAwesomeIcon 
            icon={liked ? fasHeart : farHeart} 
            className="sidebar-icon"
          />
        </div>
        <p>{formatNumber(likesCount)}</p>
      </div>
      
      <div className="videoSidebar__button" onClick={onCommentClick}>
        <div className="icon-wrapper">
          <FontAwesomeIcon 
            icon={faCommentDots} 
            className="sidebar-icon"
          />
        </div>
        <p>{formatNumber(comments)}</p>
      </div>
      
      <div className="videoSidebar__button">
        <div className="icon-wrapper">
          <FontAwesomeIcon 
            icon={faShareNodes} 
            className="sidebar-icon"
          />
        </div>
        <p>{formatNumber(shares)}</p>
      </div>
    </div>
  )
}

export default VideoSidebar 