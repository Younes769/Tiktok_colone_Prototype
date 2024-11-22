import './VideoInfo.css'

const VideoInfo = ({ channel, description }) => {
  return (
    <div className="videoInfo">
      <div className="videoInfo__channel">
        <h3>{channel}</h3>
      </div>
      <div className="videoInfo__description">
        <p>{description}</p>
      </div>
    </div>
  )
}

export default VideoInfo 