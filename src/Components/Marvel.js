import { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

const Marvel = () => {
  const {id} = useParams()
  const [item, setItem] = useState()
  const fetch = async() => {
    const res = await axios.get(`http://gateway.marvel.com/v1/public/characters/${id}?ts=1&apikey=5b5fabd7ee01770e82fa88b5a8e17546&hash=59c00475557a00fc0f17be2863fbd27e`)
    setItem(res.data.data.results[0])
  }
  fetch()
  return (
    <>
    {
      (!item) ? "" : (
        <div className='box-content'>
          <div className='right-box'>
            <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt='' />
          </div>
          <div className='left-box'>
            <h1>{item.name}</h1>
            <h4>{item.description}</h4>
          </div>
        </div>
      )
    }
    </>
  )
}

export default Marvel