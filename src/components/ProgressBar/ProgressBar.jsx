import './ProgressBar.css'

function ProgressBar({ progress }) {
  return (
    <div className="progressBar">
      <div 
        className="progressBar__filled" 
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}

export default ProgressBar 