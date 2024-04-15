import { Link } from 'react-router-dom'
import './LocationCard.scss'

function LocationCard({ id, title, src }) {
  return (
    <article className="location">
      <Link key={id} to={`/fiche/${id}`}>
        <img className="location-picture" src={src} alt={title} />
        <h2 className="location-title">{title}</h2>
      </Link>
    </article>
  )
}

export default LocationCard
