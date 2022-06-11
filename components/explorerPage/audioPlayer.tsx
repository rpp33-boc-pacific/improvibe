// import * as React from 'react';
// import LikeButton from '../shared/LikeButton';
// import AddToProjects from '../shared/AddToProjects';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Image from 'next/image';
// import Link from '@mui/material/Link';
// import Modal from '@mui/material/Modal';
// import CloseIcon from '@mui/icons-material/Close';
// import PlayCircleIcon from '@mui/icons-material/PlayCircle';
// import IconButton from '@mui/material/IconButton';
// import { borderRadius } from '@mui/system';

// const AudioPlayer = () => {
//   // console.log('props', song);

//   const song = {
//     songName: 'Song Name',
//     artistName: 'Artist Name',
//     songPath: 'https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav',
//     genre: 'rock',
//     tags: ['smooth', 'funky'],
//     artistPic: "https://artscimedia.case.edu/wp-content/uploads/sites/79/2016/12/14205134/no-user-image.gif",
//     cumulativeLikes: 234,
//   }

//   const user = {
//     userId: 1,
//     liked: false, //liked by current user
//   }

//   const style = {
//     position: 'absolute',
//     bottom: '0%',
//     height: '300px',
//     width: '100%',
//     bgcolor: '#333',
//     border: '1px solid #000',
//     p: 4,
//   };

//   let color = '#757575';

//   const ProfileImage = () => {
//     return (
//       <Image src={song.artistPic} alt="artist-profile-picture" layout={"fixed"} width="125px" height="125px"/>
//     )
//   }

//   const [open, setOpen] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleClose = () => setOpen(false);

//     return (
//       <div id="play-song-container">
//         <IconButton
//           aria-label="open-player-modal"
//           onClick={handleOpen}>
//           <PlayCircleIcon fontSize="large"/>
//         </IconButton>
//         <Modal
//           hideBackdrop
//           open={open}
//           onClose={handleClose}>
//           <Box sx={style}>
//             <Grid container direction="row" spacing={2} sx={{paddingBottom: '.5em'}}>
//               <Grid item xs={1.5}>
//               <Link href="./profile">
//                 <ProfileImage></ProfileImage>
//               </Link>
//               </Grid>
//               <Grid item xs={3} sx={{paddingBotton: ".5em"}}>
//                 <Typography variant="h4"sx={{color: "white"}}>{song.songName}</Typography>
//                 <Link href="./profile" sx={{color: "white"}}>{song.artistName}</Link>
//               </Grid>
//               <Grid item xs={3}>
//                 <Typography sx={{color: "white", textAlign: "center"}}>
//                     {song.genre}
//                     {/* insert component to display list here */}
//                 </Typography>
//                 <LikeButton color={color} song={song} user={user}/>
//                 <AddToProjects song={song} user={user}/>
//               </Grid>
//             </Grid>
//             <audio role="audio-player" controls src={song.songPath}></audio>
//             <IconButton
//               aria-label="close-player-modal"
//               sx={{color: 'white', position: 'absolute', top: '2%', right: '1%'}}
//               onClick={handleClose}>
//                 <CloseIcon></CloseIcon>
//             </IconButton>
//           </Box>
//         </Modal>
//       </div>
//     );
// }

// export default AudioPlayer;