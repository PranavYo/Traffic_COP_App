import React from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

function SingleFine(props) {
  return (
    <div>
      <AccordionItem>
        <AccordionHeader targetId={props.data.id}>
          {"Violation ID " + props.data.id}
        </AccordionHeader>
        <AccordionBody accordionId={props.data.id}>
            <li>Violation Type: {props.data.violationType}</li>
            <li>Fine Amount: {props.data.fineAmount}</li>
            <li>Payment Status: {(props.data.paid)? "paid": "not paid"}</li>
            
        </AccordionBody>
      </AccordionItem>
    </div>
  );
}

export default SingleFine;
