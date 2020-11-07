import React from "react";
import { compose } from "recompose";

import { withAuthorization, withEmailVerification } from "../Session";
import Messages from "../Messages";
import { Container, CardDeck, Card, Button } from "react-bootstrap";
const HomePage = () => (
  <Container>
    <Container>
      <h2 style={{ textAlign: "center" }}>Popular Challenges</h2>
      <hr />
      <CardDeck>
        <Card>
          <Card.Img
            variant="top"
            src="https://base.imgix.net/files/base/ebm/industryweek/image/2020/04/problem_solving.5e962254a8281.png?auto=format&fit=crop&h=432&w=768"
          />
          <Card.Body>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://base.imgix.net/files/base/ebm/industryweek/image/2020/04/problem_solving.5e962254a8281.png?auto=format&fit=crop&h=432&w=768"
          />
          <Card.Body>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Img
            variant="top"
            src="https://base.imgix.net/files/base/ebm/industryweek/image/2020/04/problem_solving.5e962254a8281.png?auto=format&fit=crop&h=432&w=768"
          />
          <Card.Body>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <div
        style={{
          marginTop: "10px",
          marginBottom: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="outline-primary">See more</Button>
      </div>
    </Container>
    <Container>
      <h2 style={{ textAlign: "center" }}>Browers By Category</h2>
      <hr />
      <CardDeck>
        <Card>
          <Card.Body>
            <Card.Text style={{ textAlign: "center" }}>HealthCare</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text style={{ textAlign: "center" }}>Environment</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text style={{ textAlign: "center" }}>Personal</Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Text style={{ textAlign: "center" }}>Education</Card.Text>
          </Card.Body>
        </Card>
      </CardDeck>
      <div
        style={{ marginTop: "10px", display: "flex", justifyContent: "center" }}
      >
        <Button variant="outline-primary">See more</Button>
      </div>
    </Container>
  </Container>
  // <div>
  //   <h1>Home Page</h1>
  //   <p>The Home Page is accessible by every signed in user.</p>

  //   <Messages />
  // </div>
);

const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(HomePage);
