import { Link } from 'react-router-dom'

function CityCard({ city }) {
  return (
    <Link to={`/weather/${city.name}`} className="card">
      <h3>{city.name}</h3>
      <p>{city.state}</p>
    </Link>
  )
}

export default CityCard
