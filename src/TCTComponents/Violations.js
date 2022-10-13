import React, { useState } from "react";
import { Accordion } from "reactstrap";
import SingleViolation from "./SingleViolation";
import axios from "axios";
import { useEffect } from "react";
import base_url from "../base_url";

function Violations(props) {

  useEffect(() => {
    //document.title = 'Traffic Central Team Dashboard'
    getAllViolations()
  }, [])
  
  const getAllViolations=()=>
  {
    axios.get(`${base_url}/getviolations`).then(
      (response) => {
        setdata(response.data)
        console.log(response)
      },
      (error) => {
        console.log('data not loaded')
      }
    )
  }


  const [open, setOpen] = useState("0");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  
  const [data, setdata] = useState([]);

  return (
    <div>
      <br />
      <h2 className="text-center p-3 mb-2 bg-success text-white"  onClick={getAllViolations}>Violation data</h2>
      <br />
      <Accordion open={open} toggle={toggle}>
        {data.length > 0
          ? data.map((item) => <SingleViolation data={item} />)
          : "No data"}
      </Accordion>
    </div>
  );
}

export default Violations;
