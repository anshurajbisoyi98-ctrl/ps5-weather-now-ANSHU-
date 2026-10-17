import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import cities from '../cities'
import DayRow from '../components/DayRow'

const codes = { 0: 'Clear sky', 1: 'Mainly clear', 2: 'Partly cloudy', 3: 'Cloudy', 45: 'Fog', 61: 'Rain', 63: 'Rain', 80: 'Showers', 95: 'Thunderstorm' }

function Weather() {
  const { city } = useParams()
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  const found = cities.find(c => c.name.toLowerCase() == city.toLowerCase())

  useEffect(() => {
    if (!found) return
    setLoading(true)
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${found.latitude}&longitude=${found.longitude}&current=temperature_2m,wind_speed_10m,weather_code&daily=temperature_2m_max,temperature_2m_min&timezone=auto`)
      .then(res => {
        if (!res.ok) throw new Error('Failed to load weather')
        return res.json()
      })
      .then(d => setData(d))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [city])

  if (!found) return (
    <div>
      <button className="btn" onClick={() => navigate(-1)}>Back</button>
      <h2>City not found</h2>
    </div>
  )

  return (
    <div>
      <button className="btn" onClick={() => navigate(-1)}>Back</button>
      <h2>{found.name}, {found.state}</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}

      {data && (
        <>
          <div className="current">
            <p className="temp">{data.current.temperature_2m}°C</p>
            <p>Wind: {data.current.wind_speed_10m} km/h</p>
            <p>{codes[data.current.weather_code] || 'Code ' + data.current.weather_code}</p>
          </div>
          <h3>Next 7 days</h3>
          <ul className="days">
            {data.daily.time.map((d, i) => (
              <DayRow key={d} date={d} min={data.daily.temperature_2m_min[i]} max={data.daily.temperature_2m_max[i]} />
            ))}
          </ul>
        </>
      )}
    </div>
  )
}

export default Weather
