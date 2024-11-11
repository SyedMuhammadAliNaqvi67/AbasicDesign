'use client'

import { useState } from 'react'
import { ChevronDown, Search, Home, Grid, Clock, User } from 'lucide-react'

export default function MainScreen() {
  const [activeTab, setActiveTab] = useState('Rides')

  return (
    <div className="max-w-[100%] mx-auto bg-white h-screen flex flex-col">
      {/* Header */}
      <header className="px-4 py-2 flex justify-between items-center border-b">
        <div className="flex space-x-4">
          <button 
            className={`font-semibold transition-colors duration-200 ease-in-out ${activeTab === 'Rides' ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => setActiveTab('Rides')}
          >
            Rides
          </button>
          <button 
            className={`font-semibold transition-colors duration-200 ease-in-out ${activeTab === 'Delivery' ? 'text-black' : 'text-gray-400 hover:text-gray-600'}`}
            onClick={() => setActiveTab('Delivery')}
          >
            Delivery
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto px-4 py-2">
        {/* Search Bar */}
        <div className="flex items-center bg-gray-100 rounded-full p-2 mb-4">
          <Search className="text-gray-400 w-5 h-5 mr-2" />
          <input 
            type="text" 
            placeholder="Where to?" 
            className="bg-transparent flex-1 outline-none"
          />
          <button className="flex items-center text-gray-600 text-sm transition-transform duration-200 ease-in-out hover:scale-105">
            Now <ChevronDown className="w-4 h-4 ml-1" />
          </button>
        </div>

        {/* Recent Location */}
        <div className="mb-4">
          <div className="flex items-center mb-2 transition-transform duration-200 ease-in-out hover:translate-x-2 cursor-pointer">
            <Clock className="w-5 h-5 mr-2 text-gray-400" />
            <div>
              <p className="font-semibold">2255 E 23rd St</p>
              <p className="text-sm text-gray-500">Oakland, California</p>
            </div>
          </div>
        </div>

        {/* Event Card */}
        <div className="bg-black text-white rounded-lg p-4 mb-4 transition-transform duration-200 ease-in-out hover:scale-100 cursor-pointer">
          <p className="font-semibold mb-1">Event day in Mission Bay</p>
          <p className="text-sm mb-2">Learn more →</p>
          <div className="w-12 h-12 bg-purple-600 rounded-lg rotate-45 ml-auto"> 

          </div>
        </div>

        {/* Suggestions */}
        <div className="mb-4">
          <div className="flex justify-between items-center mb-2 text-gray-400">
            <h2 className="font-semibold">Suggestions</h2>
            <button className="text-sm text-gray-500 transition-colors duration-200 ease-in-out hover:text-gray-700">See all</button>
          </div>
          <div className="flex space-x-4">
            {['Ride', 'Shuttle', 'Rental cars', 'Hourly'].map((item, index) => (
              <div key={index} className="text-center transition-transform duration-200 text-slate-400 ease-in-out hover:scale-110 cursor-pointer">
                <div className="w-12 h-12 bg-gray-300 rounded-full mb-1"></div>
                <p className="text-xs">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t px-4 py-2">
        <div className="flex justify-between">
          {['Home', 'Services', 'Activity', 'Account'].map((item, index) => (
            <button key={index} className="flex flex-col items-center group">
              {item === 'Home' && <Home className="w-6 h-6 text-gray-400 group-hover:text-blue-500 transition-colors duration-200 ease-in-out" />}
              {item === 'Services' && <Grid className="w-6 h-6  text-gray-400 group-hover:text-blue-500 transition-colors duration-200 ease-in-out" />}
              {item === 'Activity' && <Clock className="w-6 h-6  text-gray-400  group-hover:text-blue-500 transition-colors duration-200 ease-in-out" />}
              {item === 'Account' && <User className="w-6 h-6  text-gray-400 group-hover:text-blue-500 transition-colors duration-200 ease-in-out" />}
              <span className="text-xs group-hover:text-blue-500 transition-colors duration-200 ease-in-out">{item}</span>
            </button>
          ))}
        </div>
      </footer>
    </div>
  )
}
