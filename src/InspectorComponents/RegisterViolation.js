import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

function RegisterViolation() {
  const navigate = useNavigate();
  const handleSubmit = (values, onSubmitProps) => {
    console.log(values);
    navigate('issue-ticket', {state : values});
    /* onSubmitProps.resetForm(); */
    
  };

  const initialValues = {
    ViolatorsName: "",
    ViolationType: "",
    DrivingLicence: "",
    VehicleDetails: "",
    Date: "",
    Time: "",
    Location: "",
    Other: "",
  };

  const validationSchema = yup.object({
    ViolatorsName: yup.string().required(),
    ViolationType: yup.string().required(),
    DrivingLicence: yup.string().required(),
    VehicleDetails: yup.string().required(),
    Date: yup.string().required(),
    Time: yup.string().required(),
    Location: yup.string().required(),
    Other: yup.string().required(),
  });



  return (
    <>
      <h2 className="text-center">Violation Form</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <Form>
          <Field
            className="form-control"
            type="text"
            placeholder="Violators Name"
            name="ViolatorsName"
          />
          <ErrorMessage name="ViolatorsName" component="div" className="text-danger"/> <br />
          <Field
            className="form-control"
            type="text"
            placeholder="Violation Type"
            name="ViolationType"
          />
          <ErrorMessage name="ViolationType" component="div" className="text-danger"/> <br />
          <Field
            className="form-control"
            type="text"
            placeholder="Driving License"
            name="DrivingLicence"
          />
          <ErrorMessage name="DrivingLicence" component="div" className="text-danger"/> <br />
          <Field
            className="form-control"
            type="text"
            placeholder="Vehicle Details"
            name="VehicleDetails"
          />
          <ErrorMessage name="VehicleDetails" component="div" className="text-danger"/> <br />
          <Field
            className="form-control"
            type="date"
            placeholder="Date"
            name="Date"
          />
          <ErrorMessage name="Date" component="div" className="text-danger"/> <br />
          <Field
            className="form-control"
            type="time"
            placeholder="Time"
            name="Time"
          />
          <ErrorMessage name="Time" component="div" className="text-danger"/> <br />
          <Field
            className="form-control"
            type="text"
            placeholder="Location"
            name="Location"
          />
          <ErrorMessage name="Location" component="div" className="text-danger"/> <br />
          <Field
            className="form-control"
            type="text"
            placeholder="Other"
            name="Other"
          />
          <ErrorMessage name="Other" component="div" className="text-danger"/> <br />

          
          <button
            className="form-control"
            type="submit"
            onSubmit={handleSubmit}
          >
            Issue a Ticket
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default RegisterViolation;
