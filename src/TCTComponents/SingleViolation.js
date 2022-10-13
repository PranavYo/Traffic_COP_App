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
            <li><b>Violators Name: </b> {props.data.violatorsName}</li>
            <li><b>Violation Type: </b> {props.data.violationType}</li>
            <li><b>Driving License: </b> {props.data.drivingLicence}</li>
            <li><b>Vehicle Details: </b> {props.data.vehicleDetails}</li>
            <li><b>Date and Time: </b> {props.data.date + ' ' + props.data.time}</li>
            <li><b>Location: </b> {props.data.location}</li>
            <li><b>Other: </b> {props.data.other}</li>
        </AccordionBody>
      </AccordionItem>
    </div>
  );
}

export default SingleViolation;
