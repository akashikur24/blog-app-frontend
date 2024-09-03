import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { SyncLoader } from "react-spinners";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isload, setIsload] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsload(true);
    if (!username || !password) {
      alert("enter all the details");
      setIsload(false);
      return;
    }
    const userObj = {
      username,
      password,
    };
    axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, userObj)
      .then((res) => {
        if (res.data.status === 200) {
          localStorage.setItem("token", res.data.data);
          setIsload(false);
          window.location.href = "/homepage";
        }
      })
      .catch((error) => {
        setIsload(false);
        alert(error.response.data.message);
      });
  }

  return (
    <div style={{ margin: "50px" }}>
      <h1 style={{ marginBottom: "20px" }}>Login</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="username">
          <Form.Label>username</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Username"
            onChange={(e) => setUsername(e.target.value)}
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
          {" "}
          {isload ? <SyncLoader size={6} color="#fffafa" /> : "Login"}
        </Button>
      </Form>
    </div>
  );
}

export default Login;
