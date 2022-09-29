import { Formik, Form, Field, ErrorMessage } from "formik";
import React from "react";
import { useLocation } from "react-router-dom";
import { UncontrolledAccordion, Container, Button } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import * as yup from "yup";

import SingleViolation from "../TCTComponents/SingleViolation";

function IssueTicket() {
  const location = useLocation();
  const data = location.state;
  data["id"] = "";

  const handleSubmit = (values) => {
    console.log(values);
    data['FineAmount'] = values.FineAmount
    console.log(data)
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
    FineAmount: "",
  };

  const validationSchema = yup.object({
    FineAmount: yup.number().typeError('Please enter valid Amount in digits').required(),
  });

  return (
    <div>
      <br/>
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
        <h2 className="text-center"></h2>
        <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={validationSchema}>
          <Form>
            Rupees:<Field
              className="form-control"
              type="text"
              placeholder="Enter the Fine Amount"
              name="FineAmount"
            />
            <ErrorMessage name="FineAmount" component="div" className="text-danger"/> <br />
            
            <Button color="success"
              className="form-control"
              type="submit"
              onSubmit={handleSubmit}
            >
              Mark as Paid
            </Button>
          </Form>
        </Formik>
      </Container>
    </div>

      
    </div>
  );
}

export default IssueTicket;
