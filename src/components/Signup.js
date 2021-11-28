import { useWeb3React } from "@web3-react/core";
import React, { Component } from "react";
import { Formik,  Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Row, Col, Nav, Container, Button, Form, NavDropdown, FormControl, Card } from 'react-bootstrap';


import { injected } from "../components/Wallet/connectors";

  const SignupSchema = Yup.object().shape({
    userName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
   
    email: Yup.string().email('Invalid email').required('Required'),
  });

export default function Signup() {
  const { active, account, library, connector, activate, deactivate } =
    useWeb3React();

  async function connect() {
    try {
      await activate(injected);
    } catch (ex) {
      console.log(ex);
    }
  }

  async function disconnect() {
    try {
      deactivate();
    } catch (ex) {
      console.log(ex);
    }
  }

  return (
    <div>
      <h1 class="headerTitle"> My Wallet</h1>
      <Container>
        <Row>
          <Col />
          <Col>
            <Card className="text-center" style={{ width: "fluid" }}>
              <p></p>
              <Card.Title>  Sign up</Card.Title>
           
              <Card.Body>
                <Card.Text>
                <Formik
       initialValues={{
         userName: '',
        
         email: '',
       }}
       validationSchema={SignupSchema}
       onSubmit={values => {
         // same shape as initial values
         console.log(values);
       }}
     >
       {({ errors, touched }) => (
         <Form>
           <Field name="userName" />
           {errors.userName && touched.userName ? (
             <div>{errors.userName}</div>
           ) : null}
           
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}
           <button type="submit">Submit</button>
         </Form>
       )}
     </Formik>
                
                
                Connected with <b>{account}</b>

                  
                </Card.Text>
                
               
              </Card.Body>
            </Card>
          </Col>
          <Col />
        </Row>
      </Container>
    </div>
  );
}
