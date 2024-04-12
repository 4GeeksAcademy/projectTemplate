import { Login } from "@/components/Login";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Navbar } from "@/components/NavBar";

export default function AddLocation() {
  return (
    <Container>
      <Navbar />
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
