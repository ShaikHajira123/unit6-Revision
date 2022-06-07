

import {Routes , Route } from 'react-router-dom'
import { Users } from './components/Users'
import {Products} from './components/Products'

function App() {


  return (
    <div className="App">
      <Routes>
        <Route path="/" element= {<Users />}></Route>
        <Route path="/home" element ={<Products />}></Route>
      </Routes>
    </div>
  )
}

export default App
