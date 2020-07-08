import React, { useRef, useEffect, forwardRef } from "react"
import Particles from "react-particles-js"

export const Space = () => {
  return (
    <>
      <Particles
        style={{ position: "absolute", zIndex: 0, pointerEvents: "none" }}
        params={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: false,
            },
            move: {
              radius: 10,
              speed: 0.05,
            },
            size: {
              value: 1.5,
            },
            opacity: {
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.05,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </>
  )
}
