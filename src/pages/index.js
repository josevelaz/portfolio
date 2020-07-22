import React, { useState, useRef, useEffect } from "react"
import HomePage from "../components/home/home"
import { Space } from "../components/space/space"
import { interpolate } from "react-spring"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"
import Earth from "../images/Earth.svg"
import Moon from "../images/Moon.svg"
import BlackHole from "../images/BlackHole.svg"
import CloudOne from "../images/CloudOne.svg"
import CloudTwo from "../images/CloudTwo.svg"
import CloudThree from "../images/CloudThree.svg"
import Ship from "../images/Ship.svg"
import AboutMe from "../components/aboutme/aboutme"
import { TechnologyPage } from "../components/technology/technology"
import { Project } from "../components/projects/projects"
import ContactMe from "../components/contactme/contactme"

const CONTACT_OFFSET = 3

const IndexPage = () => {
  useEffect(() => {}, [])
  return (
    <Parallax pages={4}>
      {/* Middle Backgroun */}
      <ParallaxLayer
        offset={1}
        factor={1.5}
        style={{ backgroundColor: "#0c164f" }}
      />

      {/* Earth BG */}
      <ParallaxLayer
        offset={2.5}
        factor={1.5}
        style={{ backgroundColor: "#5643fd" }}
      />

      {/* Black Hole */}
      <ParallaxLayer offset={0} speed={0.3}>
        <BlackHole className="black-hole" height={"15%"} width={"15%"} />
      </ParallaxLayer>

      {/* Stars */}
      <ParallaxLayer offset={0} factor={4} speed={0.1}>
        <Space />
      </ParallaxLayer>

      {/* Home Page */}
      <ParallaxLayer offset={0} speed={0.5} factor={1}>
        <HomePage />
      </ParallaxLayer>

      {/* About Me */}
      <ParallaxLayer offset={0.5} speed={0.7} factor={1}>
        <AboutMe />
      </ParallaxLayer>

      {/* Flying Starship */}
      <ParallaxLayer offset={1} speed={1.1} factor={2}>
        <Ship style={{ transform: "translate(50%, -200%)" }} />
      </ParallaxLayer>

      {/* Known teck */}
      <ParallaxLayer offset={1} speed={0.5} factor={1}>
        <TechnologyPage />
      </ParallaxLayer>

      {/* Projects */}
      <ParallaxLayer offset={2} speed={0.3} factor={1}>
        <Project />
      </ParallaxLayer>

      {/* Clouds */}
      <ParallaxLayer offset={3} speed={0.8}>
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
      <ParallaxLayer offset={2.9} speed={0.4}>
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
      <ParallaxLayer offset={2.8} speed={0.4}>
        <CloudThree
          className="cloud"
          id="animation-one"
          style={{ opacity: 0.9, top: "35%", left: "15%" }}
        />
      </ParallaxLayer>

      {/* Moon */}
      <ParallaxLayer
        offset={3.5}
        speed={0.1}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <Moon className="moon" />
      </ParallaxLayer>

      {/* Earth */}
      <ParallaxLayer
        offset={CONTACT_OFFSET}
        speed={0.4}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <Earth className="earth" />
      </ParallaxLayer>

      {/* Contact Form */}
      <ParallaxLayer
        offset={CONTACT_OFFSET}
        speed={0.5}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
        <ContactMe />
      </ParallaxLayer>
    </Parallax>
  )
}

export default IndexPage
