import React, { useState } from 'react'
import movies from '../Data'
import { FaHeart, FaRegHeart } from 'react-icons/fa'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const Row = ({ rowId , head }) => {
    const [like, setLike] = useState(false)

    const slideLeft = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft - 500;
      };
      const slideRight = () => {
        var slider = document.getElementById('slider' + rowId);
        slider.scrollLeft = slider.scrollLeft + 500;
      };

    return (
        <div className='pl-8'>
            <h1 className='text-lg font-bold pl-5'>{head}</h1>
            <div className='relative flex items-center h-[165px] mb-5 group'>
                <MdChevronLeft
                    onClick={slideLeft}
                    className='bg-white text-black left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-30 hidden group-hover:block'
                    size={40}
                />

                <div id={'slider' + rowId} className='w-full h-full overflow-x-scroll overflow-y-hidden whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {
                        movies.banner.map((movie) => (
                            <div className='w-[280px] h-[165px] inline-block cursor-pointer relative p-2 hover:scale-125 hover:z-10 z-0 transition-all'>
                                <img src={movie.img} alt={movie.title} className='w-full h-full object-cover' />
                                <div className='absolute w-full h-full top-0 left-0 hover:bg-black/50 opacity-0 hover:opacity-100'>
                                    <p className='flex justify-center items-center text-sm h-full'>{movie.title}</p>
                                    <p>
                                        {like ? <FaHeart className='absolute text-white top-4 left-4' /> : <FaRegHeart className='absolute text-white top-4 left-4' />}
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <MdChevronRight
                    onClick={slideRight}
                    className='bg-white text-black right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-30 hidden group-hover:block'
                    size={40}
                />
            </div>
        </div>
    )
}

export default Row