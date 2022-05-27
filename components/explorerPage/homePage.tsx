import Dashboard from './dashboard';
import PopularGenres from './popularGenres';
import TopArtists from './topArtists';
import YourContributions from './yourContributions';
import HorizontalCarousel from './horizontalCarousel';
import GenreData from './genres-sampleData';

const HomePage = () => {

  return (
    <div>
      <PopularGenres GenreData = {GenreData}/>
      <HorizontalCarousel/>
      <HorizontalCarousel/>
      <Dashboard/>
      <YourContributions/>
      <TopArtists/>
    </div>
  )
}

export default HomePage;