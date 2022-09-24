import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from "reactstrap";
import * as yup from "yup";

function Sos() {
  const handleSubmit = (values) => {
    console.log(values);
  };


  const initialValues = {
    Location: "",
  };

  const validationSchema = yup.object({
    Location: yup.string().required(),
  });

  return (
    <div>
      <Container>
        <h2 className="text-center">SOS</h2>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          <Form>
            <Field
              className="form-control"
              type="text"
              placeholder="Location"
              name="Location"
            />
            <ErrorMessage name="Location" component="div" className="text-danger"/> <br />
            
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