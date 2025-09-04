"use client"
import React, { useState } from 'react';
import { CheckCircle, DollarSign, TrendingUp, Shield, Users, Clock, FileText, CreditCard, ArrowRight, Download, Phone, ChevronDown } from "lucide-react";
import { Navigation } from '@/components/navigation';
import { Footer } from '@/components/footer';

export default function ServicesPage() {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      icon: <DollarSign className="h-12 w-12" />,
      title: "Business Loans",
      description: "Flexible financing solutions to fuel your business growth and expansion plans with competitive rates and quick approval.",
      features: [
        "Competitive interest rates starting from 8.5%",
        "Loan amounts from ₦1,000,000 to ₦500,000,000",
        "Quick approval process (24-48 hours)",
        "Flexible repayment terms up to 10 years",
        "No prepayment penalties",
      ],
      requirements: "Minimum 2 years in business, annual revenue of ₦10,000,000+",
      imageUrl: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center",
      stats: { rate: "8.5%", amount: "₦500M", approval: "24hrs" }
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Personal Loans",
      description: "Quick and convenient personal financing for your immediate needs with flexible repayment options.",
      features: [
        "Loan amounts from ₦100,000 to ₦10,000,000",
        "Competitive interest rates",
        "Fast approval within 24 hours",
        "No collateral required",
        "Flexible repayment terms up to 5 years",
      ],
      requirements: "Stable income, good credit history, valid identification",
      imageUrl: "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop&crop=center",
      stats: { rate: "9.5%", amount: "₦10M", approval: "24hrs" }
    },
    {
      icon: <Users className="h-12 w-12" />,
      title: "Group Loans",
      description: "Collective financing solutions for groups, cooperatives, and community organizations with shared responsibility.",
      features: [
        "Group-based lending model",
        "Lower interest rates through shared responsibility",
        "Flexible group sizes (5-20 members)",
        "Financial literacy training included",
        "Progressive loan amounts",
      ],
      requirements: "Registered group/cooperative, group agreement, meeting attendance",
      imageUrl: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&h=400&fit=crop&crop=center",
      stats: { rate: "7.5%", amount: "Group", approval: "Fast" }
    },
    {
      icon: <FileText className="h-12 w-12" />,
      title: "LPO Finance",
      description: "Local Purchase Order financing to help you fulfill contracts and orders without cash flow constraints.",
      features: [
        "Finance up to 90% of LPO value",
        "Quick processing within 48 hours",
        "Competitive financing rates",
        "Direct payment to suppliers",
        "Flexible repayment terms",
      ],
      requirements: "Valid LPO from recognized organization, business registration, supplier agreements",
      imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop&crop=center",
      stats: { rate: "90%", amount: "LPO Value", approval: "48hrs" }
    },
    {
      icon: <TrendingUp className="h-12 w-12" />,
      title: "Loan Syndication",
      description: "Large-scale financing through consortium lending for major projects and business expansion initiatives.",
      features: [
        "Large loan amounts (₦100M+)",
        "Shared risk among multiple lenders",
        "Competitive rates through syndication",
        "Professional structuring and documentation",
        "Ongoing relationship management",
      ],
      requirements: "Established business, major project/expansion plan, financial statements, collateral",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
      stats: { rate: "Large", amount: "₦100M+", approval: "Expert" }
    },
    {
      icon: <CreditCard className="h-12 w-12" />,
      title: "Debt Factoring",
      description: "Convert your outstanding invoices into immediate cash flow for operational needs with competitive advance rates.",
      features: [
        "Advance rates up to 85% of invoice value",
        "Same-day funding available",
        "Credit protection services",
        "Collections management",
        "Online account management",
      ],
      requirements: "B2B invoices, creditworthy customers, minimum monthly invoicing volume",
      imageUrl: "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=600&h=400&fit=crop&crop=center",
      stats: { rate: "85%", amount: "Same Day", approval: "Instant" }
    },
  ];

  return (
    <div className="min-h-screen bg-white">
        <Navigation />
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        * {
          font-family: 'Plus Jakarta Sans', sans-serif;
        }
        .bg-brand-gradient {
          background-image: linear-gradient(270deg, #6a11cb, #2575fc);
        }
        .text-brand-blue {
          color: #2575fc;
        }
        .animate-fade-in {
          animation: fadeIn 0.6s ease-out forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-white to-purple-50 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-7xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Financial Solutions for{' '}
            <span className="text-brand-blue bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Every Business Need
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            From startup funding to enterprise-level financing, we provide comprehensive financial services tailored to
            your business goals and growth aspirations.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <button className="bg-brand-gradient text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              Get Started Today
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Services Section - Zig-Zag Layout */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive financial solutions designed to support your business at every stage of growth.
            </p>
          </div>

          {/* Zig-Zag Service Cards */}
          <div className="space-y-24">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                {/* Content Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-2' : ''} animate-slide-in-left space-y-6`}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-4 bg-brand-gradient rounded-2xl text-white shadow-lg">
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-gray-900">{service.title}</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-6 py-6">
                    {Object.entries(service.stats).map(([key, value], i) => (
                      <div key={i} className="text-center">
                        <div className="text-2xl font-bold text-brand-blue">{value}</div>
                        <div className="text-sm text-gray-500 capitalize">{key}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Expandable Features */}
                  <div className="bg-gray-50 rounded-2xl p-6">
                    <button
                      onClick={() => setExpandedService(expandedService === index ? null : index)}
                      className="flex items-center justify-between w-full text-left"
                    >
                      <h4 className="font-bold text-gray-900 text-lg">Key Features & Requirements</h4>
                      <ChevronDown className={`w-5 h-5 text-brand-blue transition-transform duration-300 ${
                        expandedService === index ? 'rotate-180' : ''
                      }`} />
                    </button>
                    
                    {expandedService === index && (
                      <div className="mt-6 space-y-4 animate-fade-in">
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3">Features:</h5>
                          <ul className="space-y-2">
                            {service.features.map((feature, idx) => (
                              <li key={idx} className="flex items-start gap-3 text-gray-600">
                                <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="pt-4 border-t border-gray-200">
                          <h5 className="font-semibold text-gray-900 mb-2">Requirements:</h5>
                          <p className="text-gray-600">{service.requirements}</p>
                        </div>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-4">
                    <button className="bg-brand-gradient text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    <button className="border-2 border-brand-blue text-brand-blue px-6 py-3 rounded-xl font-semibold hover:bg-brand-blue hover:text-white transition-all duration-300">
                      Get Quote
                    </button>
                  </div>
                </div>

                {/* Image Side */}
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} animate-slide-in-right`}>
                  <div className="relative group">
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-3xl transform rotate-3 group-hover:rotate-6 transition-transform duration-500"></div>
                    <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden group-hover:shadow-3xl transition-shadow duration-500">
                      <img
                        src={service.imageUrl}
                        alt={service.title}
                        className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                      <div className="absolute bottom-6 left-6 right-6">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-4">
                          <h4 className="font-bold text-gray-900 mb-2">{service.title}</h4>
                          <p className="text-sm text-gray-600">Trusted by 1000+ businesses</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple, transparent, and efficient. Get the funding you need in just a few steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Application",
                description: "Submit your application online or speak with our specialists",
                icon: <FileText className="h-8 w-8" />,
                color: "from-blue-500 to-blue-600"
              },
              {
                step: "02",
                title: "Review",
                description: "Our team reviews your application and financial documents",
                icon: <Users className="h-8 w-8" />,
                color: "from-purple-500 to-purple-600"
              },
              {
                step: "03",
                title: "Approval",
                description: "Receive approval decision within 24-48 hours",
                icon: <CheckCircle className="h-8 w-8" />,
                color: "from-green-500 to-green-600"
              },
              {
                step: "04",
                title: "Funding",
                description: "Access your funds and start growing your business",
                icon: <Clock className="h-8 w-8" />,
                color: "from-orange-500 to-orange-600"
              },
            ].map((item, index) => (
              <div key={index} className="relative group animate-fade-in" style={{animationDelay: `${index * 150}ms`}}>
                <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 group-hover:scale-105">
                  <div className="relative mb-6">
                    <div className={`w-16 h-16 bg-gradient-to-r ${item.color} rounded-2xl flex items-center justify-center mx-auto text-white shadow-lg`}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">{item.title}</h3>
                  <p className="text-gray-600 text-center leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        
        <div className="relative max-w-4xl mx-auto text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-blue-100 mb-12 leading-relaxed">
            Our financial experts are ready to help you find the perfect solution for your business needs.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-brand-blue px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2">
              Contact Us Today
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-brand-blue transition-all duration-300 flex items-center justify-center gap-2">
              <Phone className="w-5 h-5" />
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}