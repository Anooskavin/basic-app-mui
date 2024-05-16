import { render, screen } from '@testing-library/react';

import { MemoryRouter } from 'react-router';


import Home from './pages/Login';

jest.mock('./pages/Login');


test('renders learn react link', () => {


  Home.mockImplementation(() => <div>Home</div>); 
  render(
    <MemoryRouter>
      <Home/>
    </MemoryRouter>
  );
  expect(screen.getByText("Home")).toBeInTheDocument();
  
});



