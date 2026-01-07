import React from 'react'
import ReactDOM from 'react-dom/client'
// Используем AApp-beta для работы без префикса /a
import { AApp } from './components/a/AApp-beta'
import './index.css'

// Entry point для базового прототипа (FitLife_beta)
// По умолчанию открывается вариант A без префикса /a
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AApp />
  </React.StrictMode>,
)

