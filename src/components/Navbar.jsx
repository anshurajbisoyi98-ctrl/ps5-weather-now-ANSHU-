import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      <h3>Weather Now</h3>
      <div>
        <Link to="/">Home</Link>
        <Link to="/cities">Cities</Link>
      </div>
    </nav>
  )
}

export default Navbar
