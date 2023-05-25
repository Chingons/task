import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { TaskContextProvider } from './context/TaskContext'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div id='contenedor-todo'>
      <TaskContextProvider>
        <App />

      </TaskContextProvider>

    </div>
    
    
  </React.StrictMode>,
)
