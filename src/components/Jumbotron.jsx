import { Button, Col, Row } from "react-bootstrap";

export function Jumbotron() {
  return (
    <Row>
      <Col>
        <h1>Here</h1>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
          vero omnis reiciendis reprehenderit ullam quas doloribus ex quasi
          praesentium et, sed hic atque sit possimus doloremque eaque nobis
          exercitationem? Sequi.
        </p>
        <Button variant="primary">CTA</Button>
      </Col>
    </Row>
  );
}
