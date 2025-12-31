'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, Heart, Brain, Eye, Bone, Baby, Smile,
  CheckCircle, ArrowRight, Star, MapPin, Calendar, Shield,
  Search, Clock, Phone, Users
} from 'lucide-react';

const specialties = [
  { id: 'primary', name: 'Primary Care', icon: Stethoscope, color: 'from-blue-500 to-cyan-600' },
  { id: 'cardio', name: 'Cardiology', icon: Heart, color: 'from-red-500 to-rose-600' },
  { id: 'neuro', name: 'Neurology', icon: Brain, color: 'from-purple-500 to-violet-600' },
  { id: 'optho', name: 'Ophthalmology', icon: Eye, color: 'from-amber-500 to-orange-600' },
  { id: 'ortho', name: 'Orthopedics', icon: Bone, color: 'from-slate-500 to-gray-600' },
  { id: 'pediatric', name: 'Pediatrics', icon: Baby, color: 'from-pink-500 to-rose-600' },
  { id: 'dental', name: 'Dentistry', icon: Smile, color: 'from-teal-500 to-emerald-600' },
  { id: 'mental', name: 'Mental Health', icon: Brain, color: 'from-indigo-500 to-blue-600' },
];

const stats = [
  { value: '50K+', label: 'Healthcare Providers' },
  { value: '100+', label: 'Specialties' },
  { value: '4.7/5', label: 'Average Rating' },
  { value: '1M+', label: 'Appointments Booked' },
];

const features = [
  { icon: Shield, title: 'Verified Providers', desc: 'All providers are licensed and credential-verified' },
  { icon: Star, title: 'Patient Reviews', desc: 'Read genuine reviews from verified patients' },
  { icon: Calendar, title: 'Easy Booking', desc: 'Book appointments online, 24/7' },
  { icon: Clock, title: 'Wait Times', desc: 'See estimated wait times before you book' },
];

export default function HealthPage() {
  const [selectedSpecialty, setSelectedSpecialty] = useState<string | null>(null);
  const [zipCode, setZipCode] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-teal-950/20 to-slate-950">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center">
                <Stethoscope className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="font-bold text-white text-lg">Javari Health</span>
                <span className="text-teal-400 text-xs block -mt-1">by CR AudioViz AI</span>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <a href="#specialties" className="text-gray-300 hover:text-white transition">Specialties</a>
              <a href="#how-it-works" className="text-gray-300 hover:text-white transition">How It Works</a>
              <a href="#for-providers" className="text-gray-300 hover:text-white transition">For Providers</a>
              <a href="#find" className="px-4 py-2 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-medium rounded-lg hover:opacity-90 transition">
                Find a Doctor
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/20 border border-teal-500/30 rounded-full text-sm text-teal-300 mb-8"
          >
            <Shield className="w-4 h-4" />
            <span>All providers are verified and licensed</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
          >
            Find the Right<br/>
            <span className="bg-gradient-to-r from-teal-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent">
              Healthcare Provider
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-10"
          >
            Search thousands of doctors, dentists, and specialists. 
            Read patient reviews and book appointments online.
          </motion.p>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-3xl mx-auto bg-white/5 border border-white/10 rounded-2xl p-6 mb-16"
          >
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-2">
                <select
                  value={selectedSpecialty || ''}
                  onChange={(e) => setSelectedSpecialty(e.target.value)}
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-teal-500"
                >
                  <option value="">Specialty or Condition</option>
                  {specialties.map(s => (
                    <option key={s.id} value={s.id}>{s.name}</option>
                  ))}
                </select>
              </div>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="ZIP or City"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-teal-500"
                />
              </div>
              <button className="px-6 py-3 bg-gradient-to-r from-teal-600 to-emerald-600 text-white font-semibold rounded-lg hover:opacity-90 transition flex items-center justify-center gap-2">
                <Search className="w-5 h-5" />
                Search
              </button>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4"
          >
            {stats.map((stat, i) => (
              <div key={i} className="p-4 bg-white/5 border border-white/10 rounded-xl">
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Specialties */}
      <section id="specialties" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Browse by Specialty</h2>
            <p className="text-xl text-gray-400">Find the right specialist for your needs</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {specialties.map((specialty, i) => (
              <motion.button
                key={specialty.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                onClick={() => setSelectedSpecialty(specialty.id)}
                className={`p-6 bg-white/5 border rounded-xl text-center transition-all hover:scale-105 ${
                  selectedSpecialty === specialty.id ? 'border-teal-500 bg-teal-500/10' : 'border-white/10'
                }`}
              >
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${specialty.color} mb-4`}>
                  <specialty.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-white">{specialty.name}</h3>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">How It Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Search', desc: 'Enter your specialty, condition, or provider name and location', icon: Search },
              { step: 2, title: 'Compare', desc: 'Review profiles, credentials, patient reviews, and availability', icon: Users },
              { step: 3, title: 'Book', desc: 'Schedule your appointment online or by phone', icon: Calendar },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="relative p-6 bg-slate-900/50 border border-white/10 rounded-2xl"
              >
                <div className="absolute -top-4 left-6 w-8 h-8 bg-gradient-to-r from-teal-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold">
                  {item.step}
                </div>
                <item.icon className="w-10 h-10 text-teal-400 mb-4 mt-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 bg-white/5 border border-white/10 rounded-xl text-center"
              >
                <feature.icon className="w-10 h-10 text-teal-400 mx-auto mb-4" />
                <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-400">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="find" className="py-20 bg-gradient-to-r from-teal-900/50 to-emerald-900/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Find Your Provider?</h2>
          <p className="text-xl text-gray-300 mb-8">Search thousands of verified healthcare professionals</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="/search" className="px-8 py-4 bg-white text-teal-900 font-semibold rounded-xl hover:bg-gray-100 transition flex items-center gap-2">
              Find a Doctor Now
              <ArrowRight className="w-5 h-5" />
            </a>
            <a href="/providers" className="px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition">
              List Your Practice
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <Stethoscope className="w-6 h-6 text-teal-400" />
              <span className="text-white font-semibold">Javari Health</span>
              <span className="text-gray-500">by CR AudioViz AI</span>
            </div>
            <div className="text-sm text-gray-400">
              © {new Date().getFullYear()} CR AudioViz AI, LLC. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
