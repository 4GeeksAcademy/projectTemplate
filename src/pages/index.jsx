import { Footer } from "@/components/Footer";
import { Jumbotron } from "@/components/Jumbotron";
import { Login } from "@/components/Login";
import { Navbar } from "@/components/NavBar";
import { Container, Row, Col, Button } from "react-bootstrap";

export default function Home() {
  return (
    <Container>
      <Navbar />
      <Row>
        <Jumbotron />
      </Row>
      <Footer />
    </Container>
  );
}
