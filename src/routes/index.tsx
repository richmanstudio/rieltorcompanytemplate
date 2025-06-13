// src/routes/index.tsx
import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Properties from '../pages/Properties'
import PropertyDetail from '../pages/PropertyDetail'
import About from '../pages/About'
import Agents from '../pages/Agents'
import Blog from '../pages/Blog'
import Contact from '../pages/Contact'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/properties" element={<Properties />} />
      <Route path="/properties/:id" element={<PropertyDetail />} />
      <Route path="/about" element={<About />} />
      <Route path="/agents" element={<Agents />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/contact" element={<Contact />} />
      <Route
        path="*"
        element={
          <div className="py-16 text-center text-gray-600">
            404 — Страница не найдена
          </div>
        }
      />
    </Routes>
  )
}