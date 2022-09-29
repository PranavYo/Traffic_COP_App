import React from "react";
import { Card, CardHeader, CardFooter } from "reactstrap";

function SingleArcheive(props) {
  return (
    <>
      {props.data.Help === false ? (
        <>
          <Card>
            <CardHeader className="text-center">
              Location {props.data.id}
            </CardHeader>
            <CardFooter>
              <li> Location: {props.data.Location}</li>
              <li> Contact: {props.data.Contact}</li>
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
