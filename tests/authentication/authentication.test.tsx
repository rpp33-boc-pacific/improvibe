import { render, screen } from '@testing-library/react';
import SignUp from '../../pages/signUp';
import SignIn from '../../pages/signIn';

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

describe('Sign in', () => {

  it('renders sign in form', () => {
    render(<SignIn />);

    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');
    const button = screen.getByRole('button');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

});
