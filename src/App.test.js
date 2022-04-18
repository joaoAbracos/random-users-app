import ReactDOM from "react-dom";
import UserList from "./components/UserList";
import User from "./components/User";
import React from "react";

it("render  User without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<User />, div);
});

it("render Userlist without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<UserList />, div);
});

