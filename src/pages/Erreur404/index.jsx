import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Erreur404.scss'

function Erreur404() {
  useEffect(() => {
    document.title = 'Kasa - 404'
  }, [])

  return (
    <div>
      <main className="main">
        <section className="erreur">
          <h1 className="erreur__title">404</h1>
          <p className="erreur__message">{`Oups! La page que vous demandez n'existe pas.`}</p>
          <Link className="erreur__link" to="/">
            {`Retourner sur la page d'accueil`}
          </Link>
        </section>
      </main>
    </div>
  )
}

export default Erreur404
