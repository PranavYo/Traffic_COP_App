import React from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

function SingleViolation(props) {
  return (
    
    <div>
      <AccordionItem>
        <AccordionHeader targetId={props.data.id}>
          {"Violation Data " + props.data.id}
        </AccordionHeader>
        <AccordionBody accordionId={props.data.id}>
            <li><b>Violation ID: </b> {props.data.id}</li>
            <li><b>Violators Name: </b> {props.data.ViolatorsName}</li>
            <li><b>Violation Type: </b> {props.data.ViolationType}</li>
            <li><b>Driving License: </b> {props.data.DrivingLicence}</li>
            <li><b>Vehicle Details: </b> {props.data.VehicleDetails}</li>
            <li><b>Date and Time: </b> {props.data.Date + ' ' + props.data.Time}</li>
            <li><b>Location: </b> {props.data.Location}</li>
            <li><b>Other: </b> {props.data.Other}</li>
        </AccordionBody>
      </AccordionItem>
    </div>
  );
}

export default SingleViolation;
