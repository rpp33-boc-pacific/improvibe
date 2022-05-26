import React from 'react';
// import PlayButton from './playButton';
import relatedProductImages from './stockImages';
console.log('images', relatedProductImages);

import Styles from '../../styles/Explorer.module.css';

// const SliderContext = React.createContext();

// function HorizontalCarousel () {
//   return (
//     <div className={Styles.container}>
//     <div className={Styles.item}>1</div>
//     <div className={Styles.item}>2</div>
//     <div className={Styles.item}>3</div>
//     <div className={Styles.item}>4</div>
//     <div className={Styles.item}>5</div>
//   </div>
//   )
// }

// let object = { SliderContext, HorizontalCarousel }

// export default object;

// let tiles = [
//   '<div className={Styles.item}>1</div>','<div className={Styles.item}>1</div>', '<div className={Styles.item}>1</div>'
// ]

let uniqueKey = 0;

import { useState } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { generateSlides } from '../utils';


const HorizontalCarousel: React.FunctionComponent = () => {
  const [ gap, setGap ] = useState( 0 );
  const [ perPage, setPerPage ] = useState( 4 );
  const [ height, setHeight ] = useState( 5 );

  return (
    <div className= {Styles.wrapper}>
      <h2 id="reactivity-example-heading">Reactivity Example</h2>
      <Splide
        options={ { perPage, height: `${ height }rem`, gap } }
        aria-labelledby="reactivity-example-heading"
      >
        { relatedProductImages.map( slide => (
          <SplideSlide key={ uniqueKey++ } className= {Styles.splide__slide}>
            <img src= {slide} alt={ slide } width = '50' height = '50' className= {Styles.img}/>
          </SplideSlide>
        ) ) }
      </Splide>
    </div>
  );
};

export default HorizontalCarousel