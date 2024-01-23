import {Component} from 'react'
import CastItemDetails from '../CastItemDetails'

import './index.css'

class MovieDetails extends Component {
  state = {castDetailsList: []}

  componentDidMount() {
    this.getMovieDetails()
    this.getCastDetails()
  }

  getMovieDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const key = 'bdc9e7badf1357d7412ea98432343b0b'
    console.log(id, 'for movie')
    const url = `/api.themoviedb.org/3/movie/${id}?api_key=${key}&language=en-US`
    const options = {
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
    }
  }

  getCastDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const key = 'bdc9e7badf1357d7412ea98432343b0b'
    const url = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${key}&language=en-US`
    const options = {
      method: 'GET',
    }
    const respone = await fetch(url, options)
    console.log(respone)
    if (respone.ok) {
      const data = await respone.json()
      console.log(data)
      const {cast} = data
      const camelCaseData = cast.map(each => ({
        adult: each.adult,
        castId: each.cast_id,
        character: each.character,
        creditId: each.credit_id,
        gender: each.gender,
        id: each.id,
        knownForDepartment: each.known_for_department,
        name: each.name,
        order: each.name,
        originalName: each.original_name,
        popularity: each.popularity,
        profilePath: each.profile_path,
      }))
      console.log(camelCaseData)
      this.setState({castDetailsList: camelCaseData})
    }
  }

  getCastDetailsSection = () => {
    const {castDetailsList} = this.state
    if (castDetailsList.length === 0) {
      return null
    }
    return (
      <div>
        <ul className="un-list-cast-container">
          {castDetailsList.map(each => (
            <CastItemDetails key={each.id} castDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div className="bg-container">
        <h1>Movie Details Section</h1>
        <h1>Cast Details Section</h1>
        {this.getCastDetailsSection()}
      </div>
    )
  }
}
export default MovieDetails
