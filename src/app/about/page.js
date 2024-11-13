// Home.js
"use client";

import React from 'react';
import AboutUs from '../../components/about/AboutUs';
import Hero from '../../components/about/Feature';
import { AnimatedTestimonialsDemo } from '../../components/about/teste';

export default function About() {
  return (
    <div className="min-h-screen">
      <main className="pt-20">
        <Hero />
        <AboutUs />
        <AnimatedTestimonialsDemo />
      </main>
    </div>
  );
}
