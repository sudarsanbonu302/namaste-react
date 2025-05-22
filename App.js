import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement(
    "div",
    { id: "child1", key: "child1" },
    [
      React.createElement("h1", { key: "h1" }, "welcome to parcel"),
      React.createElement("p", { key: "p1" }, "lets start your react graduaction")
    ]
  ),
  React.createElement(
    "div",
    { id: "child2", key: "child2" },
    [
      React.createElement("h2", { key: "h2" }, "celebration of react graduation"),
      React.createElement("p", { key: "p2" }, "namaste react")
    ]
  )
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
