import React, { useRef, useEffect, useContext } from "react"
import homeStyles from "./home.module.scss"

const HomePage = () => {
  return (
    <div className="main">
      <div className={homeStyles.container}>
        <h1>Jose Velazquez</h1>
        <svg height="30" viewBox="0 0 100% 30" transform="translate(0,-25)">
          <line y1="15" x2="100%" y2="15" stroke="white" stroke-width="7" />
        </svg>
        <p>
          Certified Full-Stack Developer capabale of designing and implementing
          mobile and web applications using{" "}
          <span className={homeStyles.emphasizedText}>
            React, React Native, and ExpressJS.
          </span>
        </p>
      </div>
    </div>
  )
}

export default HomePage
