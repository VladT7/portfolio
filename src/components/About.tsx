import { Container, Row, Col, Image } from "react-bootstrap";
import { FaReact, FaNodeJs, FaDatabase } from "react-icons/fa";
function About() {
  return (
    <Container style={{ marginBottom: 20 }}>
      <Row className="mt-5">
        <Col xs={12} md={8}>
          <h2>About Me</h2>
          <p>
            I take a personal approach to every project, ensuring that your
            unique needs and goals are at the forefront of everything I do. By
            collaborating closely with you throughout the development process, I
            can deliver a final product that perfectly meets your requirements
            and exceeds your expectations.
            {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            eleifend mauris auctor fringilla pretium. Vestibulum euismod, metus
            eu accumsan rutrum, nisi sapien luctus mi, sit amet gravida nisi
            nibh vel mauris. Ut imperdiet, libero vel tempor pretium, neque
            augue suscipit magna, vel sagittis purus nunc nec augue. */}
          </p>
        </Col>
        <Col xs={12} md={4}>
          <Image src="https://via.placeholder.com/300x400" fluid rounded />
        </Col>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Skills</h2>
          <p>Here are some of the technologies and tools that I work with:</p>
          <div className="d-flex align-items-center">
            <FaReact size={50} className="mr-3" />
            <FaNodeJs size={50} className="mr-3" />
            <FaDatabase size={50} />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
