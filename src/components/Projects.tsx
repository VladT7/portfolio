import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
function Projects() {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} md={4}>
          <ProjectCard
            title={"Benevity Cosmic"}
            description={"A short description of project 1 goes here"}
            imageUrl={"https://via.placeholder.com/300x200"}
            projectUrl="https://www.google.com"
          ></ProjectCard>
          <ProjectCard
            title={"Flix"}
            description={
              "A full-stack application that allows users to search their local movie theatres and purchase tickets for their favourite movies."
            }
            imageUrl={"https://via.placeholder.com/300x200"}
            projectUrl="https://www.google.com"
          ></ProjectCard>
        </Col>
        <Col xs={12} md={4}>
          <ProjectCard
            title={"Fiberr"}
            description={
              "This app allows a user to enter their health goals, then scan any item in store and quickly check if it aligns with their objectives."
            }
            imageUrl={"https://via.placeholder.com/300x200"}
            projectUrl="https://www.google.com"
          ></ProjectCard>
        </Col>
        <Col xs={12} md={4}>
          <ProjectCard
            title={"Course Cart"}
            description={
              <div>
                <p>
                  A full-stack application that allows multiple students to
                  register for university courses, based on their schedule and
                  pre-requisites.
                </p>
              </div>
            }
            features={["hi", "hello"]}
            technologies={["tech1", "tech2"]}
            imageUrl={"/media/courseCart.png"}
            projectUrl="https://github.com/VladT7/ENSF607project"
          ></ProjectCard>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
