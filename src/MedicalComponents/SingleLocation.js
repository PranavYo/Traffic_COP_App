import React from "react";
import { Button, Card, CardFooter, CardHeader, Row, Col } from "reactstrap";

function SingleLocation(props) {
  function archieve() {
    console.log("move to archeive");
  }
  return (
    <>
      {props.data.Help === true ? (
        <>
          <Card>
            <CardHeader className="text-center">
              Location {props.data.id}
            </CardHeader>
            <CardFooter>
              <Row>
                <Col>
                  <li>Location: {props.data.Location}</li>
                  <li>Contact: {props.data.Contact}</li>
                </Col>
                <Col>
                  <Button className="center" onClick={archieve}>
                    Send Help
                  </Button>
                </Col>
              </Row>
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

export default SingleLocation;
