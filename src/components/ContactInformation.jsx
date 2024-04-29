import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export function ContactInformation() {
  return (
    <Card className="text-center">
      <Card.Header>(305) 888-0059</Card.Header>
      <Card.Body>
        <Card.Title>9841 NW 117th Way</Card.Title>
        <Card.Text>
        Medley, FL 33178
        </Card.Text>
        <Button variant="primary" href="https://www.google.com/maps/place/All+Power+Generator+Inc/@25.8785515,-80.3623344,16z/data=!3m1!4b1!4m6!3m5!1s0x88d9bb640db93341:0xd2847b1de4260825!8m2!3d25.8785467!4d-80.3597595!16s%2Fg%2F1tgn5jxn?entry=ttu">Google Maps</Button>
      </Card.Body>
      <Card.Footer className="text-muted">info@allpowergenerators.com</Card.Footer>
    </Card>
  );
}
