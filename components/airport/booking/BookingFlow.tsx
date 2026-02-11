"use client";

import { motion } from "framer-motion";
import { Search, Plane, Users, CreditCard, CheckCircle } from "lucide-react";
import { useBooking, bookingUtils } from "./BookingProvider";
import SearchStep from "./steps/SearchStep";
import FlightSelectionStep from "./steps/FlightSelectionStep";
import PassengerStep from "./steps/PassengerStep";
import ServicesStep from "./steps/ServicesStep";
import PaymentStep from "./steps/PaymentStep";
import ConfirmationStep from "./steps/ConfirmationStep";

const steps = [
  { id: 1, name: "Search", icon: Search, description: "Find your flight" },
  { id: 2, name: "Select", icon: Plane, description: "Choose flights" },
  { id: 3, name: "Passengers", icon: Users, description: "Add details" },
  { id: 4, name: "Services", icon: Users, description: "Extra options" },
  { id: 5, name: "Payment", icon: CreditCard, description: "Complete booking" },
];

export default function BookingFlow() {
  const { state, dispatch } = useBooking();

  const handleNextStep = () => {
    if (bookingUtils.validateStep(state, state.ui.currentStep)) {
      dispatch({ type: 'CLEAR_ERRORS' });
      if (state.ui.currentStep < steps.length) {
        dispatch({ type: 'SET_STEP', payload: state.ui.currentStep + 1 });
      }
    } else {
      // Show validation error
      dispatch({ 
        type: 'SET_ERROR', 
        payload: { field: 'step', message: 'Please complete all required fields' }
      });
    }
  };

  const handlePrevStep = () => {
    if (state.ui.currentStep > 1) {
      dispatch({ type: 'SET_STEP', payload: state.ui.currentStep - 1 });
      dispatch({ type: 'CLEAR_ERRORS' });
    }
  };

  const renderStep = () => {
    switch (state.ui.currentStep) {
      case 1:
        return <SearchStep />;
      case 2:
        return <FlightSelectionStep />;
      case 3:
        return <PassengerStep />;
      case 4:
        return <ServicesStep />;
      case 5:
        return <PaymentStep />;
      default:
        return <SearchStep />;
    }
  };

  if (state.ui.isComplete) {
    return <ConfirmationStep />;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Progress Bar */}
      <div className="sticky top-0 z-40 bg-zinc-900 border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-4">
            {/* Step Indicators */}
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => {
                const isActive = state.ui.currentStep === step.id;
                const isCompleted = state.ui.currentStep > step.id;
                const StepIcon = step.icon;

                return (
                  <div key={step.id} className="flex items-center">
                    <div className="flex flex-col items-center">
                      <motion.div
                        className={`
                          w-12 h-12 rounded-full flex items-center justify-center
                          border-2 transition-all duration-300
                          ${isActive 
                            ? 'border-neom-gold bg-neom-gold text-neom-black' 
                            : isCompleted 
                              ? 'border-neom-gold bg-neom-gold text-neom-black'
                              : 'border-zinc-600 bg-zinc-800 text-zinc-400'
                          }
                        `}
                        whileHover={{ scale: 1.05 }}
                      >
                        {isCompleted ? (
                          <CheckCircle className="h-6 w-6" />
                        ) : (
                          <StepIcon className="h-6 w-6" />
                        )}
                      </motion.div>
                      <div className="mt-2 text-center">
                        <div className={`text-xs font-black uppercase tracking-widest ${
                          isActive ? 'text-neom-gold' : isCompleted ? 'text-zinc-300' : 'text-zinc-500'
                        }`}>
                          {step.name}
                        </div>
                        <div className="text-xs text-zinc-500 mt-1">
                          {step.description}
                        </div>
                      </div>
                    </div>
                    
                    {/* Progress Line */}
                    {index < steps.length - 1 && (
                      <div className={`
                        flex-1 h-0.5 mx-4 transition-all duration-300
                        ${isCompleted ? 'bg-neom-gold' : 'bg-zinc-700'}
                      `} />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Progress Bar */}
            <div className="w-full bg-zinc-800 rounded-full h-1">
              <motion.div
                className="neom-gradient h-1 rounded-full transition-all duration-500"
                initial={{ width: '20%' }}
                animate={{ width: `${(state.ui.currentStep / steps.length) * 100}%` }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Error Display */}
      {state.ui.errors.step && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-500/10 border border-red-500/30 text-red-400 px-4 py-3 text-center"
        >
          {state.ui.errors.step}
        </motion.div>
      )}

      {/* Step Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          key={state.ui.currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
        >
          {renderStep()}
        </motion.div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-8 pt-8 border-t border-zinc-800">
          <button
            onClick={handlePrevStep}
            disabled={state.ui.currentStep === 1}
            className={`
              px-6 py-3 rounded-full font-black uppercase tracking-widest transition-all
              ${state.ui.currentStep === 1
                ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                : 'border border-neom-gold/40 bg-neom-gold/10 text-neom-gold hover:bg-neom-gold/20'
              }
            `}
          >
            Previous
          </button>

          <div className="text-center">
            <div className="text-sm text-zinc-500 mb-2">
              Step {state.ui.currentStep} of {steps.length}
            </div>
            {state.selectedFlights.outbound && (
              <div className="text-neom-gold font-black">
                Total: ${bookingUtils.calculateTotal(state).toLocaleString()}
              </div>
            )}
          </div>

          <button
            onClick={handleNextStep}
            disabled={state.ui.isLoading}
            className={`
              px-8 py-3 rounded-full font-black uppercase tracking-widest transition-all
              ${state.ui.isLoading
                ? 'bg-zinc-800 text-zinc-600 cursor-not-allowed'
                : 'neom-gradient text-neom-black hover:scale-105 hover:shadow-2xl hover:shadow-neom-gold/25'
              }
            `}
          >
            {state.ui.isLoading ? 'Processing...' : 
             state.ui.currentStep === steps.length ? 'Complete Booking' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
  );
}
