import { render, screen, fireEvent } from '@testing-library/react';
import SignUp from '../../pages/signUp';
import LogIn from '../../pages/logIn';

describe('Sign up', () => {

  it('renders sign up form', () => {
    render(<SignUp />);

    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
});

describe('Log In', () => {

  // beforeEach(() => {
  //   jest.spyOn(console, 'error').mockImplementation(() => {});
  // });

  it('renders log in form', () => {
    render(<LogIn />);

    const email = screen.getByLabelText('Email');
    const password = screen.getByLabelText('Password');

    expect(email).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });

  // it.only('shows error when wrong credentials are provided', async () => {
  //   render(<LogIn />);
  //   const emailInput = screen.getByLabelText('Email');
  //   const passwordInput = screen.getByLabelText('Password');

  //   fireEvent.change(emailInput, { target: { value: 'test@justATest.com' }});
  //   fireEvent.change(passwordInput, { target: { value: 'justATest333' }});

  //   expect(emailInput.value).toBe('test@justATest.com');
  //   expect(passwordInput.value).toBe('justATest333');

  //   const button = screen.getByRole('button');
  //   fireEvent.click(button);

  //   expect(await screen.findByText('Email or password invalid, please try again.')).toBeInTheDocument();
  // });

});
