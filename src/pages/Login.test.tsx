import { fireEvent, render, screen } from '@testing-library/react';

import Login from './Login';
import userEvent from '@testing-library/user-event';
import React from 'react';

test('renders login page', () => {
  render(<Login />);
  const linkElement = screen.getByText("Login");
  expect(linkElement).toBeInTheDocument();
});

test('renders login page input', async () => {

    const headers = new Headers();
    headers.set('Content-Type', 'application/json');

    jest.spyOn(global, 'fetch').mockResolvedValue({
        ok: true ,
        json: () => Promise.resolve({ status: 200 }),
        } as Response);

    

    const {getByTestId }  = render(<Login />);
    const input1 : any = getByTestId("username").querySelector('input') || ''
    fireEvent.change(input1, { target: { value: 'anoosk' } })
    expect(input1).toHaveDisplayValue("anoosk")
    
    const input2 : any = getByTestId("password").querySelector('input') || ''
    fireEvent.change(input2, { target: { value: 'anoosk' } })
    expect(input2).toHaveDisplayValue("anoosk")

    const button = await screen.findByRole("button", { name: "Login" });
    userEvent.click(button);

    expect(global.fetch).toHaveBeenCalledWith('http://127.0.0.1:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'anoosk', password: 'anoosk' }),

    

  });

  // const loginfailed = await screen.findByText('Login Failed')
  // expect(loginfailed).toBeInTheDocument()
  });

  test('renders login page input', async () => {

    jest.spyOn(global, 'fetch').mockResolvedValue({
        ok: true ,
        json: () => Promise.resolve({ status: 401 }),
        } as Response);

    const {getByTestId }  = render(<Login />);
    const input1: any = getByTestId("username").querySelector('input') ||  ''
    fireEvent.change(input1, { target: { value: 'anoosk' } })
    expect(input1).toHaveDisplayValue("anoosk")
    
    const input2: any = getByTestId("password").querySelector('input') || ''
    fireEvent.change(input2, { target: { value: 'anoosk' } })
    expect(input2).toHaveDisplayValue("anoosk")

    const button = await screen.findByRole("button", { name: "Login" });
    userEvent.click(button);

    expect(global.fetch).toHaveBeenCalledWith('http://127.0.0.1:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'anoosk', password: 'anoosk' }),

    

  });

  const loginfailed = await screen.findByText('Login Failed')
  expect(loginfailed).toBeInTheDocument()
  });

  test('renders login page input', async () => {

    jest.spyOn(global, 'fetch').mockResolvedValue({
        ok: false ,
        json: () => Promise.resolve({ status: '' }),
        } as Response);

    const {getByTestId }  = render(<Login />);
    const input1: any = getByTestId("username").querySelector('input') ||  ''
    fireEvent.change(input1, { target: { value: 'anoosk' } })
    expect(input1).toHaveDisplayValue("anoosk")
    
    const input2: any = getByTestId("password").querySelector('input') || ''
    fireEvent.change(input2, { target: { value: 'anoosk' } })
    expect(input2).toHaveDisplayValue("anoosk")

    const button = await screen.findByRole("button", { name: "Login" });
    userEvent.click(button);

    const err = expect(global.fetch).toHaveBeenCalledWith('http://127.0.0.1:3001/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ username: 'anoosk', password: 'anoosk' }),

    

  });
  const loginfailed = await screen.findByText('Network Error')
  expect(loginfailed).toBeInTheDocument()
  });