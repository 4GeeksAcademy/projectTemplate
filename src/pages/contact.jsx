import { Login } from "@/components/Login";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Navbar } from "@/components/NavBar";
import { ContactForm } from "@/components/ContactForm";
import { ContactInformation } from "@/components/ContactInformation";
import { Footer } from "@/components/Footer";

export default function Contact() {
  return (
    <Container>
      <Navbar />
      <Row>
        <Col><ContactForm /></Col>
        <Col><ContactInformation /></Col>
      </Row>
      <Footer />
    </Container>
  );
}
