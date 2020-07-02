import React, { useRef, useEffect } from "react"
import aboutmeStyle from "./aboutme.module.css"

const AboutMe = () => {
  const aboutmeRef = useRef(null)

  useEffect(() => {
    console.log(aboutmeRef.current.getBoundingClientRect())
  }, [aboutmeRef])

  return <div className={`page-container`} ref={aboutmeRef}></div>
}

export default AboutMe
