import { Container, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <div id="contact">
      <Container style={{ marginBottom: 20 }}>
        <h2>Contact Me</h2>
        <Form
          className="mt-5"
          data-netlify="true"
          name="contact"
          method="POST"
          on-submit="submit"
        >
          <Form.Control
            type="text"
            placeholder="Enter name"
            name="name"
            id="name"
            style={{ marginBottom: 10 }}
          />
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            id="email"
            netlify-honeypot="bot-field"
            style={{ marginBottom: 10 }}
          />
          <Form.Control
            as="textarea"
            rows={5}
            id="message"
            placeholder="Enter message"
            name="message"
            style={{ marginBottom: 10 }}
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
