import { fireEvent, render, screen } from "@testing-library/react";
import {
  RouterProvider,
  BrowserRouter as Router,
  Routes,
  Route,
  MemoryRouter,
} from "react-router-dom";
import Home from "./Home";
import React from "react";
import router from "../components/Route";
import userEvent from "@testing-library/user-event";

// test('renders Home page', () => {
//   render(<Home />);
//   const mockId = "1";
//     const mockJson = { data: "json data" };
//     localStorage(mockId, mockJson);
//   const linkElement = screen.getByText("Login");
//   expect(linkElement).toBeInTheDocument();
// });

describe("Home Page", () => {
  beforeEach(() => {
    Object.defineProperty(window, "localStorage", {
      value: {
        getItem: jest.fn(() => null),
        setItem: jest.fn(() => null),
      },
      writable: true,
    });
  });

  it("renders Home page", async () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );

    const button = await screen.findByRole("button", { name: "Click Here" });
    userEvent.click(button);

    expect(window.localStorage.getItem).toHaveBeenCalledTimes(2);



  });
});
