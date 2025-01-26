import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import MainLayout from './Layout/MainLayout.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Route>
    </Routes>
  </BrowserRouter>,
)
