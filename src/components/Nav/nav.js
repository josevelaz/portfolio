import React, { useEffect, useContext } from "react"
import navStyles from "./nav.module.scss"
import { ScrollContext } from "../../utils/scrollContext"

const pages = [
  "Home",
  "About Me",
  "Technologies",
  "Experience",
  "Projects",
  "Contact Me",
]

if (!Array.prototype.last) {
  Array.prototype.last = function () {
    return this[this.length - 1]
  }
}

const Nav = props => {
  const { scrollData } = useContext(ScrollContext)

  return (
    <div className={navStyles.nav}>
      <h1>{scrollData.scrollPos}</h1>
      {pages.map(page => (
        <NavLink location={page} last={page === pages.last()} />
      ))}
    </div>
  )
}

const NavLink = props => (
  <div className={navStyles.navLink}>
    <div className={navStyles.navTrack}>
      <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
        <rect width="15" height="15" fill="#B0B0B0" />
      </svg>
      {!props.last && (
        <svg
          width="4"
          height="74"
          viewBox="0 0 4 74"
          fill="none"
          style={{ marginTop: 10, marginBottom: 10 }}
        >
          <line x1="2" x2="2" y2="74" stroke="#B0B0B0" stroke-width="4" />
        </svg>
      )}
    </div>

    <p>{props.location}</p>
  </div>
)

export default Nav
