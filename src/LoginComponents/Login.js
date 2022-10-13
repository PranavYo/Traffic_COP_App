import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container, Row, Col } from "reactstrap";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import {useAuth} from './AuthProvider'
import { useState } from "react";
import axios from "axios";
import base_url from "../base_url";

function Login() {
  const navigate = useNavigate();
  let auth = useAuth();

  const [user, setuser] = useState(null);
  
  const notify = (event) => {
    axios.get(`${base_url}/valid/${event.username}/${event.password}`).then(
      (response) =>{
        if (response.data != null) {
          setuser(response.data)
          auth.login(response.data.username)
          navigate(response.data.username)
        } else {
          navigate('/')
        }
      },
      (error) =>{
        console.log(error)
      }
    )

    /* auth.login(event.username)
    if (event.username === 'inspector' && event.password === "inspector")
    {
      navigate('inspector')
    }
    else if (event.username === 'tct' && event.password === "tct")
    {
      navigate('tct')
    }
    else if (event.username === 'medical' && event.password === "medical")
    {
        navigate('medical');
    }
    else
    {
      navigate('/')
    }  */
  };

  const validationSchema = yup.object({
    username: yup.string().required("Enter the username").max(10),
    password: yup.string().required("Enter the password").max(10)
  });

  return (
    <>
      <Row xs="3">
        <Col></Col>
        <Col>
          <br/><br/><br/><br/>
          <Container className="align-middle bg-light border" fluid="md">
            <h2 className="text-center">Login Page</h2>
            <br />
            <ToastContainer />
            <Formik
              initialValues={{ username: "", password: "" }}
              onSubmit={notify}
              validationSchema={validationSchema}
            >
              <Form>
                <Field
                  className="form-control"
                  type="text"
                  placeholder="Enter Username"
                  name="username"
                />
                <ErrorMessage name="username" component="div" className="text-danger" /> <br />
                <Field
                  className="form-control"
                  type="password"
                  placeholder="Enter Password"
                  name="password"
                />
                <ErrorMessage name="password" component="div" className="text-danger" /> <br />
                <button
                  className="form-control"
                  type="submit"
                  onSubmit={notify}
                >
                  Submit
                </button>
                <br />
              </Form>
            </Formik>
          </Container>
        </Col>
        <Col></Col>
      </Row>
    </>
  );
}

export default Login;
