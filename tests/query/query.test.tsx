import { render, screen } from '@testing-library/react';
// import FilterSelect from '../../components/queryPage/FilterSelect';
// import { useState } from 'react';
// import SortSelect from '../../components/queryPage/SortSelect';
// import SongResult from '../../components/queryPage/SongResult';
// import NavigationBar from '../../components/NavigationBar';
import Query from '../../pages/query/index';

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

describe('Components', () => {
  // it('Renders filter select', () => {
  //   const [filterParams, setFilterParams] = useState<string[]>([]);
  //   render(<FilterSelect filterParams={filterParams} setFilterParams={setFilterParams}/>);
  //   const list = screen.getByRole('filter-select');
  //   expect(list).toBeInTheDocument();
  // });

  // it('Renders sort select', async () => {
  //   render(<SortSelect />);
  //   const list = screen.getByRole('sort-select');
  //   expect(list).toBeInTheDocument();
  // });

  // it('Renders search result', async () => {
  //   render(<SongResult song={songProp} user={userProp} />);
  //   const list = screen.getByRole('search-result');
  //   expect(list).toBeInTheDocument();
  // });

  // it('Renders multiple layers', async () => {
  //   render(<NavigationBar/>);
  //   const list = screen.getByRole('navigation-bar');
  //   expect(list).toBeInTheDocument();
  // });
});

describe('Query Index Page', () => {
  it('Renders filter select', () => {
    render(<Query/>);
    const filterSelect = screen.getByRole('filter-select');
    expect(filterSelect).toBeInTheDocument();
  });
});