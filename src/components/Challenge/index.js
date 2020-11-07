import React from "react";
import { compose } from "recompose";

import { withAuthorization, withEmailVerification } from "../Session";

import { Container, CardDeck, Card, Button } from "react-bootstrap";
const Challenge = () => (
  <Container>
    <Container>
      <h2 style={{ textAlign: "center" }}>Projects</h2>
      <hr />
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
)(Challenge);
