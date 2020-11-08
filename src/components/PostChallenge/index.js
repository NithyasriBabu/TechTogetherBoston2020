import React, {useState, useEffect } from "react";
import { compose } from "recompose";

import { withAuthorization, withEmailVerification } from "../Session";

import { Container, Button, Form, Row } from "react-bootstrap";
import Select from 'react-select';

const PostChallenge = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [categories, setCategories] = useState([]);

  const [files, setFiles] = useState();
  const [description, setDescription] = useState('');
  const [title, setTitle]  = useState('');
  const [category, setCategory]  = useState([]);

  const categoryChange = (evt) => {
    let cat = [];
    if(evt){
      evt.forEach((category_val, index) => {
        cat.push(category_val.value)
      });
    }

    setCategory(cat);
  }

  const onSubmit = () => {
    const uploadData = new FormData();
    
    uploadData.append('title', title);
    uploadData.append('image', files);
    uploadData.append('description', description);
    uploadData.append('categories', category);

    fetch("/challenges/", 
      {method: 'POST', body: uploadData}
    ).then(res => alert("Added Challenge Successfully"))
    .catch(error => alert(error));
  }

  useEffect(() => {
    fetch("/categories/", {method: 'POST'})
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setCategories(result.categories);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )

  }, [])

  let categoriesList = [];
  
  if (error)
    categoriesList = <div>Error: {error.message}</div>;
  else if (!isLoaded)
    categoriesList = <div>Loading...</div>;
  else {
    categories.forEach((category, index) => {
      categoriesList.push( {
        'value': category.category,
        'label': category.category}
      );
    })
  }

  return(

    <Container style={{marginTop: '30px', width: '60%'}}>
      <Container>
        <h2 style={{ textAlign: "center", marginBottom:'20px' }}>Post a Challenge</h2>
        <Form>
          <Form.Group controlId="exampleForm.ControlInput1" as={Row}>
            <Form.Label>Title</Form.Label>
            <Form.Control type="Title" placeholder="Add title" value={title} onChange={(evt) => setTitle(evt.target.value)} maxLength="100" />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlSelect1" as={Row} style={{display: 'flex', flexDirection: 'column'}}>
            <Form.Label>Category</Form.Label>
            <Select options={categoriesList} isMulti onChange={(evt) => categoryChange(evt)} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1" as={Row}>
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" value={description} onChange={(evt) => setDescription(evt.target.value)} rows={3} />
          </Form.Group>
          <Form.Group as={Row}>
            <Form.File id="exampleFormControlFile1" label="Challenge Image" onChange={(evt) => setFiles(evt.target.files[0])} accept="image/*" />
          </Form.Group>
          <Form.Group as={Row} style={{display: 'flex', justifyContent: 'center'}}>
            <Button style={{width: '100%'}} onClick={() => onSubmit()}>Submit</Button>
          </Form.Group>
        </Form>
    </Container>
  </Container>
  )
}

const condition = (authUser) => !!authUser;

export default compose(
  withEmailVerification,
  withAuthorization(condition)
)(PostChallenge);
