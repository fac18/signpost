import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
});

test("landing page loads app title", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Signpost/i);
  expect(linkElement).toBeInTheDocument();
});

test("landing button triggers icons page", () => {
  const { getByText } = render(<App />);
  const buttonNode = getByText("Get started");
  fireEvent.click(buttonNode);
  getByText(/Choose a service/i);
});
