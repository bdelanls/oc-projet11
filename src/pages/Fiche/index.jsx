import './Fiche.scss'
import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import logements from '../../data/logements.json'
import Collapse from '../../components/Collapse'
import Carrousel from '../../components/Carrousel'

function Fiche() {
  const { id } = useParams()
  const navigate = useNavigate()
  const logement = logements.find(logement => logement.id === id)

  useEffect(() => {
    if (!logement) {
      console.log('pas de logement trouvé, navigation vers 404')
      navigate('/erreur404', { replace: true })
    }
  }, [logement, navigate]) // Dépendances pour assurer que l'effet s'exécute au bon moment

  if (!logement) {
    return null // Cela ne sera exécuté que le premier rendu si logement est undefined
  }

  // Liste des équipements
  function LogementEquipements({ equipements }) {
    const equipementsList =
      equipements && equipements.length > 0 ? (
        equipements.map((equipement, index) => <li key={index}>{equipement}</li>)
      ) : (
        <li>Aucun équipement.</li>
      )
    return <ul>{equipementsList}</ul>
  }

  return (
    <main className="main">
      {/* CARROUSEL */}
      <Carrousel images={logement.pictures} />

      <section className="wrap-loc">
        <div className="loc">
          <h1 className="loc__title">{logement.title}</h1>
          <p className="loc__location">{logement.location}</p>
          <ul className="loc__tags">
            {logement.tags.map((tag, index) => (
              <li key={`${tag}-${index}`} className="loc__tags--tag">
                {tag}
              </li>
            ))}
          </ul>
        </div>
        {/* HOST */}
        <div className="infos-host">
          <div className="host">
            <p className="host__name">
              {logement.host.name.split(' ').map((part, index, array) => (
                <React.Fragment key={index}>
                  {part}
                  {index < array.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
            <img className="host__picture" src={logement.host.picture} alt={logement.host.name} />
          </div>
          {/* RATING */}
          <ul className="loc__rating">
            {Array.from({ length: 5 }, (_, index) => (
              <li
                key={index}
                className={`loc__rating__star ${index < parseInt(logement.rating) ? 'active' : ''}`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                  <path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" />
                </svg>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="lodging">
        <Collapse key={`${logement.id}-1`} title="Description" collapseClass="lodging__collapse">
          <p>{logement.description}</p>
        </Collapse>
        <Collapse key={`${logement.id}-2`} title="Équipement" collapseClass="lodging__collapse">
          <LogementEquipements equipements={logement.equipments} />
        </Collapse>
      </section>
    </main>
  )
}

export default Fiche
