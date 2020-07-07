import React from "react"
import techStyles from "./technology.module.scss"
import tech from "../../utils/known-tech.json"

export const Card = props => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        borderWidth: 2,
        width: "100%",
        height: "100%",
      }}
    >
      <div className={techStyles.cardContainer}>
        <div className={techStyles.cardHeader}>
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
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            padding: "30px",
            flexWrap: "wrap",
            height: "80%",
            width: "100%",
          }}
        >
          {props.children}
        </div>
      </div>
    </div>
  )
}

export const TechnologyPage = () => {
  return (
    <Card header="Known Techologies">
      {tech.map(data => {
        return (
          <div style={{ flex: 1, display: "flex" }}>
            <img src={data.src} className={techStyles.techImg} />
            <h2 style={{ color: "#000" }}>{data.name}</h2>
          </div>
        )
      })}
    </Card>
  )
}
