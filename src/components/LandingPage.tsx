import { Row, Col, Image, Button } from "react-bootstrap";
import ResumeButton from "./ResumeButton";
function LandingPage() {
  /**
   * a cool effect I thought of for this page - a tilt shift effect on the image that scrolls through the image as the user scrolls through the page
   * */
  return (
    <Row className="justify-content-center mt-3">
      <Col xs={6} lg={8} className="text-center">
        <Image src="https://via.placeholder.com/150x150" roundedCircle />
        <h1 className="mt-3">Hey, I'm Vlad 👋</h1>
        <p>
          When you have a vision in your mind, it must be executed flawlessly.
          As a full-stack software engineer, I turn your ideas into reality with
          precision and passion. Help your projects come to life - let's chat!
        </p>
        <ResumeButton></ResumeButton>{" "}
        <Button
          variant="secondary"
          size="lg"
          style={{ marginBottom: 20 }}
          // onClick={handleClick}
        >
          Get in touch
        </Button>
      </Col>
    </Row>
  );
}

export default LandingPage;
