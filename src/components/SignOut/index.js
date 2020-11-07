import React from "react";

import { withFirebase } from "../Firebase";
import { Button } from "react-bootstrap";

const SignOutButton = ({ firebase }) => (
  <p onClick={firebase.doSignOut}>Sign Out</p>
);

export default withFirebase(SignOutButton);
