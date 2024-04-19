import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

export default function SignupForm() {
  const nav = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function submit(e) {
    e.preventDefault();

    try {
      await axios.post("http://localhost:9000/signup", {
        email,
        password,
      });

      // Redirect to the "App" route after successful signup
      nav("/App");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <form onSubmit={submit}>
        <div className="user-pass">
          <div className="user">
            <div className="contain">
              <input
                type="email"
                name="email"
                placeholder="Enter your email address"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <br />
            <div className="contain">
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                name="password"
                type="password"
                placeholder="Enter your Password"
              />
            </div>
          </div>
        </div>
        <div className="sub">
          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
}
