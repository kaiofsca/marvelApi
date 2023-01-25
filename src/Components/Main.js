import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'

const Main = () => {
  const [url, setUrl] = useState("http://gateway.marvel.com/v1/public/characters?ts=1&apikey=5b5fabd7ee01770e82fa88b5a8e17546&hash=59c00475557a00fc0f17be2863fbd27e")
  const [item, setItem] = useState()

  useEffect(()=>{
    const fetch = async() => {
      const res = await axios.get(url)
      setItem(res.data.data.results)
    }
    fetch()
  }, [url])

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
          {
            (!item) ? <p> Not Found </p> : <Card data={item} />
          }
        </div>
    </>
  )
}

export default Main