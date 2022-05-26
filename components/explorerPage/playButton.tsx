import React from 'react';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import './SlideButton.scss'

const PlayButton = ({ onClick, type }) => (
  <button className={`play-button play-button--${type}`} onClick={onClick}>
    <span>
      <PlayCircleFilledIcon />
    </span>
  </button>
);

export default PlayButton;