import React, { useState } from 'react';
import movies from '../Data/Data';
import Movie from './Movie';

import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

const Row = ({ rowId, head }) => {

  const slideLeft = () => {
    var slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft - 500
  }
  const slideRight = () => {
    var slider = document.getElementById('slider' + rowId)
    slider.scrollLeft = slider.scrollLeft + 500
  }

  return (
    <div className='text-black w-full sm:h-[180px] h-[100px] mb-24 relative'>
      <h1 className='ml-3 font-bold text-lg text-white'>{head}</h1>
      <div className='mt-3 w-full sm:h-[230px] h-[100px] flex items-center group'>
        <MdChevronLeft
          onClick={slideLeft}
          className='bg-gray-600 text-black top-10 left-0 h-full absolute opacity-50 cursor-pointer z-30 hidden group-hover:block'
          size={40}
        />

        <div id={'slider' + rowId} className='flex h-full justify-between overflow-y-hidden overflow-x-scroll hover:overflow-x-visible scrollbar-hide scroll-smooth'>
          {movies.banner.map((movie, id) => (
            <Movie id={id} movie={movie} head={head} />
          ))}
        </div>
        <MdChevronRight
          onClick={slideRight}
          className='bg-gray-600 text-black top-10 right-0 h-full absolute opacity-50 cursor-pointer z-30 hidden group-hover:block'
          size={40}
        />
      </div>
    </div>
  );
};

export default Row;
