// src/App.tsx
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/Layout/NavBar'
import { Footer } from './components/Layout/Footer'
import { Router } from './routes'
import './index.css'

const App: React.FC = () => (
  <BrowserRouter>
    <div className="min-h-screen flex flex-col">
      <NavBar />

      {/* 
        Тут контейнер с фоном полупрозрачного «стекла»,
        чтобы на градиенте текст и секции смотрелись контрастно 
      */}
      <main className="flex-1 pt-16 px-4 sm:px-6 lg:px-8 bg-black/30 backdrop-blur-lg">
        <Router />
      </main>

      <Footer />
    </div>
  </BrowserRouter>
)

export default App