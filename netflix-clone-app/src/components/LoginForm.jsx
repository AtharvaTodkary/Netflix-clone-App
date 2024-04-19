import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const nav = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function submit(e) {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:9000/login", {
        email,
        password,
      });

      if (response.data === "exist") {
        nav("/App");
        console.log(response.data);
      } else if (response.data === "notexist") {
        setError("Invalid email or password");
        console.log(response.data);
      } else if (response.data === "incorrectpassword") {
        setError("Incorrect password");
        console.log(response.data);
      } else {
        setError("An error occurred. Please try again later.");
        console.log(response.data);
      }
    } catch (error) {
      setError("An error occurred. Please try again later.");
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
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="email"
                placeholder="Enter your Email Id"
              />
            </div>
            <br />
            <div className="contain">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                name="password"
                type="password"
                placeholder="Password"
              />
            </div>
          </div>
        </div>
        <div className="sub">
          <button type="submit">Submit</button>
        </div>
      </form>
      {error && <p>{error}</p>}
    </>
  );
}
