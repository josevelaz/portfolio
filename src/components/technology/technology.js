import React from "react"
import techStyles from "./technology.module.scss"
import tech from "../../utils/known-tech.json"

export const Card = props => {
  return (
    <div className={techStyles.cardContainer}>
      <div className={techStyles.cardTopBar}>
        <div
          className={techStyles.cardButton}
          style={{ backgroundColor: "#FF5F5A" }}
        />
        <div
          className={techStyles.cardButton}
          style={{ backgroundColor: "#FFBE2E" }}
        />
        <div
          className={techStyles.cardButton}
          style={{ backgroundColor: "#2BCA44" }}
        />
        <h2>{props.header}</h2>
      </div>
      <div className={techStyles.cardContent}>{props.children}</div>
    </div>
  )
}

export const TechnologyPage = () => {
  return (
    <div className="main" style={{ alignItems: "center" }}>
      <Card header="Known Techologies">
        {tech.map(data => {
          return (
            <div className={techStyles.cardInner}>
              <img
                src={`https://cdn.jsdelivr.net/gh/josevelaz/portfolio@latest/src/images/tech-icons/${data.name}.svg`}
                className={techStyles.techImg}
              />
              <h2 style={{ color: "#000" }}>{data.name}</h2>
            </div>
          )
        })}
      </Card>
    </div>
  )
}
