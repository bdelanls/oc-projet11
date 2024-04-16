import { useEffect } from 'react'
import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import aboutCollapses from '../../data/about.json'

function Apropos() {
  useEffect(() => {
    document.title = 'Kasa - À propos'
  }, [])

  return (
    <div className="main">
      <Banner className="banner__apropos" />
      <section className="values">
        {aboutCollapses.map(aboutCollapse => (
          <Collapse key={aboutCollapse.id} title={aboutCollapse.title}>
            <p>{aboutCollapse.content}</p>
          </Collapse>
        ))}
      </section>
    </div>
  )
}

export default Apropos
