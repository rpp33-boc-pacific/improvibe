import PlayLayer from './PlayLayer';
import SoundControllerList from './SoundControllerList';
import Wave from './Wave';

export default function Layer({ data }) {
  return (
    <div className='layer'>
      <div className='horizonal-container'>
        <div className='horizonal-container'>
          <div>Track Name</div>
          <PlayLayer />
        </div>
        <SoundControllerList settings={data.settings}/>
      </div>
      <Wave />
    </div>
  )
}