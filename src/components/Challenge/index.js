import React from "react";
import { compose } from "recompose";

import { withAuthorization, withEmailVerification } from "../Session";
import * as ROUTES from "../../constants/routes";

import { Container, Jumbotron, Row, Button, Col } from "react-bootstrap";
const ChallengePage = () => (
  <Container>
    <Jumbotron
      style={{ backgroundColor: "#1376DC", marginTop: "10px", color: "white" }}
    >
      <Row>
        <Col sm={9}>
          <h2>Plastic Eater</h2>
        </Col>
        <Col sm={3}>
          <h5>By Brinda McGill</h5>
        </Col>
      </Row>
      <Row>
        <Col sm={9}># Environment</Col>
        <Col sm={3}>01/2019 - 06/2020</Col>
      </Row>
    </Jumbotron>
    <Row>
      <Col md={{ offset: 3 }}>
        <Button variant="primary">Join Challenge</Button>
      </Col>
      <Col>
        <Button variant="primary">Project Gallery</Button>
      </Col>
    </Row>
    <br />
    <div className="video-section">
      <iframe
        width="100%"
        height="500"
        src="https://www.youtube.com/embed/mBZdHuZCfic"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <br />
    <div>
      <h2>Description</h2>
      <p>
        Contrary to popular belief, Lorem Ipsum is not simply random text. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old. Richard McClintock, a Latin professor at
        Hampden-Sydney College in Virginia, looked up one of the more obscure
        Latin words, consectetur, from a Lorem Ipsum passage, and going through
        the cites of the word in classical literature, discovered the
        undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33
        of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
        Cicero, written in 45 BC. This book is a treatise on the theory of
        ethics, very popular during the Renaissance. The first line of Lorem
        Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section
        1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is
        reproduced below for those interested. Sections 1.10.32 and 1.10.33 from
        "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their
        exact original form, accompanied by English versions from the 1914
        translation by H. Rackham.
      </p>
    </div>
    <br />
    <div>
      <h2>Reference</h2>
      <p>
        https://www.figma.com/file/rphQpryxZoFQtHCXGMxa8L/Innovate-Hub?node-id=0%3A1
      </p>
    </div>
    <br />
    <div>
      <h2>Project Links</h2>
      <p>
        https://www.figma.com/file/rphQpryxZoFQtHCXGMxa8L/Innovate-Hub?node-id=0%3A1
      </p>
    </div>
  </Container>
);

const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(ChallengePage);
