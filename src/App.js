import './App.css'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Members from './components/Members'
import About from './components/About'



function App() {
  return (
    <div>
      <Navbar/> 
      <main> 
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/members" element={<Members />}/>
          <Route path="/about" element={<About />}/>    
        </Routes>
      </main>


    </div>
  );
}

export default App;
