import React from 'react'
import Card from './Card'

const Main = () => {
  return (
    <>
        <div className='header'>
            <div className='bg'>
                <img src='./Images/bg.png' alt=''/>
            </div>
            <div className='search-bar'>
              <img src='./Images/logo.jpg' alt='logo'/>
              <input type="search" placeholder='Search Here' className='search' /> 
            </div>
        </div>
        <div className='content'>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
    </>
  )
}

export default Main