import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Homescreen from "./Pages/Homescreen/homescreen";
import "./App.css";
import Banner from './Components/Banner/banner';
import Navbar from './Components/Navbar/Nav';
import Row from './Components/Row/Row';
import Footer from './Components/Footer/Footer';
// import Profilescreen from './Pages/Profilescreen/Profilescreen';
// import LoginScreen from './Pages/LoginScreen/LoginScreen';

const App = () => {
  const user={
    usn:"ganesh",
    pwd:"Test@123"
  };
  return (
    <div className='App'>
      <Router>
    { 
      !user ?
      <h1>
        Loginscreen
      </h1>
      :
      <Routes>
        
        {/* <Route path='/profile' element={}/> */}
        {/* <Route path='/' Component={Banner}/>
        <Route path='/Navbar' Component={Navbar}/> */}
        {/* <Route path='/' element={<Homescreen/>}/> */}
      </Routes>
    }
   
<Banner/>
<Row/>
<Navbar/>
<Footer/>
      </Router>
      </div>
  )
}

export default App