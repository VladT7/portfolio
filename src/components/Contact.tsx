import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <div id="contact">
      <Container style={{ marginBottom: 20 }}>
        <h2>Contact Me</h2>
        <Form className="mt-5">
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={5} placeholder="Enter message" />
          </Form.Group>
          <Button variant="primary" type="submit" style={{ marginTop: 20 }}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Contact;
