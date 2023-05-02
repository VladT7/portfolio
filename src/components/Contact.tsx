import { Button, Container } from "react-bootstrap";

function Contact() {
  return (
    <div id="contact">
      <Container>
        <h2>Contact Me</h2>
        <p>
          Interested in working together? Fill out the form below or shoot me an
          email at <a href="mailto:vladt13@gmail.com">vladt13@gmail.com</a>!
        </p>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <label>Your Name:</label>
          <input className="form-control" type="text" name="name" />
          <label>Your Email:</label>
          <input className="form-control" type="email" name="email" />
          <label>Message:</label>
          <textarea className="form-control" name="message"></textarea>
          <p>
            <Button type="submit" style={{ marginTop: 10 }}>
              Send
            </Button>
          </p>
        </form>
      </Container>
    </div>
  );
}

export default Contact;
