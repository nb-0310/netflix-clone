import React from 'react'
import { useState } from 'react';
import { UserAuth } from '../Contexts/AuthContext';
import { db } from '../firebase.config';
import { arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

const Movie = ({ movie, head }) => {
    const [like, setLike] = useState(false)
    const [saved, setSaved] = useState(false)
    const { user } = UserAuth()
    const movieId = doc(db, 'users', `${user?.email}`)

    const saveMovie = async () => {
        if (user?.email) {
            setLike(!like)
            setSaved(true)
            await updateDoc(movieId, {
                savedMovies: arrayUnion({
                    id: movie.title,
                    title: movie.title,
                    img: movie.img
                })
            })
        } else alert('Please log in to save!')
    }

    return (
        head === 'Trending' ? (movie.tranding && (
            <div
                key={movie.title}
                className='sm:w-[320px] w-[200px] sm:h-[180px] h-[100px] flex-shrink-0 mx-2 relative overflow-hidden hover:z-30 z-0'
            >
                <div className='h-full w-full relative'>
                    <img
                        src={movie.img}
                        alt={movie.title}
                        className='w-full h-full object-cover hover:scale-125 z-10'
                    />
                    <div className='w-full h-full bg-black/75 opacity-0 hover:opacity-100 text-white absolute top-0 left-0 z-0 flex justify-center items-center gap-3'>
                        <p className=''>{movie.title}</p>
                        <p className='absolute top-2 left-2' onClick={saveMovie}>
                            {like ? (
                                <FaHeart />
                            ) : (
                                <FaRegHeart />
                            )}
                        </p>
                    </div>
                </div>
            </div>
        )
        ) : (head === 'Anime' ? (
            movie.tag === 'anime' && (
                <div
                    key={movie.title}
                    className='sm:w-[320px] w-[200px] sm:h-[180px] h-[100px] flex-shrink-0 mx-2 relative overflow-hidden hover:z-30 z-0'
                >
                    <div className='h-full w-full relative'>
                        <img
                            src={movie.img}
                            alt={movie.title}
                            className='w-full h-full object-cover hover:scale-125 z-10'
                        />
                        <div className='w-full h-full bg-black/75 opacity-0 hover:opacity-100 text-white absolute top-0 left-0 z-0 flex justify-center items-center gap-3'>
                            <p className=''>{movie.title}</p>
                            <p className='absolute top-2 left-2' onClick={saveMovie}>
                                {like ? (
                                    <FaHeart />
                                ) : (
                                    <FaRegHeart />
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            )
        ) : (head === 'Movies' ? (
            movie.tag === 'movie' && (
                <div
                    key={movie.title}
                    className='sm:w-[320px] w-[200px] sm:h-[180px] h-[100px] flex-shrink-0 mx-2 relative overflow-hidden hover:z-30 z-0'
                >
                    <div className='h-full w-full relative'>
                        <img
                            src={movie.img}
                            alt={movie.title}
                            className='w-full h-full object-cover hover:scale-125 z-10'
                        />
                        <div className='w-full h-full bg-black/75 opacity-0 hover:opacity-100 text-white absolute top-0 left-0 z-0 flex justify-center items-center gap-3'>
                            <p className=''>{movie.title}</p>
                            <p className='absolute top-2 left-2' onClick={saveMovie}>
                                {like ? (
                                    <FaHeart />
                                ) : (
                                    <FaRegHeart />
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            )
        ) : (head === 'TV Shows' ? (
            movie.tag === 'show' && (
                <div
                    key={movie.title}
                    className='sm:w-[320px] w-[200px] sm:h-[180px] h-[100px] flex-shrink-0 mx-2 relative overflow-hidden hover:z-30 z-0'
                >
                    <div className='h-full w-full relative'>
                        <img
                            src={movie.img}
                            alt={movie.title}
                            className='w-full h-full object-cover hover:scale-125 z-10'
                        />
                        <div className='w-full h-full bg-black/75 opacity-0 hover:opacity-100 text-white absolute top-0 left-0 z-0 flex justify-center items-center gap-3'>
                            <p className=''>{movie.title}</p>
                            <p className='absolute top-2 left-2' onClick={saveMovie}>
                                {like ? (
                                    <FaHeart />
                                ) : (
                                    <FaRegHeart />
                                )}
                            </p>
                        </div>
                    </div>
                </div>
            )
        ) : '')))
    )

}

export default Movie