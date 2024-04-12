import { Login } from "@/components/Login";
import { Container, Row} from "react-bootstrap";
import { Navbar } from "@/components/NavBar";
import { Report } from "@/components/Report";

export default function pricing() {
  return (
    <Container>
      <Navbar />
      <Row>
        <Report />
      </Row>
    </Container>
  );
}
