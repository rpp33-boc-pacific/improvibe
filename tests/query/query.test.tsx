import { render, screen, act } from '@testing-library/react';
import React from 'react';
import NavigationBar from '../../components/NavigationBar';

const userProp = {
  userId: 1,
  liked: false, //liked by current user
}
const songProp = {
  songName: 'Song Name',
  artistName: 'Artist Name',
  songPath: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
  genre: 'Rock',
  tags: ['smooth', 'funky'],
  artistPic: "https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif",
  cumulativeLikes: 234
}

describe('Query Index Page', () => {
  it('Renders filter select', () => {
    render(<NavigationBar/>);
    const navigationBar = screen.getByRole('navigation-bar');
    expect(navigationBar).toBeInTheDocument();
  });

  // it('Renders filter select', () => {
  //   render(<Query/>);
  //   const filterSelect = screen.getByRole('filter-select');
  //   expect(filterSelect).toBeInTheDocument();
  // });

  // it('Renders filter select', () => {
  //   render(<Query/>);
  //   const sortSelect = screen.getByRole('sort-select');
  //   expect(sortSelect).toBeInTheDocument();
  // });

});