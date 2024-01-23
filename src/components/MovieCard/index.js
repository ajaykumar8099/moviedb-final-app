import {Link} from 'react-router-dom'
import './index.css'

const MovieCard = props => {
  const {movieData} = props
  const {voteAverage, posterPath, title, id, originalTitle} = movieData
  return (
    <Link className="list-container" to={`/movie/${id}`}>
      <li>
        <img
          src={`https://image.tmdb.org/t/p/w500${posterPath}`}
          alt={title}
          className="movie-card"
        />
        <p className="title">{title}</p>
        <p className="avg">{voteAverage}</p>
        <img src={posterPath} alt={originalTitle} />
        <button type="button" className="view-btn">
          View Details
        </button>
      </li>
    </Link>
  )
}
export default MovieCard
