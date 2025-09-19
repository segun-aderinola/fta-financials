import React from 'react';
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin, ArrowUp, Globe, Shield, TrendingUp } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_50%,rgba(59,130,246,0.2)_0%,transparent_50%)] animate-pulse"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.2)_0%,transparent_50%)] animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500/10 rounded-full blur-2xl animate-pulse" style={{animationDelay: '1s'}}></div>
      
      {/* Main Footer Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info - Enhanced */}
          <div className="col-span-1 md:col-span-2 space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              {/* Logo with Gradient Background */}
              <Link href="/" className="flex items-center space-x-2">
                <Image src="/fta_logo.png" alt="FTA Logo" width={60} height={40} className="h-15 w-40"/>
              </Link>
            </div>
            
            <p className="text-gray-300 leading-relaxed max-w-md text-lg">
              Empowering individuals and businesses to achieve financial freedom through expert financial solutions and
              trusted partnerships.
            </p>
            

            {/* Key Features */}
            <div className="flex flex-wrap gap-4 mt-6">
              <div className="flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">Trusted Partner</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/5 rounded-full px-4 py-2 border border-white/10">
                <TrendingUp className="w-4 h-4 text-green-400" />
                <span className="text-sm text-gray-300">Growth Focused</span>
              </div>
            </div>
          </div>

          {/* Quick Links - Enhanced */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Quick Links
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </h3>
            <ul className="space-y-4">
              {[
                { name: 'Privacy Policy', href: '#' },
                { name: 'Terms of Service', href: '#' },
                { name: 'Sitemap', href: '#' },
                { name: 'GDPR Compliance', href: '#' }
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className="group flex items-center space-x-3 text-gray-300 hover:text-white transition-all duration-300"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="group-hover:translate-x-1 transition-transform duration-300">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info - Enhanced */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-white mb-6 relative">
              Contact Us
              <div className="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400"></div>
            </h3>
            
            <div className="space-y-5">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Address</p>
                  <p className="text-white">No. 1 Olugbesan Close, off Allen Avenue, Ikeja Lagos</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="text-gray-300 font-medium">Phone</p>
                  <p className="text-white">07070650444</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                 <div>
                  <p className="text-gray-300 font-medium">Email</p>
                  <p className="text-white">ftafinancials@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Social Media - Enhanced */}
            <div className="pt-6">
              <p className="text-gray-300 font-medium mb-4">Follow Us</p>
              <div className="flex space-x-4">
                {[
                  { Icon: Linkedin, color: 'from-blue-600 to-blue-400' },
                  { Icon: Facebook, color: 'from-blue-700 to-blue-500' },
                  { Icon: Twitter, color: 'from-sky-500 to-sky-300' }
                ].map(({ Icon, color }, index) => (
                  <a
                    key={index}
                    href="#"
                    className={`group relative w-12 h-12 bg-gradient-to-r ${color} rounded-xl flex items-center justify-center hover:scale-110 hover:rotate-3 transition-all duration-300 shadow-lg hover:shadow-xl`}
                  >
                    <Icon className="w-5 h-5 text-white group-hover:scale-110 transition-transform duration-300" />
                    <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-xl blur opacity-0 group-hover:opacity-50 -z-10 transition-opacity duration-300`}></div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section with Scroll to Top */}
        <div className="border-t border-white/10 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-8">
              <p className="text-gray-400 text-center md:text-left">
                &copy; {year} FTA Financial Company Ltd. All rights reserved.
              </p>
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-green-400" />
                  <span>SSL Secured</span>
                </span>
                <span className="flex items-center space-x-2">
                  <Globe className="w-4 h-4 text-blue-400" />
                  <span>GDPR Compliant</span>
                </span>
              </div>
            </div>
            
            {/* Scroll to Top Button */}
            <button
              className="group w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center hover:scale-110 hover:shadow-2xl transition-all duration-300"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:translate-y-[-2px] transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur opacity-0 group-hover:opacity-50 -z-10 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>
      </div>

      {/* Additional Bottom Glow Effect */}
      <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-blue-500 to-transparent"></div>
    </footer>
  );
}