// src/pages/About.tsx

import React from 'react'
import { motion } from 'framer-motion'
import {
  UserGroupIcon,
  FlagIcon,
  ChartBarIcon,
  BriefcaseIcon,
} from '@heroicons/react/24/outline'

export const About: React.FC = () => (
  <div className="min-h-screen bg-black/30 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-16 space-y-24">
    {/* Заголовок */}
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto text-center bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl"
    >
      <h1 className="text-5xl font-extrabold text-white drop-shadow-lg">
        О компании
      </h1>
      <p className="mt-4 text-gray-200 text-lg leading-relaxed">
        KH-Недвижимость — ваше надёжное агентство в Хабаровске с более чем 10-летним
        успехом. Мы делаем поиск и покупку жилья максимально простым и безопасным.
      </p>
    </motion.section>

    {/* Наши ценности */}
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.2 } },
      }}
      className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
    >
      {[
        {
          Icon: UserGroupIcon,
          title: 'Клиент прежде всего',
          text: 'Мы строим долгосрочные отношения на доверии и максимальной открытости.',
        },
        {
          Icon: FlagIcon,
          title: 'Профессионализм',
          text: 'Сертифицированные эксперты с непрерывным повышением квалификации.',
        },
        {
          Icon: ChartBarIcon,
          title: 'Результат',
          text: 'Быстрое и комфортное решение любых запросов клиентов.',
        },
        {
          Icon: BriefcaseIcon,
          title: 'Локальная экспертиза',
          text: 'Глубокое знание рынка Хабаровска и его районов.',
        },
      ].map(({ Icon, title, text }, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 flex flex-col items-center text-center shadow-lg"
        >
          <Icon className="w-12 h-12 text-indigo-400 mb-4" />
          <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-200 text-sm leading-relaxed">{text}</p>
        </motion.div>
      ))}
    </motion.section>

    {/* Наша история */}
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="max-w-3xl mx-auto bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-xl"
    >
      <h2 className="text-3xl font-bold text-white text-center mb-8 drop-shadow-md">
        Наша история
      </h2>
      <div className="relative border-l-2 border-indigo-600 ml-4 space-y-8">
        {[
          { year: 2013, text: 'Основание агентства под руководством Анны Ивановой.' },
          { year: 2015, text: 'Открытие офиса в Комсомольске-на-Амуре.' },
          { year: 2018, text: 'Запуск онлайн-платформы для поиска и аренды.' },
          { year: 2022, text: 'Признание «Лучшее агентство недвижимости ДВ».' },
        ].map((item, idx) => (
          <div key={idx} className="relative pl-8">
            <span className="absolute -left-4 top-1 w-4 h-4 bg-indigo-400 rounded-full" />
            <div className="flex items-baseline space-x-4">
              <span className="text-indigo-400 font-semibold text-xl">
                {item.year}
              </span>
              <p className="text-gray-200 leading-relaxed">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  </div>
)

export default About