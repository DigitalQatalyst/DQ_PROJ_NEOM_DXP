"use client";

import { motion } from "framer-motion";
import { User, Plus, X, Calendar, Globe } from "lucide-react";
import { useBooking } from "../BookingProvider";
import { useState } from "react";

export default function PassengerStep() {
  const { state, dispatch } = useBooking();
  const [activePassenger, setActivePassenger] = useState<string | null>(null);

  const totalPassengers = state.search.passengers.adults + 
                         state.search.passengers.children + 
                         state.search.passengers.infants;

  // Initialize passengers if not already done
  React.useEffect(() => {
    if (state.passengers.length === 0 && totalPassengers > 0) {
      const newPassengers = Array.from({ length: totalPassengers }, (_, i) => ({
        id: `passenger-${i + 1}`,
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        dateOfBirth: '',
        passportNumber: '',
        nationality: '',
        seatClass: state.search.class,
        specialAssistance: '',
        mealPreference: '',
      }));
      newPassengers.forEach(p => dispatch({ type: 'ADD_PASSENGER', payload: p }));
    }
  }, [totalPassengers, state.passengers.length, state.search.class, dispatch]);

  const updatePassenger = (id: string, field: string, value: string) => {
    dispatch({ 
      type: 'UPDATE_PASSENGER', 
      payload: { id, data: { [field]: value } }
    });
  };

  const removePassenger = (id: string) => {
    dispatch({ type: 'REMOVE_PASSENGER', payload: id });
  };

  const addPassenger = () => {
    const newPassenger = {
      id: `passenger-${Date.now()}`,
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      dateOfBirth: '',
      passportNumber: '',
      nationality: '',
      seatClass: state.search.class,
      specialAssistance: '',
      mealPreference: '',
    };
    dispatch({ type: 'ADD_PASSENGER', payload: newPassenger });
    setActivePassenger(newPassenger.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
          Passenger
          <span className="block text-transparent bg-clip-text neom-text-gradient">
            Information
          </span>
        </h1>
        <p className="text-xl text-zinc-400">
          Please provide details for all travelers
        </p>
      </div>

      {/* Passenger Tabs */}
      <div className="flex flex-wrap gap-2 mb-8">
        {state.passengers.map((passenger, index) => (
          <button
            key={passenger.id}
            onClick={() => setActivePassenger(passenger.id)}
            className={`
              px-4 py-2 rounded-full font-black uppercase tracking-widest transition-all
              ${activePassenger === passenger.id
                ? 'neom-gradient text-neom-black'
                : 'border border-zinc-700 bg-zinc-900/50 text-zinc-400 hover:border-zinc-600'
              }
            `}
          >
            Passenger {index + 1}
          </button>
        ))}
        {state.passengers.length < 9 && (
          <button
            onClick={addPassenger}
            className="px-4 py-2 rounded-full border border-neom-gold/40 bg-neom-gold/10 text-neom-gold hover:bg-neom-gold/20 transition-all"
          >
            <Plus className="h-4 w-4 inline mr-2" />
            Add
          </button>
        )}
      </div>

      {/* Passenger Forms */}
      <div className="space-y-8">
        {state.passengers.map((passenger, index) => (
          <motion.div
            key={passenger.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`
              bg-zinc-900/50 border rounded-[2.5rem] p-8 backdrop-blur-sm
              ${activePassenger === passenger.id ? 'border-neom-gold' : 'border-zinc-800'}
            `}
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-black text-white uppercase tracking-widest">
                Passenger {index + 1}
              </h3>
              {state.passengers.length > 1 && (
                <button
                  onClick={() => removePassenger(passenger.id)}
                  className="p-2 rounded-full border border-red-500/40 bg-red-500/10 text-red-400 hover:bg-red-500/20 transition-all"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-4">
                  Personal Information
                </h4>
                
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">First Name *</label>
                  <input
                    type="text"
                    value={passenger.firstName}
                    onChange={(e) => updatePassenger(passenger.id, 'firstName', e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-neom-gold transition-colors"
                    placeholder="Enter first name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Last Name *</label>
                  <input
                    type="text"
                    value={passenger.lastName}
                    onChange={(e) => updatePassenger(passenger.id, 'lastName', e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-neom-gold transition-colors"
                    placeholder="Enter last name"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Email *</label>
                  <input
                    type="email"
                    value={passenger.email}
                    onChange={(e) => updatePassenger(passenger.id, 'email', e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-neom-gold transition-colors"
                    placeholder="email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Phone *</label>
                  <input
                    type="tel"
                    value={passenger.phone}
                    onChange={(e) => updatePassenger(passenger.id, 'phone', e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-neom-gold transition-colors"
                    placeholder="+1 234 567 8900"
                  />
                </div>
              </div>

              {/* Travel Information */}
              <div className="space-y-4">
                <h4 className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-4">
                  Travel Information
                </h4>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Date of Birth *</label>
                  <input
                    type="date"
                    value={passenger.dateOfBirth}
                    onChange={(e) => updatePassenger(passenger.id, 'dateOfBirth', e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-neom-gold transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Passport Number *</label>
                  <input
                    type="text"
                    value={passenger.passportNumber}
                    onChange={(e) => updatePassenger(passenger.id, 'passportNumber', e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-neom-gold transition-colors"
                    placeholder="Enter passport number"
                  />
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Nationality *</label>
                  <select
                    value={passenger.nationality}
                    onChange={(e) => updatePassenger(passenger.id, 'nationality', e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-neom-gold transition-colors"
                  >
                    <option value="">Select nationality</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="SA">Saudi Arabia</option>
                    <option value="AE">United Arab Emirates</option>
                    <option value="IN">India</option>
                    <option value="CN">China</option>
                    <option value="JP">Japan</option>
                    <option value="DE">Germany</option>
                    <option value="FR">France</option>
                    <option value="AU">Australia</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Seat Class</label>
                  <select
                    value={passenger.seatClass}
                    onChange={(e) => updatePassenger(passenger.id, 'seatClass', e.target.value as any)}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-neom-gold transition-colors"
                  >
                    <option value="economy">Economy</option>
                    <option value="business">Business</option>
                    <option value="first">First Class</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Additional Options */}
            <div className="mt-6 pt-6 border-t border-zinc-800">
              <h4 className="text-sm font-black uppercase tracking-widest text-zinc-400 mb-4">
                Additional Options
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Special Assistance</label>
                  <select
                    value={passenger.specialAssistance}
                    onChange={(e) => updatePassenger(passenger.id, 'specialAssistance', e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-neom-gold transition-colors"
                  >
                    <option value="">None</option>
                    <option value="wheelchair">Wheelchair assistance</option>
                    <option value="hearing">Hearing assistance</option>
                    <option value="vision">Vision assistance</option>
                    <option value="medical">Medical equipment</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-2">Meal Preference</label>
                  <select
                    value={passenger.mealPreference}
                    onChange={(e) => updatePassenger(passenger.id, 'mealPreference', e.target.value)}
                    className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-neom-gold transition-colors"
                  >
                    <option value="">Standard</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="halal">Halal</option>
                    <option value="kosher">Kosher</option>
                    <option value="gluten-free">Gluten-free</option>
                  </select>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
