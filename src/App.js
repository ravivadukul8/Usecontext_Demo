import logo from './logo.svg';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import './App.css';

// Pages 

import Home from './pages/Home';
import About from './pages/About';
import Singlecoktail from './pages/Singlecoktail';
import Error from './pages/Error';

// Components 

import Navbar from './Components/Navbar';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}> </Route>
          <Route path='/about' element={<About/>}> </Route>
          <Route path='/singlecoktail/:id' element={<Singlecoktail/>}> </Route>
          <Route path='*' element={<Error/>}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
