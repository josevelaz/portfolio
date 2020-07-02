import React, { useRef, useEffect } from "react"
import homeStyles from "./home.module.scss"

const HomePage = () => {
  const homeRef = useRef(null)

  useEffect(() => {
    console.log(homeRef.current.getBoundingClientRect())
  }, [homeRef])

  return (
    <div className={`page-container ${homeStyles.homePage}`} ref={homeRef}>
      <div className={homeStyles.heroTextContainer}>
        <h1>Jose Velazquez</h1>
        <p>
          Certified Full-Stack Developer capabale of designing and implementing
          mobile and web applications using{" "}
          <span className={homeStyles.emphasizedText}>
            React, React Native, and ExpressJS.
          </span>
        </p>
      </div>
      <div></div>
    </div>
  )
}

export default HomePage
