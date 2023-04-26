import { Container, Row, Col, Image } from "react-bootstrap";
import ResumeButton from "./ResumeButton";
function LandingPage() {
  /**
   * a cool effect I thought of for this page - a tilt shift effect on the image that scrolls through the image as the user scrolls through the page
   * */
  return (
    <Row className="justify-content-center mt-3">
      <Col xs={6} lg={8} className="text-center">
        <Image src="https://via.placeholder.com/150x150" roundedCircle />
        <h1 className="mt-3">Vlad Timofyeyev</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio
          iure reprehenderit maiores suscipit quasi, numquam eius sed quaerat,
          doloribus ea sequi quis debitis deserunt consequuntur. Autem tenetur
          error repellendus facilis?
        </p>
        <ResumeButton></ResumeButton>
      </Col>
    </Row>
  );
}

export default LandingPage;
