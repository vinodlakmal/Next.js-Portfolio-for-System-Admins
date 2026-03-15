'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Server, Shield, Globe, Database, Terminal, Zap, MapPin, Mail, Phone, Send, CheckCircle, AlertCircle, Loader, Cloud, Briefcase, Monitor, Cpu, Camera, PhoneCall } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-6">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-blue-700 text-sm font-medium">Available for Career Opportunities & Projects</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
                Vinod <span className="text-blue-600">Lakmal</span>
              </h1>
              <h2 className="text-2xl text-gray-600 font-light mb-6">Systems Administrator | IT Solutions Expert</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Experienced Systems Administrator specializing in infrastructure management, cloud solutions, and full-scale IT operations. Founder of <strong>Merkei Solutions</strong>.
              </p>
              <div className="flex gap-4">
                <Link href="#contact" className="btn-premium px-8 py-4 rounded-xl flex items-center">Contact Me <ArrowRight className="ml-2" size={18} /></Link>
                <Link href="#services" className="px-8 py-4 border-2 border-gray-300 rounded-xl font-semibold hover:border-blue-600 transition-all">View Expertise</Link>
              </div>
            </motion.div>
            
            <div className="flex justify-center">
              <div className="relative w-72 h-72 md:w-96 md:h-96">
                <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl"></div>
                <div className="relative z-10 w-full h-full rounded-2xl bg-white border-8 border-gray-50 shadow-2xl overflow-hidden">
                  <Image 
                    src="/photo.webp" 
                    alt="Vinod Lakmal" 
                    fill 
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Merkei Solutions & Services */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Merkei Solutions & Expertise</h2>
            <p className="text-gray-600">Comprehensive IT Infrastructure & Management Services</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
              <Monitor className="text-blue-600 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Monitoring & Management</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Fully Device Monitoring</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Live System Monitoring</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Asset Management</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> HR Management Systems</li>
              </ul>
            </div>

            <div className="p-8 bg-blue-600 text-white rounded-3xl shadow-xl transform scale-105">
              <Server className="mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Core Infrastructure</h3>
              <ul className="space-y-3 text-blue-50 text-sm">
                <li className="flex items-center gap-2"><CheckCircle size={16} /> Networking & Security</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} /> SMS Gateway Configuration</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} /> Call Center Setup (PBX)</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} /> Cloud VM Administration</li>
              </ul>
            </div>

            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100 hover:shadow-lg transition-all">
              <Shield className="text-blue-600 mb-6" size={32} />
              <h3 className="text-xl font-bold mb-4">Security & Access</h3>
              <ul className="space-y-3 text-gray-600 text-sm">
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> CCTV Configurations</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Fingerprint Configuration</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Access Control Systems</li>
                <li className="flex items-center gap-2"><CheckCircle size={16} className="text-green-500" /> Cybersecurity Audits</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 bg-white p-10 rounded-3xl shadow-sm border border-gray-100">
            <div>
              <h2 className="text-3xl font-bold mb-6">Let&apos;s Connect</h2>
              <p className="text-gray-600 mb-8">Reach out for collaborations, job inquiries, or IT consultations.</p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600"><Mail size={20} /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
                    <p className="font-bold text-gray-900">vinod.lakmal@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600"><MapPin size={20} /></div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Location</p>
                    <p className="font-bold text-gray-900">Colombo, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input type="text" placeholder="Name" required className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition-all" />
              <input type="email" placeholder="Email" required className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition-all" />
              <textarea placeholder="Message" rows={4} className="w-full p-3 rounded-xl border border-gray-200 focus:border-blue-500 outline-none transition-all"></textarea>
              <button className="w-full bg-blue-600 text-white py-4 rounded-xl font-bold hover:bg-blue-700 transition-all flex justify-center items-center">
                {formStatus === 'loading' ? <Loader className="animate-spin" /> : 'Send Message'}
              </button>
              {formStatus === 'success' && <p className="text-green-600 text-center text-sm">Message sent successfully!</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
