import { Login } from "@/components/Login";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Navbar } from "@/components/NavBar";
import { LocationCard } from "@/components/LocationCard";

export default function Services() {
  return (
    <Container>
      <Navbar />
      <Row>
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
        <LocationCard />
      </Row>
    </Container>
  );
}
