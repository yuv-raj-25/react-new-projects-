import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, Router, RouterProvider, Routes, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

// this is the first method to that 

// const route = createBrowserRouter([
//   {
//     path: '?',
//     element:<Layout/>,
//     children: [
//       {
//         path: "",
//         element: <Home/>,

//       },
//       {
//         path: "About",
//         element: <About/>,
//       },
//       {
//         path: "Contact",
//         element: <Contact/>
//       }
//     ]
//   }
// ])

// another Method 

const route = createBrowserRouter(
    createRoutesFromElements(
      <Route path = '/' element = {<Layout/>} >

        <Route path = '' element = {<Home/>} />
        <Route path = 'About' element = {<About/>} />
        <Route path = 'Contact' element = {<Contact/>} />
        <Route path = '' element = {<Contact/>} />

      </Route>
    )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
