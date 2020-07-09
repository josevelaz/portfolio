import React, { useState, useRef } from "react"
import HomePage from "../components/home/home"
import { Space } from "../components/space/space"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import Earth from "../images/Earth.svg"
import BlackHole from "../images/BlackHole.svg"
import CloudOne from "../images/CloudOne.svg"
import CloudTwo from "../images/CloudTwo.svg"
import CloudThree from "../images/CloudThree.svg"
import AboutMe from "../components/aboutme/aboutme"
import { TechnologyPage } from "../components/technology/technology"
import { Project } from "../components/projects/projects"

const IndexPage = () => {
  const parallaxRef = useRef(null)
  return (
    <Parallax pages={3} ref={parallaxRef}>
      <ParallaxLayer
        factor={2}
        offset={1}
        speed={1}
        style={{ backgroundColor: "#0c164f" }}
      />

      <ParallaxLayer offset={0} speed={0.3}>
        <BlackHole className="black-hole" height={"15%"} width={"15%"} />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={1}
        factor={1}
        style={{ backgroundColor: "#5643fd" }}
      />

      <ParallaxLayer offset={0} speed={0.4} factor={4}>
        <Space />
      </ParallaxLayer>

      <ParallaxLayer offset={0} speed={1} factor={1}>
        <HomePage />
      </ParallaxLayer>
      <ParallaxLayer offset={0.9} speed={1.5} factor={1}>
        <AboutMe />
      </ParallaxLayer>
      <ParallaxLayer offset={1} speed={2} factor={1}>
        <TechnologyPage />
      </ParallaxLayer>

      <ParallaxLayer offset={1.9} speed={1.3} factor={1}>
        <Project />
      </ParallaxLayer>

      {/* Clouds */}
      <ParallaxLayer offset={2.1} speed={1.8}>
        <CloudOne
          className="cloud"
          id="animation-two"
          style={{ opacity: 0.9, top: "5%", left: "15%" }}
        />
        <CloudTwo
          className="cloud"
          id="animation-one"
          style={{ opacity: 0.6, top: "10%", right: "15%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.4}>
        <CloudTwo
          className="cloud"
          id="animation-one"
          style={{ opacity: 0.8, top: "2%", left: "5%" }}
        />
        <CloudThree
          className="cloud"
          id="animation-two"
          style={{ opacity: 0.9, top: "3%", right: "30%" }}
        />
        <CloudOne
          className="cloud"
          id="animation-two"
          style={{ opacity: 0.7, top: "40%", right: "10%" }}
        />
      </ParallaxLayer>
      <ParallaxLayer offset={2} speed={1.4}>
        <CloudThree
          className="cloud"
          id="animation-one"
          style={{ opacity: 0.9, top: "35%", left: "15%" }}
        />
      </ParallaxLayer>

      <ParallaxLayer
        offset={2}
        speed={2}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Earth height={"90%"} width={"90%"} className="earth" />
      </ParallaxLayer>
    </Parallax>
  )
}

export default IndexPage
