import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const notify = (event) => {
    toast("Logged in succesfully");
    console.log(event);
  };

  return (
    <Container>
      <h2 className="text-center">Login Page</h2>
      <ToastContainer />
      <Formik initialValues={{}} onSubmit={notify}>
        <Form>
          <Field
            className="form-control"
            type="text"
            placeholder="Enter Username"
            name="username"
          />
          <ErrorMessage name="username" component="div" /> <br />
          <Field
            className="form-control"
            type="password"
            placeholder="Enter Password"
            name="password"
          />
          <ErrorMessage name="password" component="div" /> <br />
          <button className="form-control" type="submit" onSubmit={notify}>
            Submit
          </button>
        </Form>
      </Formik>
    </Container>
  );
}

export default Login;
