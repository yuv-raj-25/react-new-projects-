import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'

const route = createBrowserRouter([
  {
    path: '?',
    element:<Layout/>,
    children: [
      {
        path: "",
        element: <Home/>,

      },
      {
        path: "",
        element: <Ab
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider/>
  </React.StrictMode>,
)
