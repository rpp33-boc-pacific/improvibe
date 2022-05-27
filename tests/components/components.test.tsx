import { getByTestId, render, screen, fireEvent } from '@testing-library/react';
import Player from '../../components/shared/AudioPlayer';
import LikeButton from '../../components/shared/LikeButton';
import AddToProjects from '../../components/shared/AddToProjects';

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

describe('Like Button', () => {
  it('Renders "like song" button', () => {
    render(<LikeButton />);
    const likeButton = screen.getByRole('button', {
      name: /like-song/i,
    });
    expect(likeButton).toBeInTheDocument();
  });
  it('Renders "unlike song" button when "like song" button is clicked', () => {
    render(<LikeButton></LikeButton>);
    fireEvent.click(screen.getByRole('button', {
      name: /like-song/i,
    }));
    const unlikeButton = screen.getByRole('button', {
      name: /unlike-song/i,
    });
    expect(unlikeButton).toBeInTheDocument();
  });
});

describe('Add To Projects', () => {
  it('Renders "add to projects" button', () => {
    render(<AddToProjects />);
    const addButton = screen.getByRole('button', {
      name: /add-project/i,
    });
    expect(addButton).toBeInTheDocument();
  });
  it('Clicking "add to projects" removes button from UI', () => {
    render(<AddToProjects />);
    fireEvent.click(screen.getByRole('button', {
      name: /add-project/i,
    }));
    const unlikeButton = screen.queryByRole('button', {
      name: /add-project/i,
    });
    expect(unlikeButton).not.toBeInTheDocument();
  });
});

