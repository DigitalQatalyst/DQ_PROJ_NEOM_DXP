"use client";

import { motion } from "framer-motion";
import { CreditCard, MapPin } from "lucide-react";
import { useBooking, bookingUtils } from "../BookingProvider";

export default function PaymentStep() {
  const { state, dispatch } = useBooking();

  const updatePayment = (field: string, value: any) => {
    dispatch({ type: 'UPDATE_PAYMENT', payload: { [field]: value } });
  };

  const updateBillingAddress = (field: string, value: string) => {
    dispatch({ 
      type: 'UPDATE_PAYMENT', 
      payload: { 
        billingAddress: { ...state.payment.billingAddress, [field]: value }
      }
    });
  };

  const handleCompleteBooking = () => {
    dispatch({ type: 'SET_LOADING', payload: true });
    
    // Simulate booking processing
    setTimeout(() => {
      const reference = bookingUtils.generateReference();
      dispatch({ type: 'COMPLETE_BOOKING', payload: reference });
      dispatch({ type: 'SET_LOADING', payload: false });
    }, 2000);
  };

  const total = bookingUtils.calculateTotal(state);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto"
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight mb-4">
          Payment
          <span className="block text-transparent bg-clip-text neom-text-gradient">
            Information
          </span>
        </h1>
        <p className="text-xl text-zinc-400">
          Complete your booking securely
        </p>
      </div>

      {/* Order Summary */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-8 mb-8">
        <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">
          Order Summary
        </h2>
        
        {state.selectedFlights.outbound && (
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white font-medium">
                  {state.selectedFlights.outbound.flightNumber}
                </div>
                <div className="text-zinc-400 text-sm">
                  {state.selectedFlights.outbound.departure.airport} → {state.selectedFlights.outbound.arrival.airport}
                </div>
              </div>
              <div className="text-neom-gold font-black">
                ${state.selectedFlights.outbound.price[state.search.class] * state.search.passengers.adults}
              </div>
            </div>
          </div>
        )}
        
        {state.selectedFlights.return && (
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-white font-medium">
                  {state.selectedFlights.return.flightNumber}
                </div>
                <div className="text-zinc-400 text-sm">
                  {state.selectedFlights.return.departure.airport} → {state.selectedFlights.return.arrival.airport}
                </div>
              </div>
              <div className="text-neom-gold font-black">
                ${state.selectedFlights.return.price[state.search.class] * state.search.passengers.adults}
              </div>
            </div>
          </div>
        )}
        
        {state.additionalServices.insurance && (
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div className="text-white">Travel Insurance</div>
              <div className="text-neom-gold font-black">$50</div>
            </div>
          </div>
        )}
        
        {state.additionalServices.priorityBoarding && (
          <div className="mb-4">
            <div className="flex justify-between items-center">
              <div className="text-white">Priority Boarding</div>
              <div className="text-neom-gold font-black">$25</div>
            </div>
          </div>
        )}
        
        <div className="pt-4 border-t border-zinc-700">
          <div className="flex justify-between items-center">
            <div className="text-xl font-black text-white">Total</div>
            <div className="text-2xl font-black text-neom-gold">${total.toLocaleString()}</div>
          </div>
        </div>
      </div>

      {/* Payment Method */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-8 mb-8">
        <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">
          Payment Method
        </h2>
        
        <div className="grid grid-cols-3 gap-4 mb-6">
          {['card', 'paypal', 'crypto'].map((method) => (
            <button
              key={method}
              onClick={() => updatePayment('method', method)}
              className={`
                p-4 rounded-xl border font-black uppercase tracking-widest transition-all
                ${state.payment.method === method
                  ? 'border-neom-gold bg-neom-gold/10 text-neom-gold'
                  : 'border-zinc-700 bg-zinc-800 text-zinc-400 hover:border-zinc-600'
                }
              `}
            >
              {method === 'card' ? 'Credit Card' : method === 'paypal' ? 'PayPal' : 'Crypto'}
            </button>
          ))}
        </div>

        {state.payment.method === 'card' && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Card Number</label>
              <input
                type="text"
                placeholder="1234 5678 9012 3456"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-neom-gold transition-colors"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-zinc-400 mb-2">Expiry Date</label>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-neom-gold transition-colors"
                />
              </div>
              <div>
                <label className="block text-sm text-zinc-400 mb-2">CVV</label>
                <input
                  type="text"
                  placeholder="123"
                  className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-neom-gold transition-colors"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm text-zinc-400 mb-2">Cardholder Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-neom-gold transition-colors"
              />
            </div>
          </div>
        )}
      </div>

      {/* Billing Address */}
      <div className="bg-zinc-900/50 border border-zinc-800 rounded-[2.5rem] p-8">
        <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-6">
          Billing Address
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-zinc-400 mb-2">Street Address</label>
            <input
              type="text"
              value={state.payment.billingAddress.street}
              onChange={(e) => updateBillingAddress('street', e.target.value)}
              placeholder="123 Main Street"
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-neom-gold transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm text-zinc-400 mb-2">City</label>
            <input
              type="text"
              value={state.payment.billingAddress.city}
              onChange={(e) => updateBillingAddress('city', e.target.value)}
              placeholder="New York"
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-neom-gold transition-colors"
            />
          </div>
          
          <div>
            <label className="block text-sm text-zinc-400 mb-2">Country</label>
            <select
              value={state.payment.billingAddress.country}
              onChange={(e) => updateBillingAddress('country', e.target.value)}
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white focus:outline-none focus:border-neom-gold transition-colors"
            >
              <option value="">Select country</option>
              <option value="US">United States</option>
              <option value="UK">United Kingdom</option>
              <option value="SA">Saudi Arabia</option>
              <option value="AE">United Arab Emirates</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm text-zinc-400 mb-2">ZIP Code</label>
            <input
              type="text"
              value={state.payment.billingAddress.zipCode}
              onChange={(e) => updateBillingAddress('zipCode', e.target.value)}
              placeholder="10001"
              className="w-full px-4 py-3 bg-zinc-800 border border-zinc-700 rounded-xl text-white placeholder-zinc-500 focus:outline-none focus:border-neom-gold transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Complete Booking Button */}
      <div className="mt-8 text-center">
        <button
          onClick={handleCompleteBooking}
          disabled={state.ui.isLoading}
          className={`
            px-12 py-4 rounded-full font-black uppercase tracking-widest transition-all
            ${state.ui.isLoading
              ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
              : 'neom-gradient text-neom-black hover:scale-105 hover:shadow-2xl hover:shadow-neom-gold/25'
            }
          `}
        >
          {state.ui.isLoading ? 'Processing...' : `Complete Booking - $${total.toLocaleString()}`}
        </button>
        
        <p className="text-zinc-500 text-sm mt-4">
          By completing this booking, you agree to our terms and conditions
        </p>
      </div>
    </motion.div>
  );
}
