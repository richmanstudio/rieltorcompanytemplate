// src/pages/Agents.tsx

import React from 'react'
import { motion } from 'framer-motion'
import {
  PhoneIcon,
  EnvelopeIcon,
  ChatBubbleLeftEllipsisIcon,
} from '@heroicons/react/24/outline'

interface Agent {
  id: number
  name: string
  role: string
  photoUrl: string
  phone: string
  email: string
}

const agents: Agent[] = [
  {
    id: 1,
    name: 'Анна Иванова',
    role: 'Специалист по новостройкам',
    photoUrl: 'https://source.unsplash.com/200x200/?woman,portrait',
    phone: '+7 (914) 111-11-11',
    email: 'anna@kvartirykhv.ru',
  },
  {
    id: 2,
    name: 'Сергей Петров',
    role: 'Эксперт по вторичному жилью',
    photoUrl: 'https://source.unsplash.com/200x200/?man,portrait',
    phone: '+7 (914) 222-22-22',
    email: 'sergey@kvartirykhv.ru',
  },
  {
    id: 3,
    name: 'Мария Кузнецова',
    role: 'Коммерческая недвижимость',
    photoUrl: 'https://source.unsplash.com/200x200/?woman,smile',
    phone: '+7 (914) 333-33-33',
    email: 'maria@kvartirykhv.ru',
  },
  {
    id: 4,
    name: 'Игорь Смирнов',
    role: 'Ипотечное сопровождение',
    photoUrl: 'https://source.unsplash.com/200x200/?man,smile',
    phone: '+7 (914) 444-44-44',
    email: 'igor@kvartirykhv.ru',
  },
]

const Agents: React.FC = () => (
  <div className="min-h-screen bg-black/30 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-16 space-y-16">
    {/* Заголовок */}
    <motion.div
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center"
    >
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
        Наша команда
      </h1>
      <p className="mt-4 text-gray-200/90 text-lg">
        Профессионалы, которые помогут вам найти идеальное жильё.
      </p>
    </motion.div>

    {/* Сетка агентов */}
    <motion.div
      className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.1 } },
      }}
    >
      {agents.map((agent) => (
        <motion.div
          key={agent.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.03 }}
          transition={{ type: 'spring', stiffness: 250 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-6 flex flex-col items-center text-center shadow-lg hover:bg-white/20 cursor-pointer"
        >
          <img
            src={agent.photoUrl}
            alt={agent.name}
            className="w-32 h-32 object-cover rounded-full border-2 border-indigo-400 shadow-md"
          />
          <h3 className="mt-4 text-2xl font-semibold text-white">
            {agent.name}
          </h3>
          <p className="text-indigo-300 mb-4">{agent.role}</p>
          <div className="flex space-x-6 text-gray-200">
            <a href={`tel:${agent.phone}`} aria-label="Позвонить">
              <PhoneIcon className="w-6 h-6 hover:text-white transition-colors" />
            </a>
            <a href={`mailto:${agent.email}`} aria-label="Написать на почту">
              <EnvelopeIcon className="w-6 h-6 hover:text-white transition-colors" />
            </a>
            <button
              onClick={() => alert(`Чат с ${agent.name}`)}
              aria-label="Чат"
            >
              <ChatBubbleLeftEllipsisIcon className="w-6 h-6 hover:text-white transition-colors" />
            </button>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
)

export default Agents