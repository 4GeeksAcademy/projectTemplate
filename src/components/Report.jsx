import Form from 'react-bootstrap/Form'

export function Report () {
    return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Location</Form.Label>
        <Form.Control as="textarea" rows={1} placeholder="Location" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Completed" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea2">
        <Form.Label>Findings</Form.Label>
        <Form.Control as="textarea" rows={5} placeholder="Findings" />
      </Form.Group>
      <Form.Group controlId="formFileMultiple" className="mb-3">
        <Form.Label>Photos</Form.Label>
        <Form.Control type="file" multiple />
      </Form.Group>
    </Form>
    );
}