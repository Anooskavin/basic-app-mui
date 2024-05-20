import { fireEvent, render, screen } from "@testing-library/react";
import {
  RouterProvider,
  BrowserRouter as Router,
  Routes,
  Route,
  MemoryRouter,
} from "react-router-dom";
import React from "react";
import Launch from "./Launch";



describe("Launch Page", () => {

  it("renders Home page", async () => {
    render(
      <MemoryRouter>
        <Launch />
      </MemoryRouter>
    );
  });
});
