import { render, screen } from '@testing-library/react';
import Profile from '../../pages/profile';

describe.only('Profile page', () => {

  it.only('Renders an image', () => {

    const { container } = render(<Profile />);
    const picture = screen.getByTestId('picture');
    expect(container).toContainElement(picture);
  });
});