import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import Request_form from  './components/contactform/request_form.tsx'

import App from './App.tsx'

const router = createBrowserRouter([


    {
      path: "/",
      element: <App/>,

    } ,
    {
      path: "/forms",
      element: <Request_form/>,

    }  

    ])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
