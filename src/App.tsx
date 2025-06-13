import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/Layout/NavBar'
import { Footer } from './components/Layout/Footer'
import { Router } from './routes'
import './index.css'

const App: React.FC = () => (
  <BrowserRouter>
    <div className="min-h-screen flex flex-col">
      {/* NavBar фиксирован и занимает высоту 4rem (h-16) */}
      <NavBar />
      {/* main с внутренними отступами и отступом сверху под NavBar */}
      <main className="flex-1 pt-16 px-4 sm:px-6 lg:px-8">
        <Router />
      </main>
      <Footer />
    </div>
  </BrowserRouter>
)

export default App