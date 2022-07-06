import React, { useState, useEffect } from "react";
import CustomInput from "./CustomInput";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import { authenticateUser } from "../Actions/AuthAction";
import { Navigate } from "react-router-dom";

export default function Login() {
  const dispatch = useDispatch();
  const [state, setState] = useState({
    email: "",
    password: "",
  });

  const { reducerData } = useSelector((state) => state.isLoggedIn);
  const token = localStorage.getItem("token");

  useEffect(() => {
    <Navigate to="/dashboard" replace={true} />;
  }, [reducerData]);

  function handleChange(e) {
    setState({ ...state, [e.currentTarget.id]: e.currentTarget.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(authenticateUser(state));
  }

  if (token) {
    return <Navigate to="/dashboard" replace={true} />;
  }
  return (
    <form className="form" onSubmit={handleSubmit}>
      <CustomInput
        labelText="Email"
        id="username"
        formControlProps={{
          fullWidth: true,
        }}
        handleChange={handleChange}
        type="text"
      />
      <CustomInput
        labelText="Password"
        id="password"
        formControlProps={{
          fullWidth: true,
        }}
        handleChange={handleChange}
        type="password"
      />

      <Button type="submit" color="primary" className="form__custom-button">
        Log in
      </Button>
    </form>
  );
}
