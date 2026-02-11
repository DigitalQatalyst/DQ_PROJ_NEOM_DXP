"use client";

import React, { createContext, useContext, useReducer, ReactNode } from 'react';

// Types
export interface Flight {
  id: string;
  airline: string;
  flightNumber: string;
  departure: {
    airport: string;
    code: string;
    time: string;
    terminal: string;
    gate: string;
  };
  arrival: {
    airport: string;
    code: string;
    time: string;
    terminal: string;
    gate: string;
  };
  aircraft: string;
  duration: string;
  price: {
    economy: number;
    business: number;
    first: number;
  };
  available: {
    economy: number;
    business: number;
    first: number;
  };
  amenities: string[];
}

export interface Passenger {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  passportNumber: string;
  nationality: string;
  seatClass: 'economy' | 'business' | 'first';
  seatNumber?: string;
  specialAssistance?: string;
  mealPreference?: string;
}

export interface BookingState {
  // Search State
  search: {
    origin: string;
    destination: string;
    departureDate: string;
    returnDate?: string;
    passengers: {
      adults: number;
      children: number;
      infants: number;
    };
    tripType: 'oneway' | 'roundtrip' | 'multicity';
    class: 'economy' | 'business' | 'first';
  };
  
  // Flight Selection
  selectedFlights: {
    outbound?: Flight;
    return?: Flight;
  };
  
  // Passenger Information
  passengers: Passenger[];
  
  // Additional Services
  additionalServices: {
    seats: Array<{
      passengerId: string;
      seatNumber: string;
      price: number;
    }>;
    baggage: Array<{
      passengerId: string;
      type: 'carryon' | 'checked' | 'sports';
      weight: number;
      price: number;
    }>;
    meals: Array<{
      passengerId: string;
      mealType: string;
      price: number;
    }>;
    insurance: boolean;
    priorityBoarding: boolean;
  };
  
  // Payment
  payment: {
    method: 'card' | 'paypal' | 'crypto';
    cardDetails?: {
      number: string;
      expiry: string;
      cvv: string;
      holderName: string;
    };
    billingAddress: {
      street: string;
      city: string;
      country: string;
      zipCode: string;
    };
  };
  
  // UI State
  ui: {
    currentStep: number;
    isLoading: boolean;
    errors: Record<string, string>;
    isComplete: boolean;
    bookingReference?: string;
  };
}

// Action Types
type BookingAction =
  | { type: 'UPDATE_SEARCH'; payload: Partial<BookingState['search']> }
  | { type: 'SELECT_OUTBOUND_FLIGHT'; payload: Flight }
  | { type: 'SELECT_RETURN_FLIGHT'; payload: Flight }
  | { type: 'UPDATE_PASSENGER'; payload: { id: string; data: Partial<Passenger> } }
  | { type: 'ADD_PASSENGER'; payload: Passenger }
  | { type: 'REMOVE_PASSENGER'; payload: string }
  | { type: 'UPDATE_ADDITIONAL_SERVICES'; payload: Partial<BookingState['additionalServices']> }
  | { type: 'UPDATE_PAYMENT'; payload: Partial<BookingState['payment']> }
  | { type: 'SET_STEP'; payload: number }
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: { field: string; message: string } }
  | { type: 'CLEAR_ERRORS' }
  | { type: 'COMPLETE_BOOKING'; payload: string }
  | { type: 'RESET_BOOKING' };

// Initial State
const initialState: BookingState = {
  search: {
    origin: '',
    destination: '',
    departureDate: '',
    passengers: {
      adults: 1,
      children: 0,
      infants: 0,
    },
    tripType: 'oneway',
    class: 'economy',
  },
  selectedFlights: {},
  passengers: [],
  additionalServices: {
    seats: [],
    baggage: [],
    meals: [],
    insurance: false,
    priorityBoarding: false,
  },
  payment: {
    method: 'card',
    billingAddress: {
      street: '',
      city: '',
      country: '',
      zipCode: '',
    },
  },
  ui: {
    currentStep: 1,
    isLoading: false,
    errors: {},
    isComplete: false,
  },
};

