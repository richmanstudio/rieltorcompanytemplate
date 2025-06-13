import React, { useState } from 'react'
import type { FormEvent } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'

export interface PropertyFiltersValues {
  district: string
  type: string
  priceMin: string
  priceMax: string
}

export interface PropertyFiltersProps {
  onApply: (filters: PropertyFiltersValues) => void
}

const PropertyFilters: React.FC<PropertyFiltersProps> = ({ onApply }) => {
  const [district, setDistrict] = useState('')
  const [type, setType] = useState('')
  const [priceMin, setPriceMin] = useState('')
  const [priceMax, setPriceMax] = useState('')

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onApply({ district, type, priceMin, priceMax })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white/20 backdrop-blur-sm rounded-xl p-6 space-y-4"
    >
      {/* Район */}
      <div>
        <label className="block text-sm text-gray-100 mb-1">Район</label>
        <Input
          placeholder="Например, Центральный"
          value={district}
          onChange={(e) => setDistrict(e.target.value)}
        />
      </div>

      {/* Тип недвижимости */}
      <div>
        <label className="block text-sm text-gray-100 mb-1">
          Тип недвижимости
        </label>
        <select
          className="w-full px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value="">Все типы</option>
          <option value="Квартира">Квартира</option>
          <option value="Дом">Дом</option>
          <option value="Таунхаус">Таунхаус</option>
        </select>
      </div>

      {/* Цены */}
      <div className="flex space-x-2">
        <div className="flex-1">
          <label className="block text-sm text-gray-100 mb-1">
            Цена от, ₽
          </label>
          <Input
            type="number"
            placeholder="Минимум"
            value={priceMin}
            onChange={(e) => setPriceMin(e.target.value)}
          />
        </div>
        <div className="flex-1">
          <label className="block text-sm text-gray-100 mb-1">
            до, ₽
          </label>
          <Input
            type="number"
            placeholder="Максимум"
            value={priceMax}
            onChange={(e) => setPriceMax(e.target.value)}
          />
        </div>
      </div>

      <Button type="submit" variant="primary" size="md" className="w-full">
        Применить фильтры
      </Button>
    </form>
  )
}

export default PropertyFilters