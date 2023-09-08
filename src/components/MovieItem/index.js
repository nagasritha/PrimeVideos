// Write your code here
import Popup from 'reactjs-popup'
import ReactPlayer from 'react-player/'
import {IoMdClose} from 'react-icons/io'
import './index.css'

const MovieItem = props => {
  const {MovieDetails} = props
  const {thumbnailUrl, videoUrl} = MovieDetails

  return (
    <Popup
      trigger={<img className="image" src={thumbnailUrl} alt="thumbnail" />}
      className="movie-container"
      modal
    >
      {close => (
        <div className="movie-container">
          <button
            data-testid="classButton"
            type="button"
            className="button"
            onClick={() => close()}
          >
            <IoMdClose className="icon" />
          </button>
          <ReactPlayer url={videoUrl} />
        </div>
      )}
    </Popup>
  )
}

export default MovieItem
