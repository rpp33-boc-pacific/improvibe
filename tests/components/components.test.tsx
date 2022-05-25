import { getByTestId, render, screen, fireEvent } from '@testing-library/react';
import Player from '../../components/reusable/AudioPlayer';


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
      name: /open-player-modal/i
    }));
    expect(screen.getByRole('audio-player')).toBeInTheDocument()
  });

  it('Closes audio player modal when icon is clicked', async () => {
    render(<Player />);
    fireEvent.click(screen.getByRole('button', {
      name: /open-player-modal/i
    }));
    fireEvent.click(screen.getByRole('button', {
      name: /close-player-modal/i
    }));
    const audioPlayer = screen.queryByRole('audio-player');
    expect(audioPlayer).toBeNull();
  });
});