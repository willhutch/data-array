import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

export default function RadarMenu({ radars, selectedRadarId, onRadarChange }) {
  const router = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleRadarSelect = (radarId) => {
    setIsOpen(false)
    if (onRadarChange) {
      onRadarChange(radarId)
    } else {
      // Update URL with radar ID
      const url = new URL(window.location.href)
      url.searchParams.set('radarId', radarId)
      url.searchParams.delete('documentId')
      url.searchParams.delete('sheetId')
      url.searchParams.delete('sheetName')
      router.push(url.toString())
    }
  }

  const selectedRadar = radars.find((r) => r.id === selectedRadarId) || radars[0]

  return (
    <div className="radar-menu-top-left" ref={menuRef}>
      <div
        className="radar-menu-top-left__dropdown"
        onClick={() => setIsOpen(!isOpen)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault()
            setIsOpen(!isOpen)
          }
        }}
        aria-expanded={isOpen}
      >
        <span className="radar-menu-top-left__selector">{selectedRadar?.name || 'Select Radar'}</span>
        <span className={`radar-menu-top-left__arrow ${isOpen ? 'rotate' : ''}`}></span>
      </div>
      <ul className={`radar-menu-top-left__list ${isOpen ? 'show' : ''}`}>
        {radars.map((radar) => (
          <li
            key={radar.id}
            className={`radar-menu-top-left__list-item ${radar.id === selectedRadarId ? 'active' : ''}`}
          >
            <button
              className="radar-menu-top-left__list-item__button"
              onClick={() => handleRadarSelect(radar.id)}
              role="tab"
              aria-selected={radar.id === selectedRadarId}
            >
              {radar.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
