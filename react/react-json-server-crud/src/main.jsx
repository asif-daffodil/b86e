import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import Home from './Pages/Home.jsx'
import MainLayout from './Layouts/MainLayout.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import SinglePost from './Pages/SinglePost.jsx'
import AddPost from './Pages/AddPost.jsx'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/:id" element={<SinglePost />} />
          <Route path="/about" element={<div>About us</div>} />
          <Route path='/add-post' element={<AddPost />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
)
