const heading = React.createElement(
  "div",
  { id: "heading" },
  React.createElement("div", { id: "heading" }, [
    React.createElement("h1", { id: "heading1" }, "Hello React"),
    React.createElement("h2", { id: "heading2" }, "Hello React"),
  ])
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
