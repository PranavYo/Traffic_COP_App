import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { useLocation } from "react-router-dom";
import { UncontrolledAccordion, Container, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import * as yup from "yup";

import axios from "axios";
import base_url from "../base_url";
import SingleViolation from "../TCTComponents/SingleViolation";
import { useState, useEffect } from "react";

function IssueTicket() {
  const location = useLocation();
  const data = location.state

  useEffect(() => {
    //document.title = 'Traffic Central Team Dashboard'
    getidd()
  }, [])

  const getidd=()=>{
  axios.get(`${base_url}/getviolationid`).then((response) => {setidd(response.data + 1)})
  }

  const [idd, setidd] = useState()
  data['id'] = idd

  const handleSubmit = (values, onSubmitProps) => {
    data["fineAmount"] = values.amount;
    data["paid"] = true;

    axios.post(`${base_url}/addviolation`, data).then(
      (response) =>{
        console.log(response.data)
        console.log(data)
      },

      (error) => {
        console.log(error)
      }
    )
    
    onSubmitProps.resetForm();


    toast.success("Fine Paid", {
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
    amount: "",
  };

  const validationSchema = yup.object({
    amount: yup
      .number()
      .typeError("Please enter valid Amount in digits")
      .required(),
  });

  return (
    <>
      <h2 className="text-center">Fine Collection</h2>
      { JSON.stringify(data, null, 2) }
      <UncontrolledAccordion defaultOpen={data.id}>
        <SingleViolation data={data} />
      </UncontrolledAccordion>

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
          
          <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
          >
            <Form>
              Rupees:
              <Field
                className="form-control"
                type="text"
                placeholder="Enter the Fine Amount"
                name="amount"
              />
              <ErrorMessage
                name="amount"
                component="div"
                className="text-danger"
              />{" "}
              <br />
              <Button
                color="success"
                className="form-control"
                type="submit"
                onSubmit={handleSubmit}
              >
                Mark as Paid
              </Button>
            </Form>
          </Formik>
          <img alt="QR" width="200" height="300" src="http://upiqr.in/api/qr/?name=Ajit&vpa=7989788904@paytm"/>
          
        </Container>
      </div>
    </>
  );
}

export default IssueTicket;
