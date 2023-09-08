// Write your code here
import 'react-multi-carousel/lib/styles.css'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import MovieItem from '../MovieItem'

import '../PrimeVideo/index.css'

const MovieSlider = props => {
  const {moviesList} = props
  console.log(props)
  return (
    <Slider slidesToShow={4} slidesToScroll={1}>
      {moviesList.map(item => (
        <MovieItem MovieDetails={item} key={item.id} />
      ))}
    </Slider>
  )
}

export default MovieSlider
