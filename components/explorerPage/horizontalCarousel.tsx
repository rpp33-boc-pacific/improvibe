import React, { useContext, useEffect } from 'react';
import { useState, useRef } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import AppContext from '../../AppContext';
import '../../styles/Explorer.module.css';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Tile from '../shared/SongTile';
import axios from 'axios';
import { Typography } from '@mui/material';

let uniqueKey = 0;

const HorizontalCarousel = (props: any) => {

  const ref = useRef();
  const [songs, setSongs] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const user = useContext(AppContext); //the user will come from the AppContext

  // useEffect(() => {
  //   // The songs will come from the api call
  //   axios.get('api/songs/most')
  //   .then((response) => {
  //     setSongs(response.data);
  //     setLoading(false);
  //   })
  //   .catch((err) => {
  //     console.log('Error:', err);
  //   })
  // })

  // if (props.songs) {
  //   setLoading(false);
  // }


  return (
    // isLoading === true ? <>Loading...</> :
    <>
      {/* <hr /> */}
      <Typography sx={{ mt: 0, mb: 2 }} variant="h6" component="div">
            {props.genre} Songs
      </Typography>
      <Splide
        // ref={ref}
        options={{
          rewind: false,
          perPage: 4,
          perMove: 1,
          gap: '10em',
          padding: '1',
          // border: '2em',
          heightRatio: 0.20,
          pagination: false,
          width: '100%',
          backgroundColor: '#1976d2'
        }}
      >
        {props.songs.map((song: React.Key | null | undefined) => {
          return (
            <>
            <SplideSlide key={song}>
              <div className="slide" >
                <Tile song={song} user={user} color={'white'}/>
              </div>
            </SplideSlide>
            </>
          );
        })}
      </Splide>
    </>
  );
}

export default HorizontalCarousel;