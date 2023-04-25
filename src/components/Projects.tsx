import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
function Projects() {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} md={4}>
          <ProjectCard
            title={"title"}
            description={"A short description of project 1 goes here"}
            imageUrl={"https://via.placeholder.com/300x200"}
            projectUrl="https://www.google.com"
          ></ProjectCard>
        </Col>
        <Col xs={12} md={4}>
          <ProjectCard
            title={"title"}
            description={"A short description of project 2 goes here"}
            imageUrl={"https://via.placeholder.com/300x200"}
            projectUrl="https://www.google.com"
          ></ProjectCard>
        </Col>
        <Col xs={12} md={4}>
          <ProjectCard
            title={"title"}
            description={"A short description of project 3 goes here"}
            imageUrl={"https://via.placeholder.com/300x200"}
            projectUrl="https://www.google.com"
          ></ProjectCard>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
