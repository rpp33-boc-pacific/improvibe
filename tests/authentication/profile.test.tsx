import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import Profile from '../../pages/profile';
import ProfileEditor from '../../pages/profile-editor';

describe('Profile page', () => {

  it('Renders an image', () => {

    const { container } = render(<Profile />);
    const picture = screen.getByTestId('picture');
    expect(container).toContainElement(picture);
  });
});

describe('Profile edit page', () => {

  it.only('Renders an image', () => {

    const { container } = render(<ProfileEditor />);
    const uploadLink = screen.getByText('Upload image');
    expect(uploadLink).toBeInTheDocument();
  });
});
