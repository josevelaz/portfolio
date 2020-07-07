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
              value: 60,
              density: {
                enable: true,
                value_area: 1500,
              },
            },
            line_linked: {
              enable: true,
              opacity: 0.02,
            },
            move: {
              direction: "right",
              speed: 0.1,
            },
            size: {
              value: 2,
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
