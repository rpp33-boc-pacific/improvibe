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

const HorizontalCarousel = (props) => {

  const ref = useRef();
  const [songs, setSongs] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const { user } = useContext(AppContext); //the user will come from the AppContext
  let userId = user.id;

  return (
    <>
      <div className='home-category-labels'>{props.genre} Songs</div>
      <Splide
        options={{
          rewind: false,
          perPage: 5,
          perMove: 1,
          gap: '1px',
          padding: '1',
          heightRatio: 0.17,
          pagination: false,
          width: '100%',
          backgroundColor: '#1976d2'
        }}
      >
        {props.songs.map((song) => {
          return (
            <>
            <SplideSlide key={song} style={{boxShadow: 'none'}}>
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