import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App'
import Movie from './Movie'

const router = createBrowserRouter([
    // { path:"/react-movies", element: <App />},
    { path:`${import.meta.env.BASE_URL}`, element: <App />},
    { path:`${import.meta.env.BASE_URL}/movie`, element: <Movie />}
])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)
