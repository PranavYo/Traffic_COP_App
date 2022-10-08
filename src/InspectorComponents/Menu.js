import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import {useAuth} from '../LoginComponents/AuthProvider'


function Menu() {
  let auth = useAuth()
  
  return (
    <>
      <ListGroup>
        <Link to="/inspector" className="list-group-item">
          Home
        </Link>
        <Link to="/inspector/register-violation" className="list-group-item">
          Register a Violation
        </Link>
        {/* <Link to="/inspector/issue-ticket" className="list-group-item">
          Issue a Ticket
        </Link> */}
        <Link to="/inspector/sos" className="list-group-item">
          SOS
        </Link>
        <Link to="/inspector/medical-help" className="list-group-item">
          Register a Medical Emergency
        </Link>
        <ListGroupItem tag="button" onClick={auth.logout} className="list-group-item">
          Logout
        </ListGroupItem>
      </ListGroup>
    </>
  );
}

export default Menu;
