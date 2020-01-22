import React from "react";
import ReactDOM from "react-dom";
import IconsPage from "./IconsPage";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<IconsPage />, div);
});

test("services h1 shows on page load", () => {
  const { getByText } = render(<IconsPage />);
  const linkElement = getByText(/Choose a service/i);
  expect(linkElement).toBeInTheDocument();
});

test("service button triggers the map", () => {
  const { getByText } = render(<IconsPage />);
  const buttonNode = getByText(/shower/i);
  fireEvent.click(buttonNode);
  getByText(/Back to services/i);
});
