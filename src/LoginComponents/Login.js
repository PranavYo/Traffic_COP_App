import React from "react";
import { Form, Label, FormGroup, Input, Button, Container } from "reactstrap";
import { ToastContainer, toast } from "react-toastify";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import Dashboard from "../InspectorComponents/Dashboard";

function Login() {
    const navigate = useNavigate();
  const notify = () => {
    toast("Logged in succesfully");
    navigate('dashboard')
  };

  return (
    
    <Container>
      <h1 className="text-center">Login</h1>
      <ToastContainer />
      <Form>
        <FormGroup>
          <Label for="username">Username</Label>
          <Input
            id="username"
            name="email"
            placeholder="Enter Username"
            type="text"
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="Enter password"
            type="password"
          />
        </FormGroup>
        <Button onClick={notify}>Login</Button>
      </Form>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
    </Container>
  );
}

export default Login;
