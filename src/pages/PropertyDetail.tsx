// src/pages/PropertyDetail.tsx

import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import {
  MapPinIcon,
  HomeIcon,
  BuildingOffice2Icon,
  StarIcon,
} from '@heroicons/react/24/outline'
import Button from '../components/UI/Button'

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

// Пример данных
const allProperties: Property[] = [
  {
    id: 1,
    imageUrl: 'https://source.unsplash.com/1200x800/?khabarovsk,apartment',
    price: 3450000,
    address: 'ул. Сернышева, 12, Центральный р-н',
    bedrooms: 2,
    bathrooms: 1,
    type: 'Квартира',
    district: 'Центральный',
  },
  {
    id: 2,
    imageUrl: 'https://source.unsplash.com/1200x800/?khabarovsk,house',
    price: 12700000,
    address: 'ул. Киевская, 3, Индустриальный р-н',
    bedrooms: 4,
    bathrooms: 2,
    type: 'Дом',
    district: 'Индустриальный',
  },
  {
    id: 3,
    imageUrl: 'https://source.unsplash.com/1200x800/?khabarovsk,townhouse',
    price: 7260000,
    address: 'пер. Лесной, 25, Комсомольский р-н',
    bedrooms: 3,
    bathrooms: 2,
    type: 'Таунхаус',
    district: 'Комсомольский',
  },
]

const PropertyDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const [property, setProperty] = useState<Property | null>(null)

  useEffect(() => {
    const p = allProperties.find((p) => String(p.id) === id)
    setProperty(p || null)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [id])

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black/30 backdrop-blur-md">
        <h2 className="text-2xl text-white">Объект не найден</h2>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black/30 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      {/* Hero Image */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="relative rounded-3xl overflow-hidden shadow-2xl"
      >
        <img
          src={property.imageUrl}
          alt={property.address}
          className="w-full h-[60vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        <div className="absolute bottom-6 left-6 text-white space-y-2">
          <h1 className="text-4xl md:text-5xl font-extrabold drop-shadow-lg">
            ₽ {property.price.toLocaleString('ru-RU')}
          </h1>
          <p className="text-lg md:text-xl drop-shadow-md">
            {property.address}
          </p>
        </div>
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 bg-black/40 hover:bg-black/60 text-white rounded-full p-2"
          aria-label="Назад"
        >
          ←
        </button>
      </motion.div>

      {/* Details and Map */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Info */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg space-y-6"
        >
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Характеристики</h2>
            <StarIcon className="w-8 h-8 text-indigo-400" />
          </div>
          <ul className="space-y-4 text-gray-200">
            <li className="flex items-center">
              <HomeIcon className="w-6 h-6 mr-3 text-indigo-300" />
              <span>{property.bedrooms} {property.bedrooms > 1 ? 'спальни' : 'спальня'}</span>
            </li>
            <li className="flex items-center">
              <BuildingOffice2Icon className="w-6 h-6 mr-3 text-indigo-300" />
              <span>{property.bathrooms} {property.bathrooms > 1 ? 'ванных' : 'ванная'}</span>
            </li>
            <li className="flex items-center">
              <MapPinIcon className="w-6 h-6 mr-3 text-indigo-300" />
              <span>{property.district} район</span>
            </li>
          </ul>
          <div className="text-gray-200 space-y-2">
            <p>
              Просторная и светлая {property.type.toLowerCase()} с панорамными окнами и
              продуманной планировкой. Идеально подходит для комфортной жизни в
              центре Хабаровска.
            </p>
            <p>
              В пешей доступности — магазины, школы, парки и остановки общественного транспорта.
            </p>
          </div>
          <Button
            onClick={() => alert('Спасибо за ваш интерес!')}
            className="bg-indigo-500 hover:bg-indigo-400 px-6 py-3 rounded-full shadow-lg text-white"
          >
            Оставить заявку
          </Button>
        </motion.div>

        {/* Map */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-lg overflow-hidden"
        >
          <YMaps>
            <Map
              defaultState={{ center: [48.4802, 135.0713], zoom: 12 }}
              width="100%"
              height="100%"
            >
              <Placemark
                geometry={[48.4802, 135.0713]}
                properties={{ hintContent: property.address }}
              />
            </Map>
          </YMaps>
        </motion.div>
      </div>
    </div>
  )
}

export default PropertyDetail