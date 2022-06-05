import React from 'react';
import { useState, useRef } from "react";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '../../styles/Explorer.module.css';
import "@splidejs/splide/dist/css/themes/splide-default.min.css";
import Tile from './tile';

let uniqueKey = 0;

const HorizontalCarousel = () => {

  const initialItems = Array.apply(null, Array(6)).map(
    (value, index) => index + 1
  );

  const ref = useRef();
  const [items, setItems] = useState(initialItems);
  return (
    <>
      {/* <hr /> */}
      <Splide
        // ref={ref}
        options={{
          rewind: false,
          perPage: 4,
          perMove: 1,
          gap: '1em',
          padding: '1em',
          border: '2em',
          heightRatio: 0.25,
          pagination: false,
          width: '100%',
          backgroundColor: '#1976d2'
        }}
      >
        {items.map(item => {
          return (
            <>
            <SplideSlide key={item}>
              <div className="slide" >
                <Tile />
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