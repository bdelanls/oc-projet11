import Banner from '../../components/Banner'
import logements from '../../data/logements.json'
import LocationCard from '../../components/LocationCard'

function Home() {
  return (
    <main className="main">
      <Banner text="Chez vous, partout et ailleurs" className="banner__home" />
      <section className="gallery-locations">
        {logements.map(logement => (
          <LocationCard
            key={logement.id}
            id={logement.id}
            title={logement.title}
            src={logement.cover}
          />
        ))}
      </section>
    </main>
  )
}

export default Home
