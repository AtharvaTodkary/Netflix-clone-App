import React from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";

export default function LoginHead() {
  return (
    <>
      <div className="logo">
        <img src="images/netflix.png" alt="" />
        <nav style={{fontSize:"20px", height:"10vh"}}>
          <Link to="/">Login</Link>
          <Link to="/signup">SignUp</Link>
        </nav>
      </div>
      <div className="login-card">
        <h1>Login In</h1>
        <LoginForm />
        <div className="options">
          <div className="notif">
            <input type="checkbox" id="rem" />
            <label for="rem">Remember me</label>
          </div>
          <div className="help">
            <a href="#">Need Help?</a>
          </div>
        </div>
        <div className="more">
          <p id="new">
            New to Netflix?
            <a href="">
              <span style={{color:"white"}}>Sign up now</span>
            </a>
            .
          </p>
          <p id="captcha">
            Sign in is protected by Google reCAPTCHA to ensure youre not a bot.
          </p>
        </div>
      </div>
    </>
  );
}
