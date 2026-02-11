"use client";

import { motion } from "framer-motion";
import { Plane, Clock, ArrowRight } from "lucide-react";
import { useBooking } from "../BookingProvider";

// Mock flight data
const mockFlights = [
  {
    id: "FL001",
    airline: "NEOM Airways",
    flightNumber: "NA 123",
    departure: { airport: "NEOM Bay", code: "NBM", time: "08:30", terminal: "1", gate: "A12" },
    arrival: { airport: "Dubai", code: "DXB", time: "10:45", terminal: "3", gate: "B24" },
    aircraft: "Airbus A350",
    duration: "2h 15m",
    price: { economy: 850, business: 2500, first: 4500 },
    available: { economy: 45, business: 12, first: 6 },
    amenities: ["WiFi", "Entertainment", "Meals", "USB Power"]
  },
  {
    id: "FL002",
    airline: "NEOM Airways",
    flightNumber: "NA 456",
    departure: { airport: "NEOM Bay", code: "NBM", time: "14:20", terminal: "1", gate: "A15" },
    arrival: { airport: "Dubai", code: "DXB", time: "16:35", terminal: "3", gate: "B18" },
    aircraft: "Boeing 787",
    duration: "2h 15m",
    price: { economy: 920, business: 2750, first: 5200 },
    available: { economy: 38, business: 8, first: 4 },
    amenities: ["WiFi", "Entertainment", "Meals", "USB Power", "Lounge Access"]
  },
  {
    id: "FL003",
    airline: "NEOM Airways",
    flightNumber: "NA 789",
    departure: { airport: "NEOM Bay", code: "NBM", time: "18:45", terminal: "1", gate: "A08" },
    arrival: { airport: "Dubai", code: "DXB", time: "21:00", terminal: "3", gate: "B21" },
    aircraft: "Airbus A380",
    duration: "2h 15m",
    price: { economy: 780, business: 2300, first: 4200 },
    available: { economy: 52, business: 15, first: 8 },
    amenities: ["WiFi", "Entertainment", "Meals", "USB Power", "Bed Seats"]
  }
];

export default function FlightSelectionStep() {
  const { state, dispatch } = useBooking();

  const selectFlight = (flight: any, type: 'outbound' | 'return') => {
    const action = type === 'outbound' ? 'SELECT_OUTBOUND_FLIGHT' : 'SELECT_RETURN_FLIGHT';
    dispatch({ type: action as any, payload: flight });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-5xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
          Select Your
          <span className="block text-transparent bg-clip-text neom-text-gradient">
            Flights
          </span>
        </h1>
        <p className="text-xl text-zinc-400">
          Choose from our available flights
        </p>
      </div>

      {/* Outbound Flight Selection */}
      <div className="mb-12">
        <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">
          Outbound Flight
        </h2>
        <div className="space-y-4">
          {mockFlights.map((flight) => (
            <motion.div
              key={flight.id}
              whileHover={{ scale: 1.01 }}
              onClick={() => selectFlight(flight, 'outbound')}
              className={`
                p-6 rounded-2xl border cursor-pointer transition-all
                ${state.selectedFlights.outbound?.id === flight.id
                  ? 'border-neom-gold bg-neom-gold/10'
                  : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
                }
              `}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-black text-neom-gold">{flight.departure.time}</div>
                    <div className="text-sm text-zinc-400">{flight.departure.airport}</div>
                    <div className="text-xs text-zinc-500">Gate {flight.departure.gate}</div>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <Plane className="h-5 w-5 text-zinc-500" />
                    <div className="text-center">
                      <div className="text-sm text-zinc-400">{flight.duration}</div>
                      <div className="text-xs text-zinc-500">{flight.aircraft}</div>
                    </div>
                    <ArrowRight className="h-5 w-5 text-zinc-500" />
                  </div>
                  
                  <div className="text-center">
                    <div className="text-2xl font-black text-neom-gold">{flight.arrival.time}</div>
                    <div className="text-sm text-zinc-400">{flight.arrival.airport}</div>
                    <div className="text-xs text-zinc-500">Gate {flight.arrival.gate}</div>
                  </div>
                </div>
                
                <div className="text-right">
                  <div className="text-sm text-zinc-500 mb-1">{flight.airline}</div>
                  <div className="text-lg font-black text-neom-gold">
                    ${flight.price[state.search.class]}
                  </div>
                  <div className="text-xs text-zinc-400">
                    {flight.available[state.search.class]} seats left
                  </div>
                </div>
              </div>
              
              <div className="mt-4 flex items-center gap-4">
                {flight.amenities.slice(0, 4).map((amenity, i) => (
                  <div key={i} className="text-xs text-zinc-400">
                    {amenity}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Return Flight Selection (if round trip) */}
      {state.search.tripType === 'roundtrip' && (
        <div>
          <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">
            Return Flight
          </h2>
          <div className="space-y-4">
            {mockFlights.map((flight) => (
              <motion.div
                key={flight.id}
                whileHover={{ scale: 1.01 }}
                onClick={() => selectFlight(flight, 'return')}
                className={`
                  p-6 rounded-2xl border cursor-pointer transition-all
                  ${state.selectedFlights.return?.id === flight.id
                    ? 'border-neom-gold bg-neom-gold/10'
                    : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
                  }
                `}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <div className="text-2xl font-black text-neom-gold">{flight.arrival.time}</div>
                      <div className="text-sm text-zinc-400">{flight.arrival.airport}</div>
                      <div className="text-xs text-zinc-500">Gate {flight.arrival.gate}</div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Plane className="h-5 w-5 text-zinc-500" />
                      <div className="text-center">
                        <div className="text-sm text-zinc-400">{flight.duration}</div>
                        <div className="text-xs text-zinc-500">{flight.aircraft}</div>
                      </div>
                      <ArrowRight className="h-5 w-5 text-zinc-500" />
                    </div>
                    
                    <div className="text-center">
                      <div className="text-2xl font-black text-neom-gold">{flight.departure.time}</div>
                      <div className="text-sm text-zinc-400">{flight.departure.airport}</div>
                      <div className="text-xs text-zinc-500">Gate {flight.departure.gate}</div>
                    </div>
                  </div>
                  
                  <div className="text-right">
                    <div className="text-sm text-zinc-500 mb-1">{flight.airline}</div>
                    <div className="text-lg font-black text-neom-gold">
                      ${flight.price[state.search.class]}
                    </div>
                    <div className="text-xs text-zinc-400">
                      {flight.available[state.search.class]} seats left
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </motion.div>
  );
}
