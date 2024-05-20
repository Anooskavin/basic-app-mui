import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Logout from './Logout'; 
beforeEach(() => {
  jest.useFakeTimers(); 
  Object.defineProperty(window, "localStorage", {
    value: {
      clear: jest.fn(),
    },
    writable: true,
  });

  
});

afterEach(() => {
  jest.runOnlyPendingTimers();
  jest.useRealTimers(); 
});

it("calls localStorage.clear and redirects to home page", async () => {
  render(
    <MemoryRouter>
      <Logout />
    </MemoryRouter>
  );

  
  jest.advanceTimersByTime(1000);

  expect(window.localStorage.clear).toHaveBeenCalledTimes(1);

});
