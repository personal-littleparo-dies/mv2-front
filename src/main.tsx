import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  // <React.StrictMode> // commented out to prevent 2 canvases appearing
    <App />
  // </React.StrictMode>,
)
