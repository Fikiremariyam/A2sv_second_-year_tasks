import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { store } from './app/service/store.tsx'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <Provider store={store}>

    <App />
    
    </Provider>
    </BrowserRouter>
  
)
