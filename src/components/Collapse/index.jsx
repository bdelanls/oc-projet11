import './Collapse.scss'
import { useState, useRef, useEffect } from 'react'

function Collapse({ title, children, collapseClass = '' }) {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)

  const toggleCollapse = () => {
    if (isOpen) {
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`
      setTimeout(() => {
        contentRef.current.style.height = '0px'
      }, 10)
    } else {
      contentRef.current.style.height = `${contentRef.current.scrollHeight}px`
    }
    setIsOpen(!isOpen)
  }

  useEffect(() => {
    contentRef.current.style.height = isOpen ? `${contentRef.current.scrollHeight}px` : '0px'
  }, [isOpen])

  return (
    <div className={`collapse ${collapseClass} ${isOpen ? 'active' : ''}`}>
      <button className="collapse__btn" onClick={toggleCollapse}>
        <h2 className="collapse__title">{title}</h2>
      </button>
      <div
        ref={contentRef}
        className="collapse__content"
        style={{ overflow: 'hidden', height: '0px' }}
      >
        {children}
      </div>
    </div>
  )
}

export default Collapse
