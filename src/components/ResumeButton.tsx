import { Button } from "react-bootstrap";

function ResumeButton() {
  const handleClick = () => {
    window.open("/path/to/pdf/document.pdf", "_blank");
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
