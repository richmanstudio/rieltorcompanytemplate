import React from 'react'
import { motion } from 'framer-motion'
import {
  MapPinIcon,
  HomeIcon,
  BuildingOffice2Icon,
} from '@heroicons/react/24/outline'

export interface PropertyCardProps {
  imageUrl: string
  price: number
  address: string
  bedrooms: number
  bathrooms: number
  onQuickView?: () => void
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  imageUrl,
  price,
  address,
  bedrooms,
  bathrooms,
  onQuickView,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white/20 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden"
    >
      <img
        src={imageUrl}
        alt={address}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 space-y-2">
        {/* Цена */}
        <div className="text-xl font-semibold text-white">
          ₽ {price.toLocaleString('ru-RU')}
        </div>
        {/* Адрес */}
        <div className="flex items-center text-sm text-gray-200">
          <MapPinIcon className="w-4 h-4 mr-1" />
          {address}
        </div>
        {/* Спальни / Ванные */}
        <div className="flex items-center space-x-4 text-gray-200">
          <div className="flex items-center">
            <HomeIcon className="w-5 h-5 mr-1" />
            <span>{bedrooms}</span>
          </div>
          <div className="flex items-center">
            <BuildingOffice2Icon className="w-5 h-5 mr-1" />
            <span>{bathrooms}</span>
          </div>
        </div>
        {/* Быстрый просмотр */}
        {onQuickView && (
          <button
            onClick={onQuickView}
            className="mt-3 w-full text-center px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white rounded-lg font-medium"
          >
            Быстрый просмотр
          </button>
        )}
      </div>
    </motion.div>
  )
}

export default PropertyCard