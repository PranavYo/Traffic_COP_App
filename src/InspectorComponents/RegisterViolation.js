import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";

function RegisterViolation() {
  const navigate = useNavigate();
  
  const handleSubmit = (values, onSubmitProps) => {
    console.log(values)
    navigate("issue-ticket", { state: values });
  };

  const initialValues = {
    violatorsName: "",
    violationType: "",
    drivingLicence: "",
    vehicleDetails: "",
    date: "",
    time: "",
    location: "",
    other: ""
  };

  const validationSchema = yup.object({
    violatorsName: yup.string().required(),
    violationType: yup.string().required(),
    drivingLicence: yup.string().required(),
    vehicleDetails: yup.string().required(),
    date: yup.string().required(),
    time: yup.string().required(),
    location: yup.string().required(),
    other: yup.string().required(),
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
            name="violatorsName"
          />
          <ErrorMessage
            name="violatorsName"
            component="div"
            className="text-danger"
          />{" "}
          <br />
          <Field
            className="form-control"
            type="text"
            placeholder="Violation Type"
            name="violationType"
          />
          <ErrorMessage
            name="violationType"
            component="div"
            className="text-danger"
          />{" "}
          <br />
          <Field
            className="form-control"
            type="text"
            placeholder="Driving License"
            name="drivingLicence"
          />
          <ErrorMessage
            name="drivingLicence"
            component="div"
            className="text-danger"
          />{" "}
          <br />
          <Field
            className="form-control"
            type="text"
            placeholder="Vehicle Details"
            name="vehicleDetails"
          />
          <ErrorMessage
            name="vehicleDetails"
            component="div"
            className="text-danger"
          />{" "}
          <br />
          <Field
            className="form-control"
            type="date"
            placeholder="date"
            name="date"
          />
          <ErrorMessage name="date" component="div" className="text-danger" />{" "}
          <br />
          <Field
            className="form-control"
            type="time"
            placeholder="time"
            name="time"
          />
          <ErrorMessage name="time" component="div" className="text-danger" />{" "}
          <br />
          <Field
            className="form-control"
            type="text"
            placeholder="location"
            name="location"
          />
          <ErrorMessage
            name="location"
            component="div"
            className="text-danger"
          />{" "}
          <br />
          <Field
            className="form-control"
            type="text"
            placeholder="other"
            name="other"
          />
          <ErrorMessage name="other" component="div" className="text-danger" />{" "}
          <br />
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
