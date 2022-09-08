import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from "reactstrap";

function Sos() {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <Container>
        <h2 className="text-center">Violation Form</h2>
        <Formik initialValues={{}} onSubmit={handleSubmit}>
          <Form>
            <Field
              className="form-control"
              type="text"
              placeholder="Location"
              name="Location"
            />
            <ErrorMessage name="Location" component="div" /> <br />
            
            <button
              className="form-control"
              type="submit"
              onSubmit={handleSubmit}
            >
              SOS
            </button>
          </Form>
        </Formik>
      </Container>
    </div>
  );
}

export default Sos