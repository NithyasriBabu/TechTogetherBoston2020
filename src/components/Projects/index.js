import React from "react";
import { compose } from "recompose";

import { withAuthorization, withEmailVerification } from "../Session";

import { Container, CardDeck, Card, Button } from "react-bootstrap";
const Projects = () => (
  <Container>
    <Container>
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <hr />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant="primary" style={{ display: 'flex', justifyContent: 'flex-end' }}>Create Project</Button>{' '}</div>
      <CardDeck>
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card>
      <Card>
        <Card.Body>This is some text within a card body.</Card.Body>
      </Card> 
      </CardDeck>
    </Container>
  </Container>
 
);

const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(Projects);
