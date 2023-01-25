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
