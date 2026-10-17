import { useState } from 'react'
import cities from '../cities'
import CityCard from '../components/CityCard'

function Cities() {
  const [search, setSearch] = useState('')

  const filtered = cities.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      <h2>Cities</h2>
      <input
        className="search"
        placeholder="Search city..."
        value={search}
        onChange={e => setSearch(e.target.value)}
      />
      <div className="grid">
        {filtered.map(c => <CityCard key={c.name} city={c} />)}
      </div>
      {filtered.length === 0 && <p>No city found</p>}
    </div>
  )
}

export default Cities
