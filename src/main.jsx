import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AppContextProvider from './user/context/AppContext.jsx';
import Admin from './Admin.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <AppContextProvider>

    <GoogleOAuthProvider clientId='211425351460-688js63nisfpb3sv7q8edo9t0ttpokm9.apps.googleusercontent.com'>
    <Routes>
            <Route path="/*" element={<App />} />           
            <Route path="/admin/*" element={<Admin />} />   
          </Routes>
    </GoogleOAuthProvider>
    </AppContextProvider>

    </BrowserRouter>
  </StrictMode>,
)
