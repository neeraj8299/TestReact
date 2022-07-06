import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export function authenticateUser(data) {
  return (dispatch) => {
    fetch("https://api23.searcheducation.com:4123/practice/contact/login", {
      method: "POST",
      body: JSON.stringify({
        UserName: data.username,
        Password: data.password,
      }),
    })
      .then(async (res) => {
        if (!res.ok) {
          throw new Error("HTTP status " + response.status);
        }
        const data = await res.json();
        return data;
      })
      .then((res) => {
        localStorage.setItem("token", true);
        dispatch({
          type: "login",
          payload: true,
        });
      });
  };
}
