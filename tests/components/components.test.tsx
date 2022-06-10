import { getByTestId, render, screen, fireEvent } from '@testing-library/react';
import AudioPlayer from '../../components/shared/AudioPlayer';
import LikeButton from '../../components/shared/LikeButton';
import AddToProjects from '../../components/shared/AddToProjects';
import axios from 'axios';


const userProp = {
  user: 1
}
const songProp = {
  song_name: 'Song Name',
  artist_name: 'Artist Name',
  song_path: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
  genre: 'rock',
  tags: ['smooth', 'funky'],
  in_projects: false,
  photo_url: "https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif",
  cumulative_likes: 234,
  liked: false, //liked by current user
}

describe('Audio Player', () => {
  it('Has an icon button', () => {
    render(<AudioPlayer  color={'white'} song={songProp} user={userProp.user}/>);
    const button = screen.getByRole('button');
    const icon = screen.getByTestId("PlayCircleIcon");
    expect(icon).toBeInTheDocument();
    expect(button).toBeInTheDocument();
  });
  it('Opens audio player modal when icon is clicked', async () => {
    render(<AudioPlayer color={'white'} song={songProp} user={userProp.user}/>);
    fireEvent.click(screen.getByRole('button', {
      name: /open-player-modal/i
    }));
    expect(screen.getByRole('audio-player')).toBeInTheDocument()
  });
  it('Closes audio player modal when icon is clicked', async () => {
    render(<AudioPlayer color={'white'} song={songProp} user={userProp.user}/>);
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
    render(<LikeButton color={'#757575'} song={songProp} user={userProp}/>);
    const likeButton = screen.getByRole('button', {
      name: /like-song/i,
    });
    expect(likeButton).toBeInTheDocument();
  });
  it('Renders "unlike song" button when "like song" button is clicked', () => {
    render(<LikeButton color={'#757575'} song={songProp} user={userProp}/>);
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
    render(<AddToProjects song={songProp} user={userProp}/>);
    const addButton = screen.getByRole('button', {
      name: /add-project/i,
    });
    expect(addButton).toBeInTheDocument();
  });
  it('Clicking "add to projects" removes button from UI', () => {
    render(<AddToProjects song={songProp} user={userProp}/>);
    fireEvent.click(screen.getByRole('button', {
      name: /add-project/i,
    }));
    const unlikeButton = screen.queryByRole('button', {
      name: /add-project/i,
    });
    expect(unlikeButton).not.toBeInTheDocument();
  });
});

