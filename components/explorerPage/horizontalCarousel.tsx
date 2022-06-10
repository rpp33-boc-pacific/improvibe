import React, { useContext, useEffect } from 'react';
import { useState, useRef } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import AppContext from '../../AppContext';
import '../../styles/Explorer.module.css';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Tile from '../shared/SongTile';
import axios from 'axios';

let uniqueKey = 0;

const HorizontalCarousel = () => {

  const ref = useRef();
  const [songs, setSongs] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const user = useContext(AppContext); //the user will come from the AppContext

  useEffect(() => {
    // The songs will come from the api call
    axios.get('api/songs/most')
    .then((response) => {
      setSongs(response.data);
      setLoading(false);
    })
    .catch((err) => {
      console.log('Error:', err);
    })
  })


  return (
    isLoading === true ? <>Loading...</> :
    <>
      {/* <hr /> */}
      <Splide
        // ref={ref}
        options={{
          rewind: false,
          perPage: 4,
          perMove: 1,
          gap: '10em',
          padding: '.5em',
          // border: '2em',
          heightRatio: 0.25,
          pagination: false,
          width: '100%',
          backgroundColor: '#1976d2'
        }}
      >
        {songs.map(song => {
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