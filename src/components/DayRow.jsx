function DayRow({ date, min, max }) {
  return (
    <li className="day">
      <span>{date}</span>
      <span>{min}° / {max}°</span>
    </li>
  )
}

export default DayRow
