import {Component} from 'react'
import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {search: ''}

  searchMovies = event => {
    this.setState({search: event.target.value})
  }

  render() {
    const {search} = this.state
    return (
      <nav className="nav-bar">
        <h1>movieDb</h1>
        <div className="btn-nav-container">
          <Link to="/">
            <button type="button">Popular</button>
          </Link>
          <Link to="/top-rated">
            <button type="button">Top Rated</button>
          </Link>
          <Link to="/upcoming">
            <button type="button">Upoming</button>
          </Link>
        </div>
        <div className="search-container">
          <input type="textbox" onChange={this.searchMovies} value={search} />
          <button type="button">search</button>
        </div>
      </nav>
    )
  }
}

export default Header
