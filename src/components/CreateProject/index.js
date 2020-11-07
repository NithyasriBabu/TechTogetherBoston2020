import React from "react";
import { compose } from "recompose";

import { withAuthorization, withEmailVerification } from "../Session";

import { Container, Button, ButtonGroup, Form } from "react-bootstrap";

const CreateProject = () => (
    <Container>
        <Container>
            <h2 style={{ textAlign: "center" }}>Create Your Project</h2>
            <hr />
            <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Project Title</Form.Label>
                    <Form.Control type="Title" placeholder="Add project title" />
                    <ButtonGroup size="lg" className="mb-2">
                        <Button>Public</Button>
                        <Button>Private</Button>
                    </ButtonGroup>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput2">
                    <Form.Label>Contributors</Form.Label>
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
                    <Form.Control as="textarea" rows={5} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea2">
                    <Form.Label>Reference</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea3">
                    <Form.Label>Recruitment Message</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
            </Form>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '1.8rem' }}>
                <Button><img src="https://elearn.southampton.ac.uk/wp-content/blogs.dir/sites/64/2020/04/Upload-reference.png" alt="upload" width="150" height="100" /></Button>
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
)(CreateProject);
