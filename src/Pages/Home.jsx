import React from 'react'
import Banner from '../Components/Banner'
import Row from '../Components/Row'

const Home = () => {
  return (
    <>
      <Banner />
      <div className=' mt-[-70px] w-full z-50 absolute overflow-x-hidden'>
        <Row rowId='1' head='Trending' />
        <Row rowId='3' head='Movies' />
        <Row rowId='2' head='Anime' />
        <Row rowId='4' head='TV Shows' />
      </div>
    </>
  )
}

export default Home