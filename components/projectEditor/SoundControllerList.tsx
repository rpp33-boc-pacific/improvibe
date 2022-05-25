import SoundController from './SoundController'

export default function SoundControllerList({ settings }) {
  return (
    <ul role='sound-controller-list'>
      <SoundController />
      <SoundController />
      <SoundController />
      <SoundController />
    </ul>
  )
}