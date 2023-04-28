import { Container, Form, Button } from "react-bootstrap";

// interface FormProps extends HTMLAttributes<HTMLFormElement> {
//   netlify?: boolean;
// }
function Contact() {
  return (
    <div id="contact">
      <Container style={{ marginBottom: 20 }}>
        <h2>Contact Me</h2>
        <Form
          className="mt-5"
          name="contact"
          method="POST"
          data-netlify="true"
          // data-netlify-honeypot="bot-field"
        >
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="name"
              placeholder="Enter your name"
              name="name"
            />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              name="email"
            />
          </Form.Group>
          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={5}
              placeholder="Enter message"
              name="message"
            />
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
