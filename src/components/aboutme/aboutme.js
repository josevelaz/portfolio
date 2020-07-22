import React, { useRef, useEffect, useContext } from "react"
import aboutmeStyle from "./aboutme.module.scss"

const AboutMe = () => {
  return (
    <div className="main">
      <div className={aboutmeStyle.container}>
        <h2>About Me</h2>
        <svg height="30" viewBox="0 0 200 30" transform="translate(0,-25)">
          <line y1="15" x2="100%" y2="15" stroke="white" strokeWidth="5" />
        </svg>
        <p>
          I am a 20 year old Full-Stack dveloper with experience in ReactJS,
          React Native and NodeJS/ExpressJS. While focused on Front-End
          development and UI/UX design, I am fully capable of creating,
          managing, and modifying an ExpressJS server with a MongoDB database.
          My hunger for cleaner code and better design allows me to be able to
          vastly improve performance and create a much more pleasent UX.
        </p>
      </div>
    </div>
  )
}

export default AboutMe
