import './Banner.scss'

function Banner({ text, className }) {
  return (
    <section className={`banner ${className || ''}`}>
      {text && <h1 className="banner-text">{text}</h1>}
    </section>
  )
}

export default Banner
