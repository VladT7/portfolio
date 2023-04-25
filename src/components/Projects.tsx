import { Container, Row, Col, Card, Button } from "react-bootstrap";
function Projects() {
  return (
    <Container>
      <Row className="mt-5">
        <Col xs={12} md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Card.Title>Project 1</Card.Title>
              <Card.Text>A short description of project 1 goes here.</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Card.Title>Project 2</Card.Title>
              <Card.Text>A short description of project 2 goes here.</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col xs={12} md={4}>
          <Card>
            <Card.Img variant="top" src="https://via.placeholder.com/300x200" />
            <Card.Body>
              <Card.Title>Project 3</Card.Title>
              <Card.Text>A short description of project 3 goes here.</Card.Text>
              <Button variant="primary">Learn More</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
