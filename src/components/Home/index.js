import React, { useEffect, useState } from "react";

import { compose } from "recompose";
import * as ROUTES from "../../constants/routes";
import { withAuthorization, withEmailVerification } from "../Session";

import { Container, CardDeck, Card, Button } from "react-bootstrap";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

const btnStyle = {
  marginTop: "10px",
  marginBottom: "10px",
  display: "flex",
  justifyContent: "center",
}

const HomePage = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [challenges, setItems] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("/homepageinfo/", {method: 'POST'})
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.challenges);
          setCategories(result.categories);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

  }, [])

  let challengeList = [];
  let categoriesList = [];

  if (error)
    challengeList = <div>Error: {error.message}</div>;
    
  else if (!isLoaded)
    challengeList = <div>Loading...</div>;
  
  else {
    challenges.forEach((challenge, index) => {
      challengeList.push(
        <Card id={"challenge_"+challenge.id}>
          <Card.Link href={ROUTES.CHALLENGE+"/"+challenge.id}>
            <Card.Img variant="top" src={"/media/"+challenge.image}
              //src = "https://source.unsplash.com/random/198x111"
            />
            <Card.Body>
              <Card.Text>
                {challenge.description}
              </Card.Text>
              <Button style={{borderRadius: 100, marginRight: '10px'}} variant="danger" type="submit">
                <div>
                  <FontAwesomeIcon style={{marginRight: '10px'}} icon={faThumbsUp} inverse />
                  {challenge.likes}
                </div>
              </Button>
              <Button style={{borderRadius: 100}} variant="danger" type="submit">
                <div>
                  <FontAwesomeIcon style={{marginRight: '10px'}} icon={faThumbsDown} inverse />
                  {challenge.dislikes}
                </div>
              </Button>
            </Card.Body>
          </Card.Link>
        </Card>
      );
    })

    categories.forEach((category, index) => {
      categoriesList.push(
        <Card id={"category_"+category.category}>
          <Card.Link href={ROUTES.CHALLENGE+"/challenges/"+category.category}>
            <Card.Body>
              <Card.Text style={btnStyle}>
                {category.category}
              </Card.Text>
            </Card.Body>
          </Card.Link>
        </Card>
      );
    })
  }

  return(
    <Container>
      <Container style={{margin: '20px'}}>
        <h2 style={{ textAlign: "center", margin: '20px' }}>Popular Challenges</h2>
        <CardDeck>
          {challengeList}
        </CardDeck>
        <div style={btnStyle}>
          <Button variant="primary">See more</Button>
        </div>
      </Container>

      <Container style={{margin: '20px'}}>
        <h2 style={{ textAlign: "center", margin: '20px' }}>Browe By Category</h2>
        <CardDeck>
          {categoriesList}
        </CardDeck>
        <div style={btnStyle}>
          <Button variant="primary">See more</Button>
        </div>
      </Container>
    </Container>
  )
}

const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(HomePage);

//export default HomePage;