import { Jumbotron } from "@/components/Jumbotron";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Jumbotron />
      <Row>
        <Col>
        <h1>Hello</h1>

        <Button variant="primary">Click Here!</Button>
        </Col>
      </Row>
    </Container>
  );
}
