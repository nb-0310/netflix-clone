import React, { useMemo, useState } from 'react'
import movies from '../Data/Data'

const Banner = () => {
    const [truncateDesc, setTruncateDesc] = useState(true)

    const index = useMemo(() => {
        return Math.floor(Math.random() * movies.banner.length)
    }, [])

    const bannerData = useMemo(() => {
        return movies.banner[index]
    }, [index])

    const handleClick = () => {
        setTruncateDesc(false)
    }

    return (
        <div>
            <div className='w-full sm:h-[90vh] h-[60vh]'>
                <div className='w-full h-full'>
                    <div className='absolute w-full sm:h-[90vh] h-[60vh] opacity-100 bg-gradient-to-t from-[#111] to-transparent'></div>
                    <img className='w-full h-full object-cover object-center' src={bannerData.img} alt={bannerData.title} />
                </div>

                <div className='absolute sm:top-[30%] top-[25%] translate-[-50%] sm:px-12 px-4 w-full'>
                    <div className=' sm:w-[60%] w-full mb-4'>
                        <h1 className='sm:text-7xl text-xl'>{bannerData.title}</h1>
                    </div>

                    <div className='sm:w-[50%] w-full mb-4'>
                        <p className='sm:text-lg text-xs'>
                            {truncateDesc ?
                                <>
                                    {bannerData.desc.slice(0, 80)}
                                    <span className='font-bold cursor-pointer' onClick={handleClick}>...Read More</span>
                                </>
                                :
                                bannerData.desc
                            }
                        </p>
                    </div>

                    <div>
                        <button className='rounded sm:px-8 sm:py-2 px-4 py-1 sm:text-lg text-sm text-black bg-white'>Play</button>
                        <button className='rounded sm:px-8 sm:py-2 px-4 py-1 sm:text-lg text-sm text-white bg-gray-500 ml-4'>Watch Later</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
