import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

function DoAnything() {
  return (
    <Container className="position-absolute bottom-0 px-5 pt-2 pb-5 w-100 bg-light">
      <Row>
        <Col className="text-center">
          <Button variant="dark" size="lg">Do Anything 🎲</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default DoAnything;