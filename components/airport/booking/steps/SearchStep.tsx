"use client";

import { motion } from "framer-motion";
import { Search, Calendar, Users, ArrowRight, ArrowLeft } from "lucide-react";
import { useBooking } from "../BookingProvider";
import { useState } from "react";

const popularDestinations = [
  { code: "JFK", city: "New York", country: "USA" },
  { code: "LHR", city: "London", country: "UK" },
  { code: "DXB", city: "Dubai", country: "UAE" },
  { code: "SIN", city: "Singapore", country: "Singapore" },
  { code: "NRT", city: "Tokyo", country: "Japan" },
  { code: "SYD", city: "Sydney", country: "Australia" },
];

export default function SearchStep() {
  const { state, dispatch } = useBooking();
  const [swapAnimation, setSwapAnimation] = useState(false);

  const handleSwapLocations = () => {
    setSwapAnimation(true);
    setTimeout(() => setSwapAnimation(false), 300);
    
    const origin = state.search.origin;
    const destination = state.search.destination;
    dispatch({ type: 'UPDATE_SEARCH', payload: { origin: destination, destination: origin } });
  };

  const handlePassengerChange = (type: 'adults' | 'children' | 'infants', delta: number) => {
    const current = state.search.passengers[type];
    const newValue = Math.max(0, Math.min(9, current + delta));
    dispatch({ 
      type: 'UPDATE_SEARCH', 
      payload: { 
        passengers: { ...state.search.passengers, [type]: newValue }
      } 
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
          Find Your
          <span className="block text-transparent bg-clip-text neom-text-gradient">
            Perfect Flight
          </span>
        </h1>
        <p className="text-xl text-zinc-400">
          Search from our extensive network of destinations worldwide
        </p>
      </div>

      {/* Trip Type Selection */}
      <div className="mb-8">
        <label className="block text-sm font-black uppercase tracking-widest text-zinc-400 mb-4">
          Trip Type
        </label>
        <div className="grid grid-cols-3 gap-4">
          {['oneway', 'roundtrip', 'multicity'].map((type) => (
            <button
              key={type}
              onClick={() => dispatch({ type: 'UPDATE_SEARCH', payload: { tripType: type as any } })}
              className={`
                p-4 rounded-2xl border font-black uppercase tracking-widest transition-all
                ${state.search.tripType === type
                  ? 'border-neom-gold bg-neom-gold/10 text-neom-gold'
                  : 'border-zinc-700 bg-zinc-900/50 text-zinc-400 hover:border-zinc-600'
                }
              `}
            >
              {type === 'oneway' ? 'One Way' : type === 'roundtrip' ? 'Round Trip' : 'Multi-City'}
            </button>
          ))}
        </div>
      </div>

      {/* Location and Date Search */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-8 backdrop-blur-sm">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Origin */}
          <div>
            <label className="block text-sm font-black uppercase tracking-widest text-zinc-400 mb-3">
              From
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="City or Airport"
                value={state.search.origin}
                onChange={(e) => dispatch({ type: 'UPDATE_SEARCH', payload: { origin: e.target.value } })}
                className="w-full px-4 py-4 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-neom-gold transition-colors"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
            </div>
          </div>

          {/* Destination */}
          <div>
            <label className="block text-sm font-black uppercase tracking-widest text-zinc-400 mb-3">
              To
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="City or Airport"
                value={state.search.destination}
                onChange={(e) => dispatch({ type: 'UPDATE_SEARCH', payload: { destination: e.target.value } })}
                className="w-full px-4 py-4 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-neom-gold transition-colors"
              />
              <Search className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
            </div>
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center mb-6">
          <motion.button
            onClick={handleSwapLocations}
            animate={{ rotate: swapAnimation ? 180 : 0 }}
            className="p-3 rounded-full neom-gradient text-neom-black"
          >
            <ArrowRight className="h-5 w-5" />
          </motion.button>
        </div>

        {/* Dates */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-sm font-black uppercase tracking-widest text-zinc-400 mb-3">
              Departure Date
            </label>
            <div className="relative">
              <input
                type="date"
                value={state.search.departureDate}
                onChange={(e) => dispatch({ type: 'UPDATE_SEARCH', payload: { departureDate: e.target.value } })}
                className="w-full px-4 py-4 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-neom-gold transition-colors"
              />
              <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
            </div>
          </div>

          {state.search.tripType === 'roundtrip' && (
            <div>
              <label className="block text-sm font-black uppercase tracking-widest text-zinc-400 mb-3">
                Return Date
              </label>
              <div className="relative">
                <input
                  type="date"
                  value={state.search.returnDate || ''}
                  onChange={(e) => dispatch({ type: 'UPDATE_SEARCH', payload: { returnDate: e.target.value } })}
                  className="w-full px-4 py-4 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-neom-gold transition-colors"
                />
                <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-zinc-500" />
              </div>
            </div>
          )}
        </div>

        {/* Passengers and Class */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Passengers */}
          <div>
            <label className="block text-sm font-black uppercase tracking-widest text-zinc-400 mb-3">
              Passengers
            </label>
            <div className="space-y-3">
              {[
                { type: 'adults' as const, label: 'Adults', age: '12+' },
                { type: 'children' as const, label: 'Children', age: '2-11' },
                { type: 'infants' as const, label: 'Infants', age: 'Under 2' }
              ].map(({ type, label, age }) => (
                <div key={type} className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-medium">{label}</div>
                    <div className="text-xs text-zinc-500">{age}</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => handlePassengerChange(type, -1)}
                      className="w-8 h-8 rounded-full border border-zinc-600 text-zinc-400 hover:border-neom-gold hover:text-neom-gold transition-colors"
                    >
                      -
                    </button>
                    <span className="w-8 text-center text-white font-medium">
                      {state.search.passengers[type]}
                    </span>
                    <button
                      onClick={() => handlePassengerChange(type, 1)}
                      className="w-8 h-8 rounded-full border border-zinc-600 text-zinc-400 hover:border-neom-gold hover:text-neom-gold transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Class */}
          <div>
            <label className="block text-sm font-black uppercase tracking-widest text-zinc-400 mb-3">
              Class
            </label>
            <div className="space-y-3">
              {[
                { value: 'economy' as const, label: 'Economy', desc: 'Standard comfort' },
                { value: 'business' as const, label: 'Business', desc: 'Premium experience' },
                { value: 'first' as const, label: 'First Class', desc: 'Ultimate luxury' }
              ].map(({ value, label, desc }) => (
                <button
                  key={value}
                  onClick={() => dispatch({ type: 'UPDATE_SEARCH', payload: { class: value } })}
                  className={`
                    w-full p-4 rounded-xl border text-left transition-all
                    ${state.search.class === value
                      ? 'border-neom-gold bg-neom-gold/10 text-neom-gold'
                      : 'border-zinc-700 bg-zinc-800 text-zinc-400 hover:border-zinc-600'
                    }
                  `}
                >
                  <div className="font-medium">{label}</div>
                  <div className="text-xs opacity-70">{desc}</div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="mt-12">
        <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">
          Popular Destinations
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {popularDestinations.map((dest) => (
            <button
              key={dest.code}
              onClick={() => dispatch({ type: 'UPDATE_SEARCH', payload: { destination: `${dest.city} (${dest.code})` } })}
              className="p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-neom-gold/50 hover:bg-zinc-900/80 transition-all group"
            >
              <div className="text-neom-gold font-black text-lg">{dest.code}</div>
              <div className="text-white text-sm font-medium">{dest.city}</div>
              <div className="text-zinc-500 text-xs">{dest.country}</div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
