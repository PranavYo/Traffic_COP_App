import React from "react";
import { Button, Card, CardFooter, CardHeader, Row, Col } from "reactstrap";

function SingleLocation(props) {
  function archieve() {
    console.log("move to archeive");
  }
  return (
    <>
      {props.data.helpSent === false ? (
        <>
          <Card>
            <CardHeader className="text-center">
              Location {props.data.id}
            </CardHeader>
            <CardFooter>
              <Row>
                <Col>
                  <li>Location: {props.data.location}</li>
                  <li>Contact: {props.data.contact}</li>
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
