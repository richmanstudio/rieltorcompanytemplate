import React from 'react'
import { Link } from 'react-router-dom'
import { MapPinIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline'

const links = [
  { to: '/', label: 'Главная' },
  { to: '/properties', label: 'Объекты' },
  { to: '/agents', label: 'Агенты' },
  { to: '/blog', label: 'Блог' },
  { to: '/contact', label: 'Контакты' },
]

export const Footer: React.FC = () => (
  <footer className="bg-gray-900 text-gray-400">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      {/* О компании */}
      <div>
        <h3 className="text-lg font-semibold text-white mb-4">KH-Недвижимость</h3>
        <p className="text-sm leading-relaxed">
          Эксперты по недвижимости в Хабаровске с более чем 10-летним опытом.
        </p>
      </div>

      {/* Разделы */}
      <div>
        <h4 className="text-md font-medium text-white mb-3">Разделы</h4>
        <ul className="space-y-2 text-sm">
          {links.map((item) => (
            <li key={item.to}>
              <Link to={item.to} className="hover:text-white transition-colors">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Контакты */}
      <div>
        <h4 className="text-md font-medium text-white mb-3">Контакты</h4>
        <ul className="space-y-3 text-sm">
          <li className="flex items-center">
            <MapPinIcon className="w-5 h-5 text-indigo-300 mr-2" />
            ул. Пушкина, д. 8, оф. 23, Хабаровск
          </li>
          <li className="flex items-center">
            <PhoneIcon className="w-5 h-5 text-indigo-300 mr-2" />
            <a href="tel:+79141234567" className="hover:text-white transition-colors">
              +7 (914) 123-45-67
            </a>
          </li>
          <li className="flex items-center">
            <EnvelopeIcon className="w-5 h-5 text-indigo-300 mr-2" />
            <a href="mailto:info@kvartirykhv.ru" className="hover:text-white transition-colors">
              info@kvartirykhv.ru
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center py-4 text-xs border-t border-gray-800">
      © {new Date().getFullYear()} KH-Недвижимость. Все права защищены.
    </div>
  </footer>
)