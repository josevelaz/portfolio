import React from "react"
import cardStyles from "./Card.module.scss"

const Card = props => (
  <div className={cardStyles.cardContainer} style={props.containerStyle}>
    <div className={cardStyles.cardTopBar} style={props.topBarStyle}>
      <div
        className={cardStyles.cardButton}
        style={{ backgroundColor: "#FF5F5A" }}
      />
      <div
        className={cardStyles.cardButton}
        style={{ backgroundColor: "#FFBE2E" }}
      />
      <div
        className={cardStyles.cardButton}
        style={{ backgroundColor: "#2BCA44" }}
      />
      <h2>{props.header}</h2>
    </div>
    <div className={cardStyles.cardContent} style={props.innerContainerStyle}>
      {props.children}
    </div>
  </div>
)

export default Card
