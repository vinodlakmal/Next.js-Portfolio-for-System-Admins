'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Server, Shield, Globe, Database, Terminal, Zap, MapPin, Mail, Phone, Send, CheckCircle, AlertCircle, Loader, Cloud, Cpu } from "lucide-react";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Home() {
  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    try {
      // Note: Make sure you have a contact API setup or use a service like Formspree
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus('success');
        setStatusMessage('Thank you! Your message has been sent successfully.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setFormStatus('error');
        setStatusMessage('Something went wrong. Please try again.');
      }
    } catch (error) {
      setFormStatus('error');
      setStatusMessage('Network error. Please try again.');
    }
  };

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vinod Lakmal",
    "jobTitle": "Systems Administrator",
    "description": "Certified Google Associate Engineer and Azure specialist experienced in Cloud Infrastructure and SMS Gateways.",
    "knowsAbout": [
      "System Administration",
      "Microsoft Azure",
      "Google Cloud Platform",
      "Jasmin SMS Gateway",
      "Cybersecurity",
      "Network Security"
    ]
  };

  return (
    <div className="min-h-screen">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 md:py-20 overflow-hidden">
        <div className="relative container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full border border-blue-200">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-blue-700 text-sm font-medium">Available for Freelance Projects</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Hi, I&apos;m <span className="text-gradient-premium">Vinod Lakmal</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-gray-600 font-light">Systems Administrator & Cloud Engineer</h2>
              <p className="text-lg text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Specializing in robust cloud infrastructure, cybersecurity management, and enterprise SaaS administration. 
                Expertise in **Microsoft Azure**, **Google Cloud**, and **DigitalOcean**.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start">
                <Link href="#contact" className="btn-premium px-8 py-4 text-lg flex items-center justify-center">
                  Work With Me <ArrowRight className="ml-2" size={18} />
                </Link>
                <Link href="#experience" className="px-8 py-4 border-2 border-gray-300 rounded-xl text-gray-700 font-semibold hover:border-blue-500 transition-all text-center">
                  View Projects
                </Link>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }} className="flex justify-center lg:justify-end">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl"></div>
                <div className="relative z-10 w-full h-full rounded-full bg-white border-4 border-gray-100 p-2 shadow-2xl overflow-hidden">
                   {/* Replace with your image in /public/photo.webp */}
                  <Image src="/photo.webp" alt="Vinod Lakmal" width={320} height={320} className="w-full h-full object-cover rounded-full" priority />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical Expertise</h2>
            <div className="h-1.5 w-20 bg-blue-600 mx-auto rounded-full"></div>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Cloud size={32} />, title: "Cloud Platforms", skills: ["Microsoft Azure", "Google Cloud (Associate)", "DigitalOcean", "Virtualization"] },
              { icon: <Shield size={32} />, title: "Security & Admin", skills: ["Cybersecurity Management", "SaaS Administration", "Network Security", "Azure Fundamentals"] },
              { icon: <Terminal size={32} />, title: "Specialized Tools", skills: ["Jasmin SMS Gateway", "Infrastructure Monitoring", "Shell Scripting", "API Integration"] }
            ].map((item, i) => (
              <div key={i} className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all">
                <div className="text-blue-600 mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <ul className="space-y-2 text-gray-600">
                  {item.skills.map((s, j) => <li key={j} className="flex items-center"><CheckCircle size={16} className="text-green-500 mr-2" /> {s}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience / Projects Section */}
      <section id="experience" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center mb-12">Featured Project</h2>
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-3xl shadow-lg border border-gray-100">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="bg-blue-600 p-6 rounded-2xl text-white">
                <Zap size={48} />
              </div>
              <div>
                <span className="text-blue-600 font-bold tracking-widest text-sm uppercase">Recent Milestone</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">Jasmin SMS Gateway Integration</h3>
                <p className="text-gray-600 text-lg mb-6">
                  Successfully deployed and configured a Jasmin SMS Gateway on an **Azure VM** for automated OTP delivery. 
                  Focused on high throughput, security, and seamless client integration.
                </p>
                <div className="flex gap-3">
                  <span className="px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium">Azure Cloud</span>
                  <span className="px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium">SMS Gateway</span>
                  <span className="px-4 py-1.5 bg-gray-100 rounded-full text-sm font-medium">Linux Admin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold mb-6">Let&apos;s Connect</h2>
              <p className="text-gray-600 text-lg mb-8">
                Looking for a Systems Administrator or Cloud Engineer for your next project? 
                Feel free to reach out for consultations or collaborations.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600"><Mail size={20} /></div>
                  <span>vinod.lakmal@gmail.com</span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-50 rounded-lg text-blue-600"><MapPin size={20} /></div>
                  <span>Sri Lanka</span>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-4 bg-gray-50 p-8 rounded-2xl">
              <input type="text" name="name" placeholder="Name" required className="w-full p-3 rounded-lg border border-gray-200" onChange={handleInputChange} />
              <input type="email" name="email" placeholder="Email" required className="w-full p-3 rounded-lg border border-gray-200" onChange={handleInputChange} />
              <textarea name="message" placeholder="How can I help you?" rows={4} required className="w-full p-3 rounded-lg border border-gray-200" onChange={handleInputChange}></textarea>
              <button type="submit" className="w-full btn-premium py-4 font-bold flex justify-center items-center">
                {formStatus === 'loading' ? <Loader className="animate-spin" /> : 'Send Message'}
              </button>
              {statusMessage && <p className={`text-center ${formStatus === 'success' ? 'text-green-600' : 'text-red-600'}`}>{statusMessage}</p>}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
