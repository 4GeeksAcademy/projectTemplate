import { Login } from "@/components/Login";
import { Navbar } from "@/components/NavBar";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Row>
        <Col>
        <h1>Hello</h1>

        <Button variant="primary">Click Here!</Button>
        </Col>
      </Row>
    </Container>
  );
}
