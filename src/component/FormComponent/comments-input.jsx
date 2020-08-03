import React from "react";
import { Form } from "react-bootstrap";
export default () => {
  return (
    <Form.Group
      controlId="exampleForm.ControlTextarea1"
      className="description-section"
    >
      <Form.Label>Additional Comments</Form.Label>
      <Form.Control as="textarea" rows="10" />
    </Form.Group>
  );
};
