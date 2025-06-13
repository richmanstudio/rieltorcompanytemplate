// src/pages/Home.tsx

import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Input from '../components/UI/Input'
import Button from '../components/UI/Button'
import PropertyCard from '../components/Property/PropertyCard'

interface Filters {
  district: string
  type: string
  priceMin: string
  priceMax: string
}

const sampleProperties = [
  {
    id: 1,
    imageUrl: 'https://source.unsplash.com/400x300/?khabarovsk,apartment',
    price: 3450000,
    address: 'ул. Сернышева, 12',
    bedrooms: 2,
    bathrooms: 1,
  },
  {
    id: 2,
    imageUrl: 'https://source.unsplash.com/400x300/?khabarovsk,house',
    price: 12700000,
    address: 'ул. Киевская, 3',
    bedrooms: 4,
    bathrooms: 2,
  },
  {
    id: 3,
    imageUrl: 'https://source.unsplash.com/400x300/?khabarovsk,townhouse',
    price: 7260000,
    address: 'пер. Лесной, 25',
    bedrooms: 3,
    bathrooms: 2,
  },
]

const Home: React.FC = () => {
  const navigate = useNavigate()
  const [filters, setFilters] = useState<Filters>({
    district: '',
    type: '',
    priceMin: '',
    priceMax: '',
  })

  const handleSearch = () => {
    const params = new URLSearchParams()
    if (filters.district) params.set('district', filters.district)
    if (filters.type) params.set('type', filters.type)
    if (filters.priceMin) params.set('priceMin', filters.priceMin)
    if (filters.priceMax) params.set('priceMax', filters.priceMax)
    navigate(`/properties?${params.toString()}`)
  }

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        {/* Фон */}
        <div
          className="absolute inset-0 bg-cover bg-center scale-110"
          style={{
            backgroundImage:
              "url('https://upload.wikimedia.org/wikipedia/commons/e/e4/%D0%A3%D1%81%D1%81%D1%83%D1%80%D0%B8%D0%B9%D1%81%D0%BA%D0%B8%D0%B9_%D0%B1%D1%83%D0%BB%D1%8C%D0%B2%D0%B0%D1%80.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-black/60" />

        {/* Контент */}
        <div className="relative z-10 text-center px-4 max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight drop-shadow-lg">
            Найдите дом своей мечты в Хабаровске
          </h1>
          <p className="mt-4 text-gray-200/90 text-lg md:text-xl">
            Мы собрали лучшие предложения недвижимости в вашем городе.
          </p>

          {/* Поисковая панель */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-10 flex flex-col md:flex-row items-center gap-4 bg-white/20 backdrop-blur-md rounded-3xl p-4"
          >
            <Input
              placeholder="Район (например, Центральный)"
              value={filters.district}
              onChange={(e) =>
                setFilters((f) => ({ ...f, district: e.target.value }))
              }
              className="flex-1 min-w-[150px]"
            />

            <select
              className="flex-1 px-4 py-2 bg-white/30 backdrop-blur-md rounded-xl text-white placeholder-gray-200 focus:outline-none"
              value={filters.type}
              onChange={(e) =>
                setFilters((f) => ({ ...f, type: e.target.value }))
              }
            >
              <option value="">Все типы</option>
              <option value="Квартира">Квартира</option>
              <option value="Дом">Дом</option>
              <option value="Таунхаус">Таунхаус</option>
            </select>

            <Input
              type="number"
              placeholder="Цена от, ₽"
              value={filters.priceMin}
              onChange={(e) =>
                setFilters((f) => ({ ...f, priceMin: e.target.value }))
              }
              className="w-32"
            />
            <Input
              type="number"
              placeholder="до, ₽"
              value={filters.priceMax}
              onChange={(e) =>
                setFilters((f) => ({ ...f, priceMax: e.target.value }))
              }
              className="w-32"
            />

            <Button
              onClick={handleSearch}
              className="whitespace-nowrap bg-indigo-500 hover:bg-indigo-400 px-6 py-3 rounded-full shadow-lg text-white"
            >
              Найти
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Рекомендуемые объекты */}
      <section className="max-w-7xl mx-auto px-4 space-y-8">
        <h2 className="text-3xl font-bold text-white drop-shadow-md">
          Рекомендуемые объекты
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {sampleProperties.map((p) => (
            <motion.div
              key={p.id}
              whileHover={{ y: -5, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}
              transition={{ type: 'spring', stiffness: 250 }}
            >
              <PropertyCard
                imageUrl={p.imageUrl}
                price={p.price}
                address={p.address}
                bedrooms={p.bedrooms}
                bathrooms={p.bathrooms}
                onQuickView={() => {
                  /* TODO: открыть модальное окно */
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home