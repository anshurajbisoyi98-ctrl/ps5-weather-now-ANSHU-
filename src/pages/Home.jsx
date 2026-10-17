import { Link } from 'react-router-dom'

function Home() {
  return (
    <div className="hero">
      <h1>Weather Now</h1>
      <p>Live weather and 7 day forecast for Indian cities</p>
      <Link to="/cities" className="btn">Check weather</Link>
    </div>
  )
}

export default Home
