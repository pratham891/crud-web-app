import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddData from './components/AddData';
import View from './components/View';
import Edit from './components/Edit';
import Register from './components/register page/Register';
import Login from './components/login page/Login';
import Profile from './components/profile page/Profile';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path='/login' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/" element={<Home />} />
          <Route path="/add-data" element={<AddData />} />
          <Route path="/view/:id" element={<View />} />
          <Route path="/edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
