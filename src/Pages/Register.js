import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { SyncLoader } from "react-spinners";

function Register() {
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isload, setIsload] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsload(true);
    if (!username || !name || !password || !email) {
      alert("enter all the details");
      setIsload(false);
      return;
    }

    const userObj = {
      username,
      name,
      email,
      password,
    };
    console.log(process.env.REACT_APP_BACKEND_URL);
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/register`, userObj)
      .then((res) => {
        console.log(res);
        if (res.data.status === 201) {
          setIsload(false);
          window.location.href = "/login";
        }
      })
      .catch((error) => {
        setIsload(false);
        alert(error.response.data.message);
      });
  }

  return (
    <div style={{ margin: "50px" }}>
      <h1 style={{ marginBottom: "20px" }}>Register</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name"
            onChange={(e) => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="password">
          <Form.Label>password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button type="submit">
          {isload ? <SyncLoader size={6} color="#fffafa" /> : "Register"}
        </Button>
      </Form>
    </div>
  );
}

export default Register;
