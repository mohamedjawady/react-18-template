import React from "react";
import { createRoot } from "react-dom/client";

const SampleComponent = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.text),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, "Hello, World!"),
    React.createElement(SampleComponent, {
      text: "Mohamed"
    }),
  ]);
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
