import { Modal, Carousel } from "react-bootstrap";

interface PortfolioItem {
  name: string;
  screenshots: string[];
  descriptions: string[];
}

interface Props {
  item: PortfolioItem;
  show: boolean;
  handleClose: () => void;
}

function ScreenshotCarousel({ item, show, handleClose }: Props) {
  return (
    <Modal show={show} onHide={handleClose} size="lg">
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        <Carousel>
          {item.screenshots.map((src, index, description) => (
            <Carousel.Item key={index}>
              <img
                className="d-block w-100"
                src={src}
                alt={`Screenshot ${index + 1}`}
              />
              <div style={{ marginTop: 20 }}>{item.descriptions[index]}</div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Modal.Body>
    </Modal>
  );
}

export default ScreenshotCarousel;