// Reducer
function bookingReducer(state: BookingState, action: BookingAction): BookingState {
  switch (action.type) {
    case 'UPDATE_SEARCH':
      return {
        ...state,
        search: { ...state.search, ...action.payload },
      };
    
    case 'SELECT_OUTBOUND_FLIGHT':
      return {
        ...state,
        selectedFlights: { ...state.selectedFlights, outbound: action.payload },
      };
    
    case 'SELECT_RETURN_FLIGHT':
      return {
        ...state,
        selectedFlights: { ...state.selectedFlights, return: action.payload },
      };
    
    case 'UPDATE_PASSENGER':
      return {
        ...state,
        passengers: state.passengers.map(p =>
          p.id === action.payload.id ? { ...p, ...action.payload.data } : p
        ),
      };
    
    case 'ADD_PASSENGER':
      return {
        ...state,
        passengers: [...state.passengers, action.payload],
      };
    
    case 'REMOVE_PASSENGER':
      return {
        ...state,
        passengers: state.passengers.filter(p => p.id !== action.payload),
      };
    
    case 'UPDATE_ADDITIONAL_SERVICES':
      return {
        ...state,
        additionalServices: { ...state.additionalServices, ...action.payload },
      };
    
    case 'UPDATE_PAYMENT':
      return {
        ...state,
        payment: { ...state.payment, ...action.payload },
      };
    
    case 'SET_STEP':
      return {
        ...state,
        ui: { ...state.ui, currentStep: action.payload },
      };
    
    case 'SET_LOADING':
      return {
        ...state,
        ui: { ...state.ui, isLoading: action.payload },
      };
    
    case 'SET_ERROR':
      return {
        ...state,
        ui: {
          ...state.ui,
          errors: { ...state.ui.errors, [action.payload.field]: action.payload.message },
        },
      };
    
    case 'CLEAR_ERRORS':
      return {
        ...state,
        ui: { ...state.ui, errors: {} },
      };
    
    case 'COMPLETE_BOOKING':
      return {
        ...state,
        ui: {
          ...state.ui,
          isComplete: true,
          bookingReference: action.payload,
        },
      };
    
    case 'RESET_BOOKING':
      return initialState;
    
    default:
      return state;
  }
}

// Context
const BookingContext = createContext<{
  state: BookingState;
  dispatch: React.Dispatch<BookingAction>;
} | null>(null);

// Provider
export function BookingProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(bookingReducer, initialState);

  return (
    <BookingContext.Provider value={{ state, dispatch }}>
      {children}
    </BookingContext.Provider>
  );
}

// Hook
export function useBooking() {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
}

// Utility Functions
export const bookingUtils = {
  // Calculate total price
  calculateTotal: (state: BookingState): number => {
    let total = 0;
    
    // Flight prices
    if (state.selectedFlights.outbound) {
      const basePrice = state.selectedFlights.outbound.price[state.search.class];
      total += basePrice * state.search.passengers.adults;
      total += (basePrice * 0.8) * state.search.passengers.children;
      total += (basePrice * 0.1) * state.search.passengers.infants;
    }
    
    if (state.selectedFlights.return) {
      const basePrice = state.selectedFlights.return.price[state.search.class];
      total += basePrice * state.search.passengers.adults;
      total += (basePrice * 0.8) * state.search.passengers.children;
      total += (basePrice * 0.1) * state.search.passengers.infants;
    }
    
    // Additional services
    state.additionalServices.seats.forEach(seat => total += seat.price);
    state.additionalServices.baggage.forEach(bag => total += bag.price);
    state.additionalServices.meals.forEach(meal => total += meal.price);
    
    if (state.additionalServices.insurance) total += 50;
    if (state.additionalServices.priorityBoarding) total += 25;
    
    return total;
  },
  
  // Validate current step
  validateStep: (state: BookingState, step: number): boolean => {
    switch (step) {
      case 1: // Search
        return !!(state.search.origin && state.search.destination && state.search.departureDate);
      
      case 2: // Flight Selection
        return !!(state.selectedFlights.outbound && (state.search.tripType !== 'roundtrip' || state.selectedFlights.return));
      
      case 3: // Passenger Info
        return state.passengers.length > 0 && state.passengers.every(p => 
          p.firstName && p.lastName && p.email && p.phone && p.dateOfBirth
        );
      
      case 4: // Additional Services
        return true; // Optional step
      
      case 5: // Payment
        return !!(state.payment.method && state.payment.billingAddress.street && 
                 state.payment.billingAddress.city && state.payment.billingAddress.country);
      
      default:
        return false;
    }
  },
  
  // Generate booking reference
  generateReference: (): string => {
    return 'NEOM' + Math.random().toString(36).substr(2, 9).toUpperCase();
  },
};
