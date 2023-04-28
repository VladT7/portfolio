import { Button } from "react-bootstrap";

function ResumeButton() {
  const handleClick = () => {
    window.open(process.env.PUBLIC_URL + "/media/resume.pdf", "_blank");
  };
  return (
    <Button
      variant="primary"
      size="lg"
      style={{ marginBottom: 20 }}
      onClick={handleClick}
    >
      Open Resume
    </Button>
  );
}

export default ResumeButton;
