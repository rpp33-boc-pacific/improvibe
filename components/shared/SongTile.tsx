import React from 'react';
import Image from 'next/image';
import LikeButton from './LikeButton';
import AudioPlayer from './AudioPlayer';
import Card from '@mui/material/Card';
// import Grid from '@mui/material/Grid'; <-- unused
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

// stand in object for props, don't forget to rename when passing data below!
const tempUserProp = {
  userId: 1,
  liked: false, // liked by current user
};

const tempSongProp = {
  songName: 'Song Name',
  artistName: 'Artist Name',
  songPath: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
  genre: 'rock',
  tags: ['smooth', 'funky'],
  artistPic: "https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif",
  cumulativeLikes: 234,
};

const SongTile = (props: any) => {
  const propsKeys = Object.keys(props).length;
  if (propsKeys === 0) {
    // If not passed props, use stand-ins above
    const ProfileImage = () => {
      return (
        <Image src={tempSongProp.artistPic} alt="artist-profile-picture" layout={"fixed"} width="75px" height="75px" />
      )
    }
    return (
      <Card sx={{ width: 200, height: 150, padding: ".5em" }}>
        <Stack direction="row">
          <ProfileImage></ProfileImage>
          <Stack sx={{ textAlign: "right", paddingLeft: ".5em" }}>
            <Typography variant="subtitle1">{tempSongProp.songName}</Typography>
            <Typography variant="caption">{tempSongProp.artistName}</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={8}>
          <AudioPlayer color={'white'} song={tempSongProp} user={tempUserProp} />
          <LikeButton color={'#757575'} song={tempSongProp} user={tempUserProp} />
        </Stack>
      </Card>
    )
  } else {
    // If passed props
    const ProfileImage = () => {
      return (
        <Image src={props.songProp.artistPic} alt="artist-profile-picture" layout={"fixed"} width="75px" height="75px" />
      )
    }
    return (
      <Card sx={{ width: 200, height: 150, padding: ".5em" }}>
        <Stack direction="row">
          <ProfileImage></ProfileImage>
          <Stack sx={{ textAlign: "right", paddingLeft: ".5em" }}>
            <Typography variant="subtitle1">{props.songProp.name}</Typography>
            <Typography variant="caption">{props.songProp.artist}</Typography>
          </Stack>
        </Stack>
        <Stack direction="row" spacing={8}>
          <AudioPlayer color={'white'} song={props.songProp} user={props.userProp} />
          <LikeButton color={'#757575'} song={props.songProp} user={props.userProp} />
        </Stack>
      </Card>
    )
  }

};

export default SongTile;