import React from 'react'
import { Link } from 'react-router-dom'
import { Cloud, BarChart2, TrendingUp, Thermometer } from 'lucide-react'

const DataSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Real-Time Data Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Access up-to-date information on weather conditions and foreign exchange rates
            across the Philippines.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Weather Card */}
          <Link
            to="/data/weather"
            className="group bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
          >
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Weather Forecast</h3>
              <Cloud className="h-10 w-10 text-white opacity-80" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <Thermometer className="h-5 w-5 text-blue-600 mr-2" />
                  <span className="text-gray-700 font-medium">Real-time conditions</span>
                </div>
                <span className="text-blue-600 font-semibold">View →</span>
              </div>
              <p className="text-gray-600">
                Get current weather conditions and forecasts for major cities across the Philippines.
                Plan your day with accurate temperature readings and weather alerts.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Manila</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Cebu</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">Davao</span>
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">More Cities</span>
              </div>
            </div>
          </Link>

          {/* Forex Card */}
          <Link
            to="/data/forex"
            className="group bg-white rounded-xl shadow-md overflow-hidden transition-transform hover:shadow-lg hover:-translate-y-1"
          >
            <div className="bg-gradient-to-r from-green-500 to-green-700 p-6 flex justify-between items-center">
              <h3 className="text-2xl font-bold text-white">Forex Rates</h3>
              <BarChart2 className="h-10 w-10 text-white opacity-80" />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <TrendingUp className="h-5 w-5 text-green-600 mr-2" />
                  <span className="text-gray-700 font-medium">Live exchange rates</span>
                </div>
                <span className="text-green-600 font-semibold">View →</span>
              </div>
              <p className="text-gray-600">
                Track foreign exchange rates from Bangko Sentral ng Pilipinas (BSP).
                Convert currencies and view historical rate trends for major world currencies.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">USD</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">EUR</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">JPY</span>
                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">More Currencies</span>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default DataSection
