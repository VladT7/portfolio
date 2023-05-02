import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <div id="contact">
      <Container style={{ marginBottom: 20 }}>
        <h2>Contact Me</h2>
        <Form className="mt-5" data-netlify="true" name="contact" method="POST">
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            netlify-honeypot="bot-field"
          />
          <Form.Control
            as="textarea"
            rows={5}
            placeholder="Enter message"
            name="message"
          />
          <Button variant="primary" type="submit" style={{ marginTop: 20 }}>
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}

export default Contact;
