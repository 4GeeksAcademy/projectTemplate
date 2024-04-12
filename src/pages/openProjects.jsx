import { Login } from "@/components/Login";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function OpenProjects() {
  return (
    <Container>
      <Login />
      <Row>
        <Col>
        <h1>Hello</h1>

        <Button variant="primary">Click Here!</Button>
        </Col>
      </Row>
    </Container>
  );
}
