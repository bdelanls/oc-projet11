import Banner from '../../components/Banner'
import Collapse from '../../components/Collapse'
import aboutCollapses from '../../data/about.json'

function Apropos() {
  return (
    <div className="main">
      <Banner className="banner__apropos" />
      <section className="values">
        {aboutCollapses.map(aboutCollapse => (
          <Collapse
            key={aboutCollapse.id}
            title={aboutCollapse.title}
            content={<p>{aboutCollapse.content}</p>}
          />
        ))}
      </section>
    </div>
  )
}

export default Apropos
