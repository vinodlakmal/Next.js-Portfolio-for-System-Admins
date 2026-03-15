'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Server, Shield, Globe, Database, Terminal, Zap, MapPin, Mail, Phone, Send, CheckCircle, AlertCircle, Loader, Cloud, Briefcase, Monitor, Camera, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 md:py-32 overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 sm:gap-16 items-center">
            
            {/* Left Side - Text Content */}
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-blue-700 text-sm font-medium">Verified Systems Administrator</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
                Vinod <span className="text-blue-600">Lakmal</span>
              </h1>
              <h2 className="text-2xl text-gray-600 font-light mb-6 text-gradient-premium">IT Solutions Expert | Colombo, Sri Lanka</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto lg:mx-0">
                Crafting secure, scalable infrastructure with certified expertise in **Azure**, **Google Cloud**, and **Linux** systems. Founder of **Merkei Solutions**.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
                <Link href="#contact" className="btn-premium px-8 py-4 text-lg flex items-center justify-center">
                  Work With Me <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link href="#services" className="px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all text-center">
                  Explore Services
                </Link>
              </div>
            </motion.div>
            
            {/* Right Side - Circle Photo with Framer Motion */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8, delay: 0.2 }} 
              className="flex justify-center lg:justify-end"
            >
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl"></div>
                
                {/* Square Container that becomes Circle */}
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 w-full h-full rounded-2xl bg-white border-8 border-gray-50 shadow-premium overflow-hidden"
                >
                  <Image 
                    src="/vinod-full.png" // Replace with image_9.png uploaded as vinod-full.png in /public
                    alt="Vinod Lakmal - Systems Administrator" 
                    fill 
                    className="object-cover object-top rounded-2xl"
                    priority
                  />
                  
                  {/* Circle border inside the square */}
                  <div className="absolute inset-2 border-4 border-white/40 rounded-full"></div>
                </motion.div>
                
                {/* Decorative floating icon */}
                <div className="absolute -top-6 -right-6 bg-premium-gradient p-4 rounded-xl text-white shadow-lg animate-glow">
                  <Cpu size={24} />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Background decorative wave */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gray-50">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full"><path fill="#f9fafb" fill-opacity="1" d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,192C672,181,768,139,864,133.3C960,128,1056,160,1152,176C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
      </section>

      {/* Merkei Solutions & Services Section - Same as before but inside gray container */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Service items - No change, same as the one I gave you earlier */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
              <Monitor className="text-blue-600 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Monitoring & Management</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Fully Device Monitoring</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Live System Monitoring</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Asset Management</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> HR Management Systems</li>
              </ul>
            </div>
            {/* ... rest of the services from previous code ... */}
          </div>
        </div>
      </section>

      {/* Contact Section - Same as before */}
      <section id="contact" className="py-20 bg-white">
        {/* ... contact section from previous code ... */}
      </section>
    </div>
  );
}
