import React, { useState, useContext, useEffect } from "react";
import { useResource } from "react-request-hook";
import { Form, Modal, Button } from "react-bootstrap";
import StateContext from "../../store/Contexts";

function Register({ show, handleClose }) {
  const { dispatch } = useContext(StateContext);
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
  });

  const [status, setStatus] = useState("");
  const [registerFailed, setRegisterFailed] = useState(false);

  const handleUsername = (evt) => {
    setFormData({ ...formData, username: evt.target.value });
  };

  const handlePassword = (evt) => {
    setFormData({ ...formData, password: evt.target.value });
  };

  const handleConfirmPassword = (evt) => {
    setFormData({ ...formData, confirmPassword: evt.target.value });
  };

  const [user, register] = useResource(
    (username, password, confirmPassword) => ({
      url: "/rest/register/",
      method: "post",
      data: { username, password, passwordConfirmation: confirmPassword },
    })
  );

  useEffect(() => {
    if (user && user.data) {
      dispatch({
        type: "REGISTER",
        id: user.data.id,
        username: user.data.username,
        access_token: user.data.access_token,
      });
    }
  }, [user]);

  useEffect(() => {
    if (user && user.isLoading === false && (user.data || user.error)) {
      if (user.error) {
        setStatus("Registration failed, please try again later.");
        setRegisterFailed(true);
      } else {
        setRegisterFailed(false);
        handleClose();
      }
    }
  }, [user]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          register(
            formData.username,
            formData.password,
            formData.confirmPassword
          );
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Register</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form.Label htmlFor="register-username">Username:</Form.Label>
          <Form.Control
            type="text"
            value={formData.username}
            onChange={handleUsername}
            name="register-username"
            id="register-username"
          />
          <Form.Label htmlFor="register-password">Password:</Form.Label>
          <Form.Control
            type="password"
            name="register-password"
            id="register-password"
            value={formData.password}
            onChange={handlePassword}
          />
          <Form.Label htmlFor="register-password-repeat">
            Repeat password:
          </Form.Label>
          <Form.Control
            type="password"
            name="register-password-repeat"
            id="register-password-repeat"
            value={formData.passwordRepeat}
            onChange={handleConfirmPassword}
          />
          {registerFailed && (
            <Form.Text style={{ color: "red" }}>{status}</Form.Text>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            type="submit"
            disabled={
              formData.username.length === 0 ||
              formData.password.length === 0 ||
              formData.password !== formData.confirmPassword
            }
          >
            Register
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}

export default Register;
