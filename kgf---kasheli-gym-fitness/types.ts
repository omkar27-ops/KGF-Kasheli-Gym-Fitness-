import React from 'react';

export interface Program {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image?: string;
}

export interface Trainer {
  id: string;
  name: string;
  specialty: string;
  experience: string;
}

export interface Plan {
  id: string;
  name: string;
  price: string;
  features: string[];
  isPopular?: boolean;
}

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
}