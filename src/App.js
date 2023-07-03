
import './App.css';
import Home from './pages/Home';
import {  
  BrowserRouter as Router,  
  Routes,  
  Route
}   
from 'react-router-dom';  
import Navigationbar from './Component/Navigationbar';

function App() {
  return (
   <>
  <Router>
  <Navigationbar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
  </Router>
   </>
  );
}

export default App;
