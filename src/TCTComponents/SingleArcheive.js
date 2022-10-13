import React from "react";
import { Card, CardHeader, CardFooter } from "reactstrap";

function SingleArcheive(props) {
  return (
    <>
      {props.data.helpSent === true ? (
        <>
          <Card>
            <CardHeader className="text-center">
              Location {props.data.id}
            </CardHeader>
            <CardFooter>
              <li> Location: {props.data.location}</li>
              <li> Contact: {props.data.contact}</li>
            </CardFooter>
          </Card>
          <br />
        </>
      ) : (
        ""
      )}
    </>
  );
}

export default SingleArcheive;
