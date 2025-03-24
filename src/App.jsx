import { useState } from 'react'
import './App.css'
import { Routes, Route } from "react-router-dom";
import { fetchAllPlayers } from './API'
import newPlayerForm from './components/NewPlayerForm';

export default function App() {
  // const [count, setCount] = useState(0)

  return (
    <React.StrictMode>
      <BrowserRouter>
      {/* <Routes>
        <Route>  */}
      <App />
        {/* </Route>
      </Routes> */}
      </BrowserRouter>
    </React.StrictMode>
  )
}

