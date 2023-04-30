import { Card, Badge } from "react-bootstrap";
import Button from "react-bootstrap/esm/Button";

interface ProjectCardProps {
  title: string;
  description: React.ReactNode;
  features?: string[];
  technologies?: string[];
  imageUrl: string;
  projectUrl: string;
}

function ProjectCard({
  title,
  description,
  imageUrl,
  projectUrl,
  features,
  technologies,
}: ProjectCardProps) {
  return (
    <Card style={{ marginBottom: 20 }}>
      <Card.Img variant="top" src={imageUrl} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
        {features && (
          <>
            <Card.Subtitle>Features</Card.Subtitle>
            <Card.Text>
              <div className="pill-container">
                {features.map((feature, index) => (
                  <div key={index}>
                    <Badge pill bg="secondary" style={{ marginRight: 2 }}>
                      {feature}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card.Text>
          </>
        )}
        {technologies && (
          <>
            <Card.Subtitle>Built with</Card.Subtitle>
            <Card.Text>
              <div className="pill-container">
                {technologies.map((technology, index) => (
                  <div key={index}>
                    <Badge pill bg="secondary" style={{ marginRight: 2 }}>
                      {technology}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card.Text>
          </>
        )}
        <Button variant="primary" href={projectUrl}>
          Learn More
        </Button>
      </Card.Body>
    </Card>
  );
}

export default ProjectCard;
