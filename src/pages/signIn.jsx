import { Login } from "@/components/Login";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Navbar } from "@/components/NavBar";

export default function SignIn() {
  return (
    <Container>
      <Navbar />
      <Login />
      <Row>
        <a href="signup">Sign Up</a>
      </Row>
    </Container>
  );
}
