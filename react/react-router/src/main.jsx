import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import About from './Pages/About/About.jsx';
import MainLayout from './Layouts/MainLayout/MainLayout.jsx';
import Home from './Pages/Home/Home.jsx';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path='/about' element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
