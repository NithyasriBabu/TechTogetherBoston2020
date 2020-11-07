import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { compose } from "recompose";

import { SignUpLink } from "../SignUp";
import { PasswordForgetLink } from "../PasswordForget";
import { withFirebase } from "../Firebase";
import * as ROUTES from "../../constants/routes";
import { Form, Button, Container, Card } from "react-bootstrap";

const SignInPage = () => (
  <Container style={{ display: "flex", justifyContent: "center" }}>
    <Card style={{ padding: "50px", marginTop: "50px", width: "60%" }}>
      <h1 style={{ textAlign: "center" }}>SignIn</h1>
      <SignInForm />
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <SignInGoogle />
        <SignInFacebook />
        <SignInTwitter />
      </div>
      <br />
      <PasswordForgetLink />
      <SignUpLink />
    </Card>
  </Container>
);

const INITIAL_STATE = {
  email: "",
  password: "",
  error: null,
};

const ERROR_CODE_ACCOUNT_EXISTS =
  "auth/account-exists-with-different-credential";

const ERROR_MSG_ACCOUNT_EXISTS = `
  An account with an E-Mail address to
  this social account already exists. Try to login from
  this account instead and associate your social accounts on
  your personal account page.
`;

class SignInFormBase extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { email, password } = this.state;

    this.props.firebase
      .doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState({ ...INITIAL_STATE });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        this.setState({ error });
      });

    event.preventDefault();
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { email, password, error } = this.state;

    const isInvalid = password === "" || email === "";

    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          {error && <h2 color="danger">{error.message}</h2>}
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              onChange={this.onChange}
              type="email"
              value={email}
              placeholder="Email Address"
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              onChange={this.onChange}
              type="password"
              value={password}
              placeholder="Password"
            />
          </Form.Group>
          <Button disabled={isInvalid} variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

class SignInGoogleBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = (event) => {
    this.props.firebase
      .doSignInWithGoogle()
      .then((socialAuthUser) => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.user.displayName,
          email: socialAuthUser.user.email,
          roles: {},
        });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          {error && <h2 color="danger">{error.message}</h2>}
          <Button variant="danger" type="submit">
            Sign In with Google
          </Button>
        </Form>
      </Container>
    );
  }
}

class SignInFacebookBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = (event) => {
    this.props.firebase
      .doSignInWithFacebook()
      .then((socialAuthUser) => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.additionalUserInfo.profile.name,
          email: socialAuthUser.additionalUserInfo.profile.email,
          roles: {},
        });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          {error && <h2 color="danger">{error.message}</h2>}
          <Button variant="primary" type="submit">
            Sign In with Facebook
          </Button>
        </Form>
      </Container>
    );
  }
}

class SignInTwitterBase extends Component {
  constructor(props) {
    super(props);

    this.state = { error: null };
  }

  onSubmit = (event) => {
    this.props.firebase
      .doSignInWithTwitter()
      .then((socialAuthUser) => {
        // Create a user in your Firebase Realtime Database too
        return this.props.firebase.user(socialAuthUser.user.uid).set({
          username: socialAuthUser.additionalUserInfo.profile.name,
          email: socialAuthUser.additionalUserInfo.profile.email,
          roles: {},
        });
      })
      .then(() => {
        this.setState({ error: null });
        this.props.history.push(ROUTES.HOME);
      })
      .catch((error) => {
        if (error.code === ERROR_CODE_ACCOUNT_EXISTS) {
          error.message = ERROR_MSG_ACCOUNT_EXISTS;
        }

        this.setState({ error });
      });

    event.preventDefault();
  };

  render() {
    const { error } = this.state;

    return (
      <Container>
        <Form onSubmit={this.onSubmit}>
          {error && <h2 color="danger">{error.message}</h2>}
          <Button variant="primary" type="submit">
            Sign In with Twitter
          </Button>
        </Form>
      </Container>
    );
  }
}

const SignInForm = compose(withRouter, withFirebase)(SignInFormBase);

const SignInGoogle = compose(withRouter, withFirebase)(SignInGoogleBase);

const SignInFacebook = compose(withRouter, withFirebase)(SignInFacebookBase);

const SignInTwitter = compose(withRouter, withFirebase)(SignInTwitterBase);

export default SignInPage;

export { SignInForm, SignInGoogle, SignInFacebook, SignInTwitter };