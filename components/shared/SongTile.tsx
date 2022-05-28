import React from 'react';
import Image from 'next/image';
import LikeButton from './LikeButton';
import AudioPlayer from './AudioPlayer';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

const SongTile = () => {
  //stand in object for props, don't forget to rename when passing data below!
  const userProp = {
    userId: 1,
    liked: false, //liked by current user
  }
  const songProp = {
    songName: 'Song Name',
    artistName: 'Artist Name',
    songPath: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
    genre: 'rock',
    tags: ['smooth', 'funky'],
    artistPic: "https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif",
    cumulativeLikes: 234,
  }
  const ProfileImage = () => {
    return (
      <Image src={songProp.artistPic} alt="artist-profile-picture" layout={"fixed"} width="75px" height="75px"/>
    )
  }

  return(
    <Card sx={{ width: 200, height: 150, padding: ".5em" }}>
      <Stack direction="row">
        <ProfileImage></ProfileImage>
        <Stack sx={{textAlign: "right", paddingLeft: ".5em"}}>
          <Typography variant="subtitle1">{songProp.songName}</Typography>
          <Typography variant="caption">{songProp.artistName}</Typography>
        </Stack>
      </Stack>
      <Stack direction="row" spacing={8}>
        <AudioPlayer color={'white'} song={songProp} user={userProp}/>
        <LikeButton color={'#757575'} song={songProp} user={userProp}/>
      </Stack>
    </Card>
  )
};

export default SongTile;