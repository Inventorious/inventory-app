import React, { useState } from "react";
import apiURL from "../api";

export const LoginPage = ({setIsLoggedIn}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [user, setUser] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      if ("" === username) {
        setUsernameError("Please enter your username");
        return;
      }
      if ("" === password) {
        setUsernameError("Please enter your password");
        return;
      }
      const res = await fetch(`${apiURL}/users/${username}`);
      const currentUser = await res.json();
      //currentUser will be null if there is no user with that username
      if (currentUser) {
        //if password is correct (need to make this private in Model and use a getter)
        if (currentUser.password == password) {
          setUser(currentUser); //use this user when building cart functionality
          setUsername("");
          setPassword("");
          setPasswordError("");
          setUsernameError("");
          setIsLoggedIn(true); //use this for conditional rendering
          console.log(`${user.username} logged in`);
        } else {
          setPasswordError("Incorrect Password");
        }
      } else {
        setUsernameError("Invalid username");
      }
    } catch (error) {
      console.log("error");
    }
  }

  return (
    <>
      <div className="login-main">
        <h2>Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputContainer">
            <input
              className="input"
              value={username}
              placeholder="Enter username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            ></input>
            <p className="errorLabel">{usernameError}</p>
          </div>

          <div className="inputContainer">
            <input
              className="input"
              value={password}
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              type="password"
            ></input>
            <p className="errorLabel">{passwordError}</p>
          </div>

          <div className="inputContainer">
            <button className="inputButton" type="submit">
              Log In
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
