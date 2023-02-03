import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/home';
import Navbar from './component/navBar';
import Register from './component/register';
import View from './component/view';
import Edit from './component/edit';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/register' element={<Register/>} />
          <Route path='/view/:id' element={<View/>} />
          <Route path='/edit/:id' element={<Edit/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
