import { Container } from "react-bootstrap";

function Contact() {
  return (
    <div id="contact">
      <Container style={{ marginBottom: 20 }}>
        <h2>Contact Me</h2>
        <p>
          Interested in working together? Fill out the form below or shoot me an
          email at <a href="mailto:vladt13@gmail.com">vladt13@gmail.com</a>!
        </p>
        <form name="contact" method="post">
          <input type="hidden" name="form-name" value="contact" />
          <p>
            <label>
              Your Name: <input type="text" name="name" />
            </label>
          </p>
          <p>
            <label>
              Your Email: <input type="email" name="email" />
            </label>
          </p>
          <p>
            <label>
              Message: <textarea name="message"></textarea>
            </label>
          </p>
          <p>
            <button type="submit">Send</button>
          </p>
        </form>
      </Container>
    </div>
  );
}

export default Contact;
