import React, { useState } from "react"
import { Link } from "gatsby"
import HomePage from "../components/home/home"
import Nav from "../components/Nav/nav"
import AboutMe from "../components/aboutme/aboutme"
import Scroll from "../components/scroll-tracker/scroll-tracker"
import { ScrollContext } from "../utils/scrollContext"

const IndexPage = () => {
  const [scrollData, setScrollData] = useState({ scrollPos: 0 })

  return (
    <>
      <ScrollContext.Provider value={{ scrollData, setScrollData }}>
        <Nav />
        <Scroll>
          <HomePage />
          <AboutMe />
        </Scroll>
      </ScrollContext.Provider>
    </>
  )
}

export default IndexPage
