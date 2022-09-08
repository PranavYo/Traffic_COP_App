import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from "reactstrap";

function RegisterViolation() {

  const handleSubmit = (values) =>
  {
    console.log(values)
  }

  return (
    <Container>
      <h2 className="text-center">Violation Form</h2>
      <Formik
        initialValues={{}}
        onSubmit = {handleSubmit}
        >
        
        <Form>
          <div >
          <Field  type="text" placeholder="Violators Name" name="ViolatorsName" />
          <ErrorMessage name="ViolatorsName" component="div" /> <br/>
          </div>
          
          <Field type="text" placeholder="Violation Type" name="ViolationType" />
          <ErrorMessage name="ViolationType" component="div" /> <br/>

          <Field type="text" placeholder="Driving License" name="DrivingLicense" />
          <ErrorMessage name="DrivingLicense" component="div" /> <br/>

          <Field type="text" placeholder="Vechile Details" name="VechileDetails" />
          <ErrorMessage name="VechileDetails" component="div" /> <br/>

          <Field type="text" placeholder="Date and Time" name="DateAndTime" />
          <ErrorMessage name="DateAndTime" component="div" /> <br/>

          <Field type="text" placeholder="Location" name="Location" />
          <ErrorMessage name="Location" component="div" /> <br/>

          <Field type="text" placeholder="Other" name="Other" />
          <ErrorMessage name="Other" component="div" /> <br/>

          <button type="submit" onSubmit={handleSubmit}>Submit</button>
        </Form>

      </Formik>
    </Container>
  );
}

export default RegisterViolation;
