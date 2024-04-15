import './Collapse.scss'
import { useState } from 'react'

function Collapse({ title, content, collapseClass = '' }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className={`collapse ${collapseClass} ${isOpen ? 'active' : ''}`}>
      <button className="collapse__btn" onClick={() => setIsOpen(!isOpen)}>
        <h2 className="collapse__title">{title}</h2>
      </button>
      {isOpen && <div className="collapse__content">{content}</div>}
    </div>
  )
}

export default Collapse
