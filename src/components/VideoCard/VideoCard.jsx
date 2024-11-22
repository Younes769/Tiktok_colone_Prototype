import { useState, useRef, useEffect } from 'react'
import VideoSidebar from '../VideoSidebar/VideoSidebar'
import VideoInfo from '../VideoInfo/VideoInfo'
import ProgressBar from '../ProgressBar/ProgressBar'
import Comments from '../Comments/Comments'
import './VideoCard.css'

function VideoCard({ video }) {
  const [playing, setPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [showComments, setShowComments] = useState(false)
  const videoRef = useRef(null)

  const onVideoPress = () => {
    if (playing) {
      videoRef.current?.pause()
      setPlaying(false)
    } else {
      videoRef.current?.play().catch(err => console.log("Playback failed:", err))
      setPlaying(true)
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.8
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(err => console.log("Autoplay failed:", err))
          setPlaying(true)
        } else {
          videoRef.current?.pause()
          setPlaying(false)
        }
      })
    }, options)

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const progress = (videoRef.current.currentTime / videoRef.current.duration) * 100
      setProgress(progress)
    }
  }

  return (
    <div className="videoCard">
      <video
        ref={videoRef}
        className="videoCard__player"
        loop
        onClick={onVideoPress}
        src={video.url}
        onTimeUpdate={handleTimeUpdate}
        playsInline
        muted
      />
      <ProgressBar progress={progress} />
      <VideoInfo channel={video.channel} description={video.description} />
      <VideoSidebar 
        likes={video.likes} 
        comments={video.comments.length} 
        shares={video.shares}
        onCommentClick={() => setShowComments(true)}
      />
      <Comments 
        comments={video.comments} 
        isOpen={showComments} 
        onClose={() => setShowComments(false)}
      />
    </div>
  )
}

export default VideoCard 