import React from "react";
import { ListGroup } from "reactstrap";

import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <ListGroup>
        <Link to="/" className="list-group-item">
          Home
        </Link>
        <Link to="/register-violation" className="list-group-item">
          Register a Violation
        </Link>
        <Link to="/issue-ticket" className="list-group-item">
          Issue a Ticket
        </Link>
        <Link to="/sos" className="list-group-item">
          SOS
        </Link>
        <Link to="/medical-help" className="list-group-item">
          Register a Medical Emergency
        </Link>
      </ListGroup>
    </>
  );
}

export default Menu;
