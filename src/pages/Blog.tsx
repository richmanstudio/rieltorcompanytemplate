// src/pages/Blog.tsx

import React from 'react'
import { motion } from 'framer-motion'
import {
  CalendarDaysIcon,
  ChevronRightIcon,
} from '@heroicons/react/24/outline'
import Button from '../components/UI/Button'

interface Article {
  id: number
  title: string
  summary: string
  date: string
  imageUrl: string
}

const articles: Article[] = [
  {
    id: 1,
    title: '5 советов по выбору квартиры в Хабаровске',
    summary:
      'Узнайте, на что обратить внимание при выборе жилья: район, инфраструктура, перспективы развития.',
    date: '12 июня 2025',
    imageUrl: 'https://source.unsplash.com/600x400/?khabarovsk,city',
  },
  {
    id: 2,
    title: 'Ипотека на лучших условиях: советы эксперта',
    summary:
      'Обзор программ кредитования от дальневосточных банков и лайфхаки по снижению переплаты.',
    date: '8 июня 2025',
    imageUrl: 'https://source.unsplash.com/600x400/?bank,loan',
  },
  {
    id: 3,
    title: 'Инвестиции в новостройки: где выгоднее всего?',
    summary:
      'Сравнение ключевых проектов Хабаровска по цене за м², срокам сдачи и надёжности застройщика.',
    date: '1 июня 2025',
    imageUrl: 'https://source.unsplash.com/600x400/?construction,building',
  },
]

const Blog: React.FC = () => (
  <div className="min-h-screen bg-black/30 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-16 space-y-16">
    {/* Заголовок */}
    <motion.h1
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-5xl font-extrabold text-white drop-shadow-lg text-center"
    >
      Блог и советы
    </motion.h1>

    {/* Список статей */}
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.15 } },
      }}
    >
      {articles.map((article) => (
        <motion.article
          key={article.id}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.02, boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}
          transition={{ type: 'spring', stiffness: 250 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-lg cursor-pointer"
        >
          <div className="relative h-48">
            <img
              src={article.imageUrl}
              alt={article.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black/60 to-transparent w-full h-24" />
          </div>
          <div className="p-6 flex flex-col h-full">
            <div className="flex items-center text-gray-300 text-sm mb-2">
              <CalendarDaysIcon className="w-5 h-5 mr-1" />
              {article.date}
            </div>
            <h2 className="text-xl font-semibold text-white mb-3 line-clamp-2">
              {article.title}
            </h2>
            <p className="text-gray-200 flex-1 mb-4 line-clamp-3">
              {article.summary}
            </p>
            <div className="mt-auto flex items-center justify-between">
              <Button
                variant="outline"
                size="sm"
                className="text-white border-gray-300 hover:border-white"
              >
                Читать далее
              </Button>
              <ChevronRightIcon className="w-6 h-6 text-indigo-400" />
            </div>
          </div>
        </motion.article>
      ))}
    </motion.div>
  </div>
)

export default Blog