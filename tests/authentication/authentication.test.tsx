import { render, screen } from '@testing-library/react';
import SignUp from '../../pages/signUp';
import LogIn from '../../pages/logIn';

describe('Sign up', () => {

  it('renders sign up form', () => {
    render(<SignUp />);

    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    const button = screen.getByRole('button');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

});

describe('Log in', () => {

  it('renders login form', () => {
    render(<LogIn />);

    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    const button = screen.getByRole('button');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

});