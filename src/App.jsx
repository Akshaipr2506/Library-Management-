
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Userhome from './pages/Userhome'

function App() {
  

  return (
    <>
     <Routes>
        <Route path={'/'} element={<Userhome/>}></Route>
     </Routes>
    </>
  )
}

export default App
