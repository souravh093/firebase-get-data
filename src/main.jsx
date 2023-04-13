import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Routes/Root'
import Home from './Routes/Home/Home'
import Login from './Routes/Login/Login'
import Register from './Routes/Register/Register'
import Register2 from './Routes/Register2/Register2'
import RegisterTailwind from './Routes/RegisterTailwind/RegisterTailwind'

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/register',
                element: <Register />
            },
            {
                path: '/register2',
                element: <Register2 />
            },
            {
                path: '/registertailwind',
                element: <RegisterTailwind />
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
