import { getByTestId, render, screen, fireEvent } from '@testing-library/react';
import Player from '../../pages/components/player';

describe('Audio Player', () => {
  it('Has an icon button', () => {
    render(<Player />);
    const button = screen.getByRole('button');
    const icon = screen.getByTestId("PlayCircleIcon");
    expect(icon).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });

  it('Opens audio player modal when icon is clicked', async () => {
    render(<Player />);
    fireEvent.click(screen.getByRole('button', {
      name: /play-modal/i
    }));
    expect(screen.getByRole('audio-player')).toBeInTheDocument()
  });

  it('Closes audio player modal when icon is clicked', async () => {
    render(<Player />);
    fireEvent.click(screen.getByRole('button', {
      name: /play-modal/i
    }));
    fireEvent.click(screen.getByRole('button', {
      name: /close-modal/i
    }));
    const audioPlayer = screen.queryByRole('audio-player');
    expect(audioPlayer).toBeNull();
  });
});