import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
      <App />
)
window.addEventListener('load', (e) => {
  console.log(e.timeStamp.toString())
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('fade-out');
    setTimeout(() => preloader.remove(), 1000); // matches fade duration
  }
});