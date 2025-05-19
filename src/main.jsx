import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './styles/index.css'
// import App from './App.jsx'
import Combine from './components/combine.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Combine />
  </StrictMode>,
)
