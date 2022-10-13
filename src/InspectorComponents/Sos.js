import React from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Container } from "reactstrap";
import * as yup from "yup";
import { ToastContainer, toast } from "react-toastify";

import axios from "axios";
import base_url from "../base_url";

function Sos() {
  const handleSubmit = (values, onSubmitProps) => {

    values["helpSent"] = false;
    axios.post(`${base_url}/addlocation`, values).then(
      (response) =>{
        console.log(response.data)
        console.log(values)
      },

      (error) => {
        console.log(error)
      }
    )
    
    onSubmitProps.resetForm();

    toast.success("Asked for COP Help", {
      position: "top-right",
      autoClose: 1500,
    });
  };


  const initialValues = {
    location: "",
  };

  const validationSchema = yup.object({
    location: yup.string().required(),
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
        <h2 className="text-center">SOS</h2>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          <Form>
            <Field
              className="form-control"
              type="text"
              placeholder="location"
              name="location"
            />
            <ErrorMessage name="location" component="div" className="text-danger"/> <br />
            
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