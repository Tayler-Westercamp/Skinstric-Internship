import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home, Testing, Result, Camera, Capture, Select, Summary} from './pages/pageComponents';
import NavBar from './components/NavBar';


const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/testing' element={<Testing />}></Route>
        <Route path='/result' element={<Result />}></Route>
        <Route path='/camera' element={<Camera />}></Route>
        <Route path='/capture' element={<Capture />}></Route>
        <Route path='/select' element={<Select />}></Route>
        <Route path='/summary' element={<Summary />}></Route>
      </Routes>
    </Router>
  )
}

export default App
