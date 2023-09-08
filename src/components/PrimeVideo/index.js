// Write your code here
import MovieSlider from '../MoviesSlider'
import './index.css'

const PrimeVideos = props => {
  const {moviesList} = props
  const actionFilms = moviesList.filter(item => item.categoryId === 'ACTION')
  const comedyFilms = moviesList.filter(item => item.categoryId === 'COMEDY')
  return (
    <div className="prime-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/prime-video-img.png "
        alt="prime video"
        className="prime-image"
      />
      <div className="carousel-container">
        <h1>Action Movies</h1>
        <MovieSlider moviesList={actionFilms} />
        <h1>Comedy Movies</h1>
        <MovieSlider moviesList={comedyFilms} />
      </div>
    </div>
  )
}

export default PrimeVideos
