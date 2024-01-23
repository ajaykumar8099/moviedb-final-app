import {Route, Switch} from 'react-router-dom'

import Header from './components/Header'
import PoplarHomePage from './components/PopularHomePage'
import TopRatedMoives from './components/TopRatedMovies'
import UpcomingMovies from './components/UpcomingMovies'

import MovieDetails from './components/MovieDetails'

const App = () => (
  <>
    <Header />
    <Switch>
      <Route exact path="/" component={PoplarHomePage} />
      <Route exact path="/top-rated" component={TopRatedMoives} />
      <Route exact path="/upcoming" component={UpcomingMovies} />
      <Route exact path="/movie/:id" component={MovieDetails} />
    </Switch>
  </>
)
export default App
