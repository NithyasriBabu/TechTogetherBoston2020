import React from "react";
import { compose } from "recompose";

import { withAuthorization, withEmailVerification } from "../Session";

import { Container, Card, Button, Form } from "react-bootstrap";
const PostChallenge = () => (
  <Container>
    <Container>
      <h2 style={{ textAlign: "center" }}>Post a Challenge</h2>
      <hr />
      <Form>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="Title" placeholder="Add title" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Category</Form.Label>
          <Form.Control as="select">
            <option>HealthCare</option>
            <option>Environment</option>
            <option>Personal</option>
            <option>Education</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows={3} />
        </Form.Group>
      </Form>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin:'1.8rem' }}>
        <Button><img src="https://elearn.southampton.ac.uk/wp-content/blogs.dir/sites/64/2020/04/Upload-reference.png" alt="upload" width="150" height="100"/></Button>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Button variant="primary" style={{ display: 'flex', justifyContent: 'flex-end' }}>Submit</Button>{' '}</div>
    </Container>
  </Container>

);

const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(PostChallenge);
