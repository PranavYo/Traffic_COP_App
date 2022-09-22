import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <ListGroup>
      <Link to="/location" className="list-group-item">
        Locations
      </Link>
      <Link to="/fine-collection" className="list-group-item">
        Fine Collected
      </Link>
      <Link to="/traffic-violations" className="list-group-item">
        Traffic Violations
      </Link>
    </ListGroup>
  );
}

export default Menu;
