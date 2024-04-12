import { Login } from "@/components/Login";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Navbar } from "@/components/NavBar";
import { ContactForm } from "@/components/ContactForm";

export default function Contact() {
  return (
    <Container>
      <Navbar />
      <ContactForm />
    </Container>
  );
}
