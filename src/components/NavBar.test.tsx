import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import {
  RouterProvider,
  BrowserRouter as Router,
  Routes,
  Route,
  MemoryRouter,
} from "react-router-dom";
import React from "react";
import NavBar from "./NavBar";
import userEvent from "@testing-library/user-event";
import { useThemeContext } from "../theme/ThemeContextProvider";

jest.mock('../theme/ThemeContextProvider', () => ({
    useThemeContext: () => ({
      mode: 'dark', 
      toggleColorMode: jest.fn(),
      theme: {}
    }),
  }));


describe("NavBar Component", () => {
    beforeEach(() => {
        jest.resetModules(); 
      });

it("Toggle Dark Functionality", async () => {

    

    jest.mock('../theme/ThemeContextProvider', () => ({
        useThemeContext: () => ({
          mode: 'dark', 
          toggleColorMode: jest.fn(),
          theme: {}
        }),
      }));
  
    

    render(
    <MemoryRouter>
        <NavBar  />
    </MemoryRouter>
    );
    

    expect(screen.getByTestId('theme-dark-icon')).toBeInTheDocument()

    fireEvent.mouseEnter(screen.getByTestId('theme-dark-icon'));
    

    expect(screen.getByTestId('theme-hover-dark-icon')).toBeInTheDocument()
 
    

})





  it("Hover Functionality", async () => {
    render(
      <MemoryRouter>
        <NavBar  />
      </MemoryRouter>
    );
    fireEvent.mouseEnter(screen.getByTestId('icon-hover-Home'));
    
    await waitFor(() => screen.getByTestId('icon-hover-Home'))

    expect(screen.getByTestId('icon-hover-Home')).toHaveStyle("color: rgb(255, 255, 255)");

    fireEvent.mouseLeave(screen.getByTestId('icon-hover-Home'));


    fireEvent.mouseEnter(screen.getByTestId('search-icon'));
    
    await waitFor(() => console.log(screen.getByTestId('search-icon')))

    expect(await waitFor(() => screen.getByTestId('search-icon'))).toHaveStyle("opacity: 1");

    fireEvent.mouseLeave(screen.getByTestId('search-icon'));


    fireEvent.mouseEnter(screen.getByTestId('theme-avatar'));
    
    await waitFor(() => screen.getByTestId('theme-avatar'))

    expect(screen.getByTestId('theme-avatar')).toHaveStyle("color: rgb(255, 255, 255)");

    fireEvent.mouseLeave(screen.getByTestId('theme-avatar'));




    


  });
});
