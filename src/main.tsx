import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AuthContext from './context/AuthContext.tsx'
import AuthProvider from './context/AuthContext.tsx'
localStorage.clear();
createRoot(document.getElementById('root')!).render(
  <StrictMode>
<AuthProvider>
   <App />
  
  </AuthProvider>     
  </StrictMode>,
)
