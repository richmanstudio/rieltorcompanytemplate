// src/pages/Properties.tsx

import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import PropertyFilters from '../components/Property/PropertyFilters'
import type { PropertyFiltersValues } from '../components/Property/PropertyFilters'
import PropertyCard from '../components/Property/PropertyCard'

interface Property {
  id: number
  imageUrl: string
  price: number
  address: string
  bedrooms: number
  bathrooms: number
  type: string
  district: string
}

// Пример «живых» данных
const allProperties: Property[] = [
  {
    id: 1,
    imageUrl: 'https://source.unsplash.com/400x300/?khabarovsk,apartment',
    price: 3450000,
    address: 'ул. Сернышева, 12',
    bedrooms: 2,
    bathrooms: 1,
    type: 'Квартира',
    district: 'Центральный',
  },
  {
    id: 2,
    imageUrl: 'https://source.unsplash.com/400x300/?khabarovsk,house',
    price: 12700000,
    address: 'ул. Киевская, 3',
    bedrooms: 4,
    bathrooms: 2,
    type: 'Дом',
    district: 'Индустриальный',
  },
  {
    id: 3,
    imageUrl: 'https://source.unsplash.com/400x300/?khabarovsk,townhouse',
    price: 7260000,
    address: 'пер. Лесной, 25',
    bedrooms: 3,
    bathrooms: 2,
    type: 'Таунхаус',
    district: 'Комсомольский',
  },
]

const Properties: React.FC = () => {
  const navigate = useNavigate()
  const { search } = useLocation()
  const params = new URLSearchParams(search)

  // Состояние фильтров и данных
  const [filters, setFilters] = useState<PropertyFiltersValues>({
    district: params.get('district') || '',
    type: params.get('type') || '',
    priceMin: params.get('priceMin') || '',
    priceMax: params.get('priceMax') || '',
  })
  const [filtered, setFiltered] = useState<Property[]>(allProperties)

  // Пересчёт при изменении фильтров
  useEffect(() => {
    setFiltered(
      allProperties.filter((p) => {
        if (filters.district && !p.district.toLowerCase().includes(filters.district.toLowerCase())) return false
        if (filters.type && p.type !== filters.type) return false
        if (filters.priceMin && p.price < Number(filters.priceMin)) return false
        if (filters.priceMax && p.price > Number(filters.priceMax)) return false
        return true
      })
    )
  }, [filters])

  // Применить фильтры и обновить URL
  const handleApply = (values: PropertyFiltersValues) => {
    setFilters(values)
    const q = new URLSearchParams()
    if (values.district) q.set('district', values.district)
    if (values.type) q.set('type', values.type)
    if (values.priceMin) q.set('priceMin', values.priceMin)
    if (values.priceMax) q.set('priceMax', values.priceMax)
    navigate({ pathname: '/properties', search: q.toString() })
  }

  return (
    <div className="min-h-screen bg-black/30 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Заголовок */}
      <motion.h1
        className="text-4xl font-extrabold text-white drop-shadow-lg text-center"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        Объекты
      </motion.h1>

      {/* Панель фильтров */}
      <motion.div
        className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 max-w-3xl mx-auto shadow-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <PropertyFilters onApply={handleApply} />
      </motion.div>

      {/* Active chips */}
      <div className="flex flex-wrap justify-center gap-2">
        {Object.entries(filters).map(
          ([key, val]) =>
            val && (
              <span
                key={key}
                className="bg-indigo-600/80 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-2"
              >
                <span>{`${key === 'district'
                  ? 'Район'
                  : key === 'type'
                  ? 'Тип'
                  : key === 'priceMin'
                  ? 'Цена от'
                  : 'Цена до'
                }: ${val}`}</span>
                <button
                  onClick={() => handleApply({ ...filters, [key]: '' })}
                  className="hover:text-gray-200"
                >
                  ✕
                </button>
              </span>
            )
        )}
      </div>

      {/* Сетка карточек */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: {
            transition: { staggerChildren: 0.1 },
          },
        }}
      >
        {filtered.length ? (
          filtered.map((p) => (
            <motion.div
              key={p.id}
              className="rounded-xl overflow-hidden"
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <PropertyCard
                imageUrl={p.imageUrl}
                price={p.price}
                address={p.address}
                bedrooms={p.bedrooms}
                bathrooms={p.bathrooms}
                onQuickView={() => {
                  // TODO: modal
                }}
              />
            </motion.div>
          ))
        ) : (
          <motion.div
            className="col-span-full text-center text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            Объекты не найдены.
          </motion.div>
        )}
      </motion.div>
    </div>
  )
}

export default Properties