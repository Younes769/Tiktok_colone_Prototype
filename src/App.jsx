import { useState } from 'react'
import VideoCard from './components/VideoCard/VideoCard'

function App() {
  const [videos] = useState([
    {
      id: 1,
      url: "https://assets.mixkit.co/videos/preview/mixkit-girl-in-neon-sign-1232-large.mp4",
      channel: "@user1",
      description: "Dancing in the neon lights! 💃✨",
      likes: 1234,
      comments: [
        { id: 1, user: "@dance_lover", text: "Amazing moves! 🔥", likes: 45 },
        { id: 2, user: "@neon_vibes", text: "Love the lighting!", likes: 23 }
      ],
      shares: 45,
      song: "Neon Dreams - Electronic",
      tags: ["dance", "neon", "vibes"]
    },
    {
      id: 2,
      url: "https://assets.mixkit.co/videos/preview/mixkit-tree-with-yellow-flowers-1173-large.mp4",
      channel: "@nature_lover",
      description: "Beautiful spring vibes 🌸🌿",
      likes: 892,
      comments: [
        { id: 1, user: "@flower_girl", text: "So peaceful 😌", likes: 34 },
        { id: 2, user: "@photography101", text: "Perfect composition!", likes: 12 }
      ],
      shares: 23,
      song: "Spring Waltz - Classical",
      tags: ["nature", "spring", "flowers"]
    },
    {
      id: 3,
      url: "https://assets.mixkit.co/videos/preview/mixkit-waves-in-the-water-1164-large.mp4",
      channel: "@ocean_vibes",
      description: "Ocean waves are so calming 🌊",
      likes: 2341,
      comments: [
        { id: 1, user: "@surfer", text: "Perfect waves! 🏄‍♂️", likes: 89 },
        { id: 2, user: "@beach_life", text: "Miss this view!", likes: 56 }
      ],
      shares: 156,
      song: "Ocean Breeze - Ambient",
      tags: ["ocean", "waves", "relax"]
    },
    {
      id: 4,
      url: "https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-city-traffic-at-night-11-large.mp4",
      channel: "@city_nights",
      description: "City lights never sleep 🌃",
      likes: 4523,
      comments: [
        { id: 1, user: "@night_owl", text: "This is my city! ❤️", likes: 234 },
        { id: 2, user: "@photographer", text: "Amazing timelapse!", likes: 145 }
      ],
      shares: 289,
      song: "Urban Nights - Electronic",
      tags: ["city", "night", "timelapse"]
    }
  ])

  return (
    <div className="app">
      <div className="app__container">
        <div className="app__videos">
          {videos.map(video => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
        <div className="app__sidebar">
          <h2>For You</h2>
          <div className="app__suggested">
            {videos.map(video => (
              <div key={video.id} className="app__suggestion">
                <img src={`https://picsum.photos/seed/${video.id}/100/56`} alt="thumbnail" />
                <div className="app__suggestion-info">
                  <p>{video.channel}</p>
                  <span>{video.description.slice(0, 30)}...</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
