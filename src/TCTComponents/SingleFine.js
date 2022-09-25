import React from "react";
import { AccordionBody, AccordionHeader, AccordionItem } from "reactstrap";

function SingleFine(props) {
  return (
    <div>
      <AccordionItem>
        <AccordionHeader targetId={props.data.id}>
          {"Fine Collection Data " + props.data.id}
        </AccordionHeader>
        <AccordionBody accordionId={props.data.id}>
            <li>Violation ID: {props.data.ViolationType}</li>
            <li>Fine Amount: {props.data.FineAmount}</li>
            <li>Payment Status: {props.data.PaymentStatus}</li>
            
        </AccordionBody>
      </AccordionItem>
    </div>
  );
}

export default SingleFine;
