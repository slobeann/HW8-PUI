import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Container } from "../../layout"
import Project from "./project"

function projects() {
  return (
    <Container>
      <div id="projects">
      </div>
      <Project
        number="01"
        image={<StaticImage src="../../../images/projects/asian-paints.png" alt="UI design for Asian Paints" />}
        title="Asian Paints"
        description="Designing an e-commerce portal under Asian Paints' Beautiful Homes Service."
        tags={["UX Audit"]}
      />

      <Project
        number="02"
        image={
          <StaticImage src="../../../images/projects/arc-foundation.png" alt ="UI Design for ARC Foundation"/>
        }
        title="ARC Foundation"
        description="Rebranding and redesigning for an Indian non - profit with goals of building an aware, active, and responsible citizenry."
        tags={["UX Design", "Branding"]}
      />

      <Project
        number="03"
        image={<StaticImage src="../../../images/projects/the-sock.png" alt="UI Design for The Sock" />}
        title="The Sock"
        description="Enriching information analytics for retail spaces with an occupancy detection system using non intrusive sensors."
        tags={["UX Design", "Hardware Design", "Machine Learning"]}
      />
    </Container>
  )
}

export default projects
