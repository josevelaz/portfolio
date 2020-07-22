import React from "react"
import techStyles from "./technology.module.scss"
import tech from "../../utils/known-tech.json"
import Card from "../Card/Card"
import Media from "react-media"
import SVG from "react-inlinesvg"

export const TechnologyPage = () => {
  return (
    <div className="main" style={{ alignItems: "center" }}>
      <Media
        queries={{
          large: "(min-width: 900px)",
        }}
      >
        {matches => {
          const margin = matches.large && "40vw"
          return (
            <Card
              header="Known Techologies"
              containerStyle={{ marginLeft: margin }}
              innerContainerStyle={{
                flexWrap: "wrap",
              }}
            >
              {tech.map(data => {
                return (
                  <div className={techStyles.container}>
                    <SVG
                      cacheRequests={true}
                      src={`https://cdn.jsdelivr.net/gh/josevelaz/portfolio@latest/src/images/tech-icons/${
                        data.name === "xCode / iOS" ? "Apple" : data.name
                      }.svg`}
                      className={techStyles.techImg}
                      alt="📵"
                    />
                    <h2 style={{ color: "#000" }}>{data.name}</h2>
                  </div>
                )
              })}
            </Card>
          )
        }}
      </Media>
    </div>
  )
}
