import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function LogIn() {
  let takeHome = useNavigate();
  return (
    <div className="formDiv">
      <h1
        style={{
          textAlign: "left",
          padding: "0px 10px 10px 10px",
          fontSize: "4vw",
          fontFamily: "fantasy",
          width: "40%",
        }}
      >
        PETFLIX
      </h1>

      <div className="loginDiv">
        <form
          className="logInForm"
          onSubmit={(e) => {
            e.preventDefault();
            takeHome("/animals");
          }}
        >
          <label htmlFor="username">USERNAME:</label>
          <br />
          <input required type="text" name="username" />
          <br />

          <label htmlFor="password">PASSWORD:</label>
          <br />
          <input required type="password" name="password" />
          <br />

          <input type="checkbox" name="remember" />
          <label htmlFor="rememberLogIn">REMEMBER ME</label>
          <br />

          <input type="submit" id="submitBtn" value="LOG IN" />
          <br />

          <label>
            <p>
              Not a member? <Link to="/register">Register</Link>
            </p>
          </label>
        </form>
      </div>
    </div>
  );
}

export default LogIn;
