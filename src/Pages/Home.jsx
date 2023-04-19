import React from 'react'
import Main from '../Components/Main'
import Row from '../Components/Row'

const Home = () => {
  return (
    <>
        <Main />
        <Row rowId='1' head='Trending'/>
        <Row rowId='2' head='New Releases'/>
        <Row rowId='3' head='Popular'/>
        <Row rowId='4' head='Upcoming'/>
    </>
  )
}

export default Home