import logo from './logo.svg';
import './App.css';
import Home from './Home';
import About from './About';
import Courses from './Courses';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
       
        <Route path='' element={ <Home/>}/>
        <Route path='/About' element={ <About/>}/>
        <Route path='/Courses' element={ <Courses/>}/>
      
      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
