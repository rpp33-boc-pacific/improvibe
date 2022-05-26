import Dashboard from './dashboard';
import VerticalCarousel from './verticalCarousel';
import PopularGenres from './popularGenres';
import TopArtists from './topArtists';
import YourContributions from './yourContributions';

const HomePage = () => {

  return (
    <div>
      <PopularGenres/>
      <VerticalCarousel/>
      <Dashboard/>
      <YourContributions/>
      <TopArtists/>
    </div>
  )
}

export default HomePage;