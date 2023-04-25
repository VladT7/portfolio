import { Card } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl: string;
}

function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
}: ProjectCardProps) {
  return (
    <Card style={{ marginBottom: 20 }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Button variant="primary" href={projectUrl}>
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
