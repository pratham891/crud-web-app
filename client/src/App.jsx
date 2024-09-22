import { useState } from 'react';
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
import LoadingBar from 'react-top-loading-bar';

function App() {
  const [progress, setProgress] = useState(0);

  return (
    <div className='App'>
      <LoadingBar
        color='#f11946'
        height={4}
        progress={progress}
        onLoaderFinished={() => setProgress(0)}
      />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register setProgress={setProgress} />} />
          <Route path='/login' element={<Login setProgress={setProgress} />} />
          <Route path='/profile' element={<Profile setProgress={setProgress} />} />
          <Route path="/" element={<Home setProgress={setProgress} />} />
          <Route path="/add-data" element={<AddData setProgress={setProgress} />} />
          <Route path="/view/:id" element={<View setProgress={setProgress} />} />
          <Route path="/edit/:id" element={<Edit setProgress={setProgress} />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
