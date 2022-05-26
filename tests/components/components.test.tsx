import { fireEvent, render, screen } from '@testing-library/react';
import LikeButton from '../../components/reusable/LikeButton';


describe('Like Button', () => {
  it('Renders "like song" button', () => {
    render(<LikeButton />);

    const likeButton = screen.getByRole('button', {
      name: /like-song/i,
    });
    expect(likeButton).toBeInTheDocument();
  })
  it('Renders "unlike song" button when "like song" button is clicked', () => {
    render(<LikeButton></LikeButton>);

    fireEvent.click(screen.getByRole('button', {
      name: /like-song/i,
    }))

    const unlikeButton = screen.getByRole('button', {
      name: /unlike-song/i,
    });
    expect(unlikeButton).toBeInTheDocument();
  })
})
