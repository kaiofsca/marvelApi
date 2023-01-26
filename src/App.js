import Main from "./Components/Main";
import './Components/styles.css'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Main/>}/>
        </Routes>
    </>
  );
}

export default App;

{/* 
  APP JS
import Main from "./Components/Main";
import Marvel from "./Components/Marvel";
import './Components/styles.css'
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/:id" element={<Marvel/>}/>
        </Routes>
    </>
  );
}

export default App;

MARVEL JS
import { useState } from 'react'
import axios from 'axios';
import { useParams } from 'react-router-dom'

const Marvel = () => {
  const {id} = useParams()
  const [item, setItem] = useState()
  const fetch = async() => {
    const res = await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=5b5fabd7ee01770e82fa88b5a8e17546&hash=59c00475557a00fc0f17be2863fbd27e`)
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

STYLES

.box-content {
    width: 100%;
    margin: 0 auto;
    height: 600px;
    background: black;
    color: white;
    font-size: 1.3rem;
    text-align: justify;
    display: flex;
    align-items: center;
    justify-content: space-around;
}

.right-box {
    flex-basis: 20%;
}

.left-box {
    flex-basis: 50%;
}

.box-content img {
    width: 300px;
    height: 400px;
    border: 1px solid white;
    box-shadow: 0 5px 5px 5px rgba(255, 255, 255, 0.2);
    transform: rotate(20deg);
    transition: 0.5s;
}
*/}