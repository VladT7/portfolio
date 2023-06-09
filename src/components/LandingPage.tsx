import { Row, Col, Image, Button } from "react-bootstrap";
import ResumeButton from "./ResumeButton";
import { Link } from "react-scroll";
function LandingPage() {
  /**
   * a cool effect I thought of for this page - a tilt shift effect on the image that scrolls through the image as the user scrolls through the page
   * */
  return (
    <Row className="justify-content-center mt-3">
      <Col xs={8} lg={8} className="text-center">
        <Image src="/media/profile.jpg" roundedCircle />
        <h1 className="mt-3">Hey, I'm Vlad 👋</h1>
        <p>
          When you have a vision in your mind, it must be executed flawlessly.
          As a full-stack software engineer, I turn your ideas into reality with
          precision and passion.
        </p>
        <p>Help your projects come to life - let's chat!</p>
        <ResumeButton></ResumeButton>{" "}
        <Link to="contact" smooth={true} duration={10}>
          <Button variant="secondary" size="lg" style={{ marginBottom: 20 }}>
            Get in touch
          </Button>
        </Link>
      </Col>
    </Row>
  );
}

export default LandingPage;
