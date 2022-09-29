import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from "reactstrap";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";

function MedicalHelp() {
  const handleSubmit = (values) => {
    console.log(values);
    toast.success("Asked for Medical Help", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: false,
      progress: undefined,
    });
  };

  const initialValues = {
    AccidentType: "",
    Location: "",
    NumberOfPeopleAffected: "",
  };

  const validationSchema = yup.object({
    AccidentType: yup.string().required(),
    Location: yup.string().required(),
    NumberOfPeopleAffected: yup.string().required(),
  });

  return (
    <div>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable={false}
        pauseOnHover={false}
      />
      <Container>
        <h2 className="text-center">Medical Emergency Form</h2>
        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form>
            <Field
              className="form-control"
              type="text"
              placeholder="Location"
              name="Location"
            />
            <ErrorMessage
              name="Location"
              component="div"
              className="text-danger"
            />{" "}
            <br />
            <Field
              className="form-control"
              type="text"
              placeholder="Type of Accident"
              name="AccidentType"
            />
            <ErrorMessage
              name="AccidentType"
              component="div"
              className="text-danger"
            />{" "}
            <br />
            <Field
              className="form-control"
              type="text"
              placeholder="Number Of People Affected"
              name="NumberOfPeopleAffected"
            />
            <ErrorMessage
              name="NumberOfPeopleAffected"
              component="div"
              className="text-danger"
            />{" "}
            <br />
            <button
              className="form-control"
              type="submit"
              onSubmit={handleSubmit}
            >
              Submit
            </button>
          </Form>
        </Formik>
      </Container>
    </div>
  );
}

export default MedicalHelp;
