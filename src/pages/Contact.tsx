// src/pages/Contact.tsx

import React from 'react'
import { motion } from 'framer-motion'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import { YMaps, Map, Placemark } from 'react-yandex-maps'
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
} from '@heroicons/react/24/outline'
import Button from '../components/UI/Button'

interface ContactFormValues {
  name: string
  email: string
  message: string
}

const initialValues: ContactFormValues = {
  name: '',
  email: '',
  message: '',
}

const validationSchema = Yup.object({
  name: Yup.string().required('Введите имя'),
  email: Yup.string().email('Неверный email').required('Введите email'),
  message: Yup.string().min(10, 'Сообщение слишком короткое').required('Введите сообщение'),
})

const Contact: React.FC = () => {
  const handleSubmit = (values: ContactFormValues, { resetForm }: { resetForm: () => void }) => {
    console.log('Contact form submitted:', values)
    alert('Спасибо! Ваше сообщение отправлено.')
    resetForm()
  }

  return (
    <div className="min-h-screen bg-black/30 backdrop-blur-md px-4 sm:px-6 lg:px-8 py-16 space-y-12">
      {/* Заголовок */}
      <motion.h1
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-5xl font-extrabold text-white drop-shadow-lg text-center"
      >
        Свяжитесь с нами
      </motion.h1>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Контакты и карта */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg space-y-4">
            <div className="flex items-center text-white">
              <MapPinIcon className="w-6 h-6 text-indigo-300 mr-3" />
              <span>ул. Пушкина, д. 8, оф. 23, Хабаровск</span>
            </div>
            <div className="flex items-center text-white">
              <PhoneIcon className="w-6 h-6 text-indigo-300 mr-3" />
              <a href="tel:+79141234567" className="hover:text-indigo-200">
                +7 (914) 123-45-67
              </a>
            </div>
            <div className="flex items-center text-white">
              <EnvelopeIcon className="w-6 h-6 text-indigo-300 mr-3" />
              <a href="mailto:info@kvartirykhv.ru" className="hover:text-indigo-200">
                info@kvartirykhv.ru
              </a>
            </div>
          </div>

          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="h-80 bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-lg"
          >
            <YMaps>
              <Map
                defaultState={{ center: [48.4802, 135.0713], zoom: 12 }}
                width="100%"
                height="100%"
              >
                <Placemark geometry={[48.4802, 135.0713]} properties={{ hintContent: 'Наш офис' }} />
              </Map>
            </YMaps>
          </motion.div>
        </motion.div>

        {/* Форма обратной связи */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-lg"
        >
          <h2 className="text-2xl font-semibold text-white mb-6">Напишите нам</h2>
          <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
            {({ isSubmitting }) => (
              <Form className="space-y-4">
                <div>
                  <Field
                    name="name"
                    placeholder="Ваше имя"
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl text-white placeholder-gray-300 focus:outline-none"
                  />
                  <ErrorMessage name="name" component="div" className="text-red-400 text-sm mt-1" />
                </div>
                <div>
                  <Field
                    name="email"
                    type="email"
                    placeholder="Ваш email"
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl text-white placeholder-gray-300 focus:outline-none"
                  />
                  <ErrorMessage name="email" component="div" className="text-red-400 text-sm mt-1" />
                </div>
                <div>
                  <Field
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Сообщение"
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm rounded-xl text-white placeholder-gray-300 focus:outline-none resize-none"
                  />
                  <ErrorMessage name="message" component="div" className="text-red-400 text-sm mt-1" />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3 rounded-full shadow-lg"
                >
                  Отправить
                </Button>
              </Form>
            )}
          </Formik>
        </motion.div>
      </div>
    </div>
  )
}

export default Contact