import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { motion, AnimatePresence } from 'framer-motion'

export const NavBar: React.FC = () => {
  const [open, setOpen] = useState(false)
  const links = [
    { to: '/', label: 'Главная' },
    { to: '/properties', label: 'Объекты' },
    { to: '/agents', label: 'Агенты' },
    { to: '/blog', label: 'Блог' },
    { to: '/contact', label: 'Контакты' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-black/30 backdrop-blur-xl border-b border-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-white">
          KH-Недвижимость
        </Link>

        <nav className="hidden md:flex space-x-6">
          {links.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'text-gray-200 hover:bg-white/10 hover:text-white'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          className="md:hidden p-2 rounded-lg bg-black/20 backdrop-blur-md text-white hover:bg-black/30 focus:outline-none"
          aria-label="Toggle menu"
        >
          {open ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-black/25 backdrop-blur-lg border-t border-black/30 overflow-hidden"
          >
            {links.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `block px-4 py-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-white/20 text-white'
                      : 'text-gray-200 hover:bg-white/10 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}