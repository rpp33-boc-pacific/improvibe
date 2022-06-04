import { render, screen } from '@testing-library/react';
import Profile from '../../pages/profile';

describe('Profile page', () => {

  it('Renders an image', () => {

    const { container } = render(<Profile />);
    const heading = screen.getByRole('heading', {
      name: /Welcome to improvibe!/i,
    });
  });
});