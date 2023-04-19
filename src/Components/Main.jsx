import React, { useMemo, useState } from 'react'
import movies from '../Data'

const Main = () => {
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
            <div className='w-full h-[650px] mb-5'>
                <div className='w-full h-full'>
                    <div className='absolute w-full h-[650px] opacity-100 bg-gradient-to-r from-[#111] to-transparent'></div>
                    <img className='w-full h-full object-cover object-center' src={bannerData.img} alt={bannerData.title} />
                </div>

                <div className='absolute top-[40%] px-12 w-full'>
                    <div className=' w-[60%] mb-4'>
                        <h1 className=' text-7xl'>{bannerData.title}</h1>
                    </div>

                    <div className='w-[50%] mb-4'>
                        <p className='text-lg'>
                            {truncateDesc ?
                                <>
                                    {bannerData.desc.slice(0, 100)}
                                    <span className='font-bold cursor-pointer' onClick={handleClick}>...Read More</span>
                                </>
                                :
                                bannerData.desc
                            }
                        </p>
                    </div>

                    <div>
                        <button className='rounded px-8 py-2 text-lg text-black bg-white'>Play</button>
                        <button className='rounded px-8 py-2 text-lg text-white bg-gray-500 ml-4'>Watch Later</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main
