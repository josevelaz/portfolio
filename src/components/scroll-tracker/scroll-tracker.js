import React, { useEffect, useContext } from "react"
import { ScrollContext } from "../../utils/scrollContext"

const Scroll = props => {
  const { scrollData, setScrollData } = useContext(ScrollContext)
  useEffect(() => {
    window.addEventListener("scroll", listneToScroll)
    return () => {
      window.removeEventListener("scroll", listneToScroll)
    }
  }, [])

  const listneToScroll = () => {
    const pos = window.pageYOffset
    setScrollData({ ...scrollData, scrollPos: pos })
  }

  return <div>{props.children}</div>
}

export default Scroll
