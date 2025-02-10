import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './Layouts/MainLayout'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import 'sweetalert2/dist/sweetalert2.min.css'
import Home from './Pages/Home'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
  <BrowserRouter>
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<div>About</div>} />
      </Route>
    </Routes>
  </BrowserRouter>
  </QueryClientProvider>,
)
