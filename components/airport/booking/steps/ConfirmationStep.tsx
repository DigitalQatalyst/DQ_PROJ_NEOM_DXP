"use client";

import { motion } from "framer-motion";
import { CheckCircle, Download, Mail, Calendar } from "lucide-react";
import { useBooking } from "../BookingProvider";

export default function ConfirmationStep() {
  const { state } = useBooking();

  if (!state.ui.bookingReference) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto text-center"
    >
      <div className="mb-12">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-24 h-24 mx-auto mb-6 rounded-full neom-gradient flex items-center justify-center"
        >
          <CheckCircle className="h-12 w-12 text-neom-black" />
        </motion.div>
        
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
          Booking
          <span className="block text-transparent bg-clip-text neom-text-gradient">
            Confirmed!
          </span>
        </h1>
        
        <div className="text-2xl font-black text-neom-gold mb-2">
          {state.ui.bookingReference}
        </div>
        <p className="text-xl text-zinc-400">
          Your booking has been successfully completed
        </p>
      </div>

      {/* Booking Details */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-8 mb-8">
        <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">
          Booking Details
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-left">
            <h3 className="text-lg font-black text-neom-gold mb-4">Flight Information</h3>
            
            {state.selectedFlights.outbound && (
              <div className="mb-4">
                <div className="text-white font-medium">
                  {state.selectedFlights.outbound.flightNumber}
                </div>
                <div className="text-zinc-400 text-sm">
                  {state.selectedFlights.outbound.departure.airport} → {state.selectedFlights.outbound.arrival.airport}
                </div>
                <div className="text-zinc-400 text-sm">
                  {state.selectedFlights.outbound.departure.time} - {state.selectedFlights.outbound.arrival.time}
                </div>
              </div>
            )}
            
            {state.selectedFlights.return && (
              <div className="mb-4">
                <div className="text-white font-medium">
                  {state.selectedFlights.return.flightNumber}
                </div>
                <div className="text-zinc-400 text-sm">
                  {state.selectedFlights.return.departure.airport} → {state.selectedFlights.return.arrival.airport}
                </div>
                <div className="text-zinc-400 text-sm">
                  {state.selectedFlights.return.departure.time} - {state.selectedFlights.return.arrival.time}
                </div>
              </div>
            )}
          </div>
          
          <div className="text-left">
            <h3 className="text-lg font-black text-neom-gold mb-4">Passenger Information</h3>
            {state.passengers.map((passenger, index) => (
              <div key={passenger.id} className="mb-2">
                <div className="text-white font-medium">
                  {passenger.firstName} {passenger.lastName}
                </div>
                <div className="text-zinc-400 text-sm">
                  {passenger.email} • {passenger.phone}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-8 mb-8">
        <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">
          Next Steps
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neom-gold/10 flex items-center justify-center">
              <Mail className="h-8 w-8 text-neom-gold" />
            </div>
            <h3 className="text-lg font-black text-white mb-2">Email Confirmation</h3>
            <p className="text-zinc-400 text-sm">
              Check your email for detailed booking information
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neom-gold/10 flex items-center justify-center">
              <Download className="h-8 w-8 text-neom-gold" />
            </div>
            <h3 className="text-lg font-black text-white mb-2">Download Tickets</h3>
            <p className="text-zinc-400 text-sm">
              Access your boarding passes 24 hours before departure
            </p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-neom-gold/10 flex items-center justify-center">
              <Calendar className="h-8 w-8 text-neom-gold" />
            </div>
            <h3 className="text-lg font-black text-white mb-2">Check-in Online</h3>
            <p className="text-zinc-400 text-sm">
              Save time at the airport with online check-in
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button className="px-8 py-4 rounded-full neom-gradient text-neom-black font-black uppercase tracking-widest hover:scale-105 transition-all">
          Download Tickets
        </button>
        <button className="px-8 py-4 rounded-full border-2 border-neom-gold/40 bg-neom-gold/10 text-neom-gold font-black uppercase tracking-widest hover:bg-neom-gold/20 transition-all">
          Email Confirmation
        </button>
        <button className="px-8 py-4 rounded-full border-2 border-zinc-700 bg-zinc-800 text-zinc-400 font-black uppercase tracking-widest hover:border-zinc-600 transition-all">
          Back to Airport
        </button>
      </div>
    </motion.div>
  );
}
