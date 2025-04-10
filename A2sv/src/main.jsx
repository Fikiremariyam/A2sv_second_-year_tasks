import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Root from	 './routes/root.jsx'
import ErrorPage from './routes/errorpage.jsx'
import Contacts from './routes/contact.jsx'
import { Outlet } from "react-router-dom";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Contact from './routes/contact.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <ErrorPage/>,
    children :[
      {
        path:"contacts/:contactId",
        element: <Contacts/>,  
      }
    ]
 
  },
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <RouterProvider router={router} />
  </StrictMode>,
)
