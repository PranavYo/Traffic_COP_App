import React, { useState } from "react";
import { Accordion } from "reactstrap";

import axios from "axios";
import { useEffect } from "react";
import base_url from "../base_url";

import SingleFine from "./SingleFine";

function FineCollected(props) {
  const [open, setOpen] = useState("0");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  useEffect(() => {
    //document.title = 'Traffic Central Team Dashboard'
    getAllViolations();
  }, []);

  const getAllViolations = () => {
    axios.get(`${base_url}/getviolations`).then(
      (response) => {
        setdata(response.data);
        console.log(response);
      },
      (error) => {
        console.log("data not loaded");
      }
    );
  };

  const [data, setdata] = useState([]);

  return (
    <div>
      <br />
      <h2 className="text-center p-3 mb-2 bg-success text-white"  onClick={getAllViolations}>Fine Collection Data</h2>
      <br />
      <Accordion open={open} toggle={toggle}>
        <Accordion open={open} toggle={toggle}>
          {data.length > 0
            ? data.map((item) => <SingleFine data={item} />)
            : "No data"}
        </Accordion>
      </Accordion>
    </div>
  );
}

export default FineCollected;
