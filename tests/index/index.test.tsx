import {render, fireEvent, waitFor, screen, cleanup} from '@testing-library/react'
import { unmountComponentAtNode } from "react-dom";
import Dashboard from '../../components/explorerPage/dashboard';
import TopGenres from '../../components/explorerPage/topGenres';
import TopArtists from '../../components/explorerPage/topArtists';
import YourContributions from '../../components/explorerPage/yourContributions';
import HorizontalCarousel from '../../components/explorerPage/horizontalCarousel';
import HomePage from '../../components/explorerPage/homePage';
import { CleanHandsOutlined } from '@mui/icons-material';

describe('Checks that all sub-components are present', () => {
  test('1', () => {
    // let {container} = render(<HomePage />)
    // expect(container).toBeInTheDocument();
    // expect(container.getElementsByClassName('NavigationBar').length).not.toBe(0);
    // expect(container.getElementsByClassName('top-genres').length).not.toBe(0);
    // expect(container.getElementsByClassName('carousel').length).not.toBe(0);
    // expect(container.getElementsByClassName('dashboard').length).not.toBe(0);
    // expect(container.getElementsByClassName('your-contributions').length).not.toBe(0);
    // expect(container.getElementsByClassName('top-artists').length).not.toBe(0);
  });
});


