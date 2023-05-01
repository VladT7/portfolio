import { Container, Row, Col } from "react-bootstrap";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaPython,
  FaVuejs,
  FaHtml5,
  FaCss3Alt,
  FaAws,
  FaCodeBranch,
  FaLinux,
} from "react-icons/fa";

import {
  SiTypescript,
  SiSpringboot,
  SiApachemaven,
  SiDatabricks,
  SiSelenium,
  SiJunit5,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { DiMysql } from "react-icons/di";
import { TbBrandCpp } from "react-icons/tb";

function About() {
  return (
    <Container style={{ marginBottom: 20 }}>
      <Row className="mt-5">
        <h2>About Me</h2>
        <p>
          I take a personal approach to every project, ensuring that your unique
          needs and goals are at the forefront of everything I do. By
          collaborating closely with you throughout the development process, I
          can deliver a final product that perfectly meets your requirements and
          exceeds your expectations.
        </p>

        <p>
          My skills are built on a foundation of 4+ years of experience, and my
          domain knowledge ranges from project management and mechanical
          engineering to construction, utilities, and horticulture. I pride
          myself on finding common ground with anyone I work with.
        </p>
      </Row>
      <Row className="mt-5">
        <Col>
          <h2>Skills</h2>
          <p>Here are some of the technologies and tools that I work with:</p>

          <div className="skill-section">
            <h4>Languages</h4>
            <div className="skill-items">
              <div className="skill-item">
                <FaPython size={50} className="mr-3" />
                <p>Python</p>
              </div>
              <div className="skill-item">
                <FaJava size={50} className="mr-3" />
                <p>Java</p>
              </div>
              <div className="skill-item">
                <TbBrandCpp size={50} className="mr-3" />
                <p>C++</p>
              </div>
              <div className="skill-item">
                <IoLogoJavascript size={50} className="mr-3" />
                <p>JavaScript</p>
              </div>
              <div className="skill-item">
                <SiTypescript size={50} className="mr-3" />
                <p>TypeScript</p>
              </div>
              <div className="skill-item">
                <DiMysql size={50} className="mr-3" />
                <p>SQL</p>
              </div>
              <div className="skill-item">
                <FaHtml5 size={50} className="mr-3" />
                <p>HTML</p>
              </div>
              <div className="skill-item">
                <FaCss3Alt size={50} className="mr-3" />
                <p>CSS</p>
              </div>
            </div>
          </div>

          <div className="skill-section">
            <h4>Frameworks and Libraries</h4>
            <div className="skill-items">
              <div className="skill-item">
                <SiSpringboot size={50} className="mr-3" />
                <p>Spring Boot</p>
              </div>
              <div className="skill-item">
                <FaNodeJs size={50} className="mr-3" />
                <p>Node.js</p>
              </div>
              <div className="skill-item">
                <FaReact size={50} className="mr-3" />
                <p>React</p>
              </div>
              <div className="skill-item">
                <FaVuejs size={50} className="mr-3" />
                <p>Vue.js</p>
              </div>
            </div>
          </div>

          <div className="skill-section">
            <h4>Tools</h4>
            <div className="skill-items">
              <div className="skill-item">
                <FaAws size={50} className="mr-3" />
                <p>AWS</p>
              </div>
              <div className="skill-item">
                <SiApachemaven size={50} className="mr-3" />
                <p>Apache Maven</p>
              </div>
              <div className="skill-item">
                <SiSelenium size={50} className="mr-3" />
                <p>Selenium</p>
              </div>
              <div className="skill-item">
                <SiJunit5 size={50} className="mr-3" />
                <p>JUnit</p>
              </div>
              <div className="skill-item">
                <SiDatabricks size={50} className="mr-3" />
                <p>Databricks</p>
              </div>

              <div className="skill-item">
                <FaCodeBranch size={50} className="mr-3" />
                <p>Git</p>
              </div>
              <div className="skill-item">
                <FaLinux size={50} className="mr-3" />
                <p>Linux</p>
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
