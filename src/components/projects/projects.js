import React, { useEffect, useRef, useState } from "react"
import projectStyles from "./projects.module.scss"
import Card from "../Card/Card"
import projects from "../../utils/projects.json"
import { Typewriter } from "react-typewriting-effect"
import Media from "react-media"

export const Project = props => {
  const [typing, setTyping] = useState({
    initial: false,
    ls: false,
    projectCommand: false,
    project: "",
  })

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
              containerStyle={{ marginRight: margin }}
              innerContainerStyle={{
                flexDirection: "column",
                wordWrap: "break-word",
              }}
              onClick={() =>
                !typing.initial && setTyping({ ...typing, initial: true })
              }
            >
              <p className={projectStyles.terminalText}>
                <span className={projectStyles.arrow}>&gt;</span>Press Anywhere
                on the Terminal to Begin PRP (Project Recovery Process)
                {!typing.initial && (
                  <span className={projectStyles.cursor}>|</span>
                )}
              </p>
              {typing.initial && (
                <p className={projectStyles.terminalText}>
                  <span className={projectStyles.arrow}>&gt;</span>
                  <Typewriter
                    string="ls projects && cd projects"
                    stopBlinkinOnComplete
                    onComplete={() =>
                      setTimeout(() => setTyping({ ...typing, ls: true }), 1000)
                    }
                  />
                </p>
              )}
              {typing.ls && (
                <>
                  <p className={projectStyles.terminalText}>
                    <span className={projectStyles.arrow}>&gt;</span>
                    {projects.map(project => (
                      <span
                        key={project["id"]}
                        className={projectStyles.terminalResponse}
                        onClick={() => {
                          setTyping({ ...typing, project: project["id"] })
                        }}
                        style={{
                          color: typing.project === project["id"] && "#93B67A",
                        }}
                      >
                        {project["name"]}
                      </span>
                    ))}
                  </p>
                  <p className={projectStyles.terminalText}>
                    <span className={projectStyles.arrow}>&gt;</span>
                    <span>
                      <i>Press any project to learn more information</i>
                    </span>
                  </p>
                </>
              )}
              {typing.project && (
                <p className={projectStyles.terminalText}>
                  <span className={projectStyles.arrow}>&gt;</span>
                  <Typewriter
                    string={`prp -h ${typing.project}`}
                    stopBlinkinOnComplete
                    onComplete={() =>
                      setTimeout(
                        () => setTyping({ ...typing, projectCommand: true }),
                        1000,
                      )
                    }
                  />
                </p>
              )}
              {typing.projectCommand &&
                Object.entries(projects.find(el => el.id === typing.project))
                  .slice(2, 5)
                  .map((res, index) => (
                    <p className={projectStyles.terminalText}>
                      <span className={projectStyles.arrow}>&gt;</span>
                      <span style={{ color: "#E47780" }}>{res[0] + ": "}</span>
                      {res[1]}
                    </p>
                  ))}
            </Card>
          )
        }}
      </Media>
    </div>
  )
}
