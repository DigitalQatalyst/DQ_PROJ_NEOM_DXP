"use client";

import { motion } from "framer-motion";
import { Luggage, Coffee, Shield, Crown } from "lucide-react";
import { useBooking } from "../BookingProvider";

export default function ServicesStep() {
  const { state, dispatch } = useBooking();

  const toggleService = (service: string) => {
    if (service === 'insurance') {
      dispatch({ 
        type: 'UPDATE_ADDITIONAL_SERVICES', 
        payload: { insurance: !state.additionalServices.insurance }
      });
    } else if (service === 'priority') {
      dispatch({ 
        type: 'UPDATE_ADDITIONAL_SERVICES', 
        payload: { priorityBoarding: !state.additionalServices.priorityBoarding }
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
          Additional
          <span className="block text-transparent bg-clip-text neom-text-gradient">
            Services
          </span>
        </h1>
        <p className="text-xl text-zinc-400">
          Enhance your travel experience with our premium services
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Insurance */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => toggleService('insurance')}
          className={`
            p-8 rounded-2xl border cursor-pointer transition-all
            ${state.additionalServices.insurance
              ? 'border-neom-gold bg-neom-gold/10'
              : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
            }
          `}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl neom-gradient text-neom-black">
              <Shield className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">Travel Insurance</h3>
              <p className="text-neom-gold font-black">$50</p>
            </div>
          </div>
          <p className="text-zinc-400">
            Comprehensive coverage for medical emergencies, trip cancellations, and lost baggage
          </p>
        </motion.div>

        {/* Priority Boarding */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          onClick={() => toggleService('priority')}
          className={`
            p-8 rounded-2xl border cursor-pointer transition-all
            ${state.additionalServices.priorityBoarding
              ? 'border-neom-gold bg-neom-gold/10'
              : 'border-zinc-800 bg-zinc-900/50 hover:border-zinc-700'
            }
          `}
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 rounded-xl neom-gradient text-neom-black">
              <Crown className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-black text-white">Priority Boarding</h3>
              <p className="text-neom-gold font-black">$25</p>
            </div>
          </div>
          <p className="text-zinc-400">
            Skip the lines and board first with exclusive access to priority lanes
          </p>
        </motion.div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-zinc-400">
          Additional services are optional and can be added to enhance your travel experience
        </p>
      </div>
    </motion.div>
  );
}
