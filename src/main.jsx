import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <GoogleOAuthProvider clientId='211425351460-688js63nisfpb3sv7q8edo9t0ttpokm9.apps.googleusercontent.com'>
    <App />

    </GoogleOAuthProvider>
    </BrowserRouter>
  </StrictMode>,
)
