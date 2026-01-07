import React from 'react'
import ReactDOM from 'react-dom/client'
import { AApp } from './components/a/AApp'
import './index.css'

// Entry point for FitLife Beta - basic prototype
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AApp />
  </React.StrictMode>,
)
