import React, { useState } from "react";
import { Accordion } from "reactstrap";
import SingleViolation from "./SingleViolation";

function Violations(props) {
  const [open, setOpen] = useState("0");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };

  const [data, setdata] = useState([
    {
      id: "1",
      Date: "2022-09-04",
      DrivingLicence: "1939e9e4",
      Location: "hyderabad",
      Other: "nil",
      Time: "19:46",
      VehicleDetails: "blue bike",
      ViolationType: "no helment",
      ViolatorsName: "anand",
    },
    {
      id: "2",
      Date: "2021-10-14",
      DrivingLicence: "7584686",
      Location: "kphb",
      Other: "nothing",
      Time: "9:40",
      VehicleDetails: "red lorry",
      ViolationType: "no driving licence",
      ViolatorsName: "hemanth",
    },
  ]);

  return (
    <div>
      <br />
      <h2 className="text-center">Violation data</h2>
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
