import './index.css'

const CastItemDetails = props => {
  const {castDetails} = props
  const {originalName, character, profilePath} = castDetails
  return (
    <li className="li-cast-container">
      <img
        src={`https://image.tmdb.org/t/p/original${profilePath}`}
        alt={originalName}
        className="profile-img"
      />
      <div className="name-cont">
        <p className="name">{originalName}</p>
        <p className="character">{character}</p>
      </div>
    </li>
  )
}
export default CastItemDetails
