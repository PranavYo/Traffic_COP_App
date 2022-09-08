import React from "react";
import { Form, Label, FormGroup, Input, Button } from "reactstrap";
import {ToastContainer, toast} from 'react-toastify'

function Login() {

  const notify = () =>{
    toast("Logged in succesfully");
  } 

  return (
    <div>
      <ToastContainer/>
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
    </div>
  );
}

export default Login;
