

import { Login } from "./components/Login";
import { NewTask } from "./components/NewTask";
import { Home } from "./components/Home";
import { Summary } from "./components/Summary";
import {Routes,Route} from "react-router-dom"
import {Navbar} from './components/Navbar'

import './App.css'

function App() {


  return (
    <div className="App">
    
       <Navbar/>


      <Routes>
        <Route path="/" element={<Login></Login>}></Route>
        <Route path="/new" element={<NewTask/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/summary" element={<Summary/>}></Route>
      </Routes>


    </div>
  )
}

export default App
