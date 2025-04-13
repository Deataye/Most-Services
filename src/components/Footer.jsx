import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';
import Logo1 from '../assets/ethy-verified.png'
import Logo2 from '../assets/cyberessentials_certification-mark_colour.png'
import Logo3 from '../assets/DSI-logo.png'
import Logo4 from '../assets/mkti0073_ELC_logo.png'
export default function Footer() {
  return (
    <footer className="bg-[#0C0A28] text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Column 1: Logo and Contact Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h2 className="text-3xl font-bold">Most Services<span className="text-[#0492D3]">.</span></h2>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <MapPin className="w-5 h-5 mt-1 mr-2 flex-shrink-0" />
                <div className='text-sm font-normal'>
                  <p>6 Charnwood Court,</p>
                  <p>Parc Nantgarw,</p>
                  <p>Cardiff,</p>
                  <p>CF15 7QZ</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="tel:+44(0)345-241-3685" className="hover:text-[#0492D3]">+44 (0)345 241 3685</a>
              </div>
              
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-2 flex-shrink-0" />
                <a href="mailto:enquiries@astutis.com" className="hover:text-[#0492D3]">enquiries@astutis.com</a>
              </div>
            </div>
          </div>
          
          {/* Column 2: Our Courses */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="h-1 w-12 bg-[#0492D3] mb-4"></div>
              <h3 className="text-sm font-bold tracking-wider uppercase">Our Courses</h3>
            </div>
            
            <ul className="space-y-3 text-sm font-normal">
              <li><a href="#" className="hover:text-[#0492D3]">NEBOSH Environmental Certificate</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">NEBOSH International Diploma</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">NEBOSH International Certificate</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">NEBOSH Management for Construction</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">IOSH Working Safely</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">IEMA Certificate</a></li>
            </ul>
          </div>
          
          {/* Column 3: NEBOSH Courses continued */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="h-1 w-12 bg-[#0492D3] mb-4"></div>
              <h3 className="text-sm font-bold tracking-wider uppercase">NEBOSH Courses</h3>
            </div>
            
            <ul className="space-y-3 text-sm font-normal">
              <li><a href="#" className="hover:text-[#0492D3]">NEBOSH National Diploma</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">NEBOSH General Certificate</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">NEBOSH Certificate in Fire Safety</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">IOSH Managing Safely</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">IEMA Foundation Certificate</a></li>
            </ul>
          </div>
          
          {/* Column 4: Learning Methods */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="h-1 w-12 bg-[#0492D3] mb-4"></div>
              <h3 className="text-sm font-bold tracking-wider uppercase">Learning Methods</h3>
            </div>
            
            <ul className="space-y-3 text-sm font-normal">
              <li><a href="#" className="hover:text-[#0492D3]">Online</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">Virtual</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">Classroom</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">OnlinePlus</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">Distance</a></li>
            </ul>
            
            <div className="mt-8 mb-6">
              <div className="h-1 w-12 bg-[#0492D3] mb-4"></div>
              <h3 className="text-sm font-bold tracking-wider uppercase">Help Centre</h3>
            </div>
            
            <ul className="space-y-3 text-sm font-normal">
              <li><a href="#" className="hover:text-[#0492D3]">Exam Hub</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">Study Options</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">Funding Options</a></li>
            </ul>
          </div>
          
          {/* Column 5: Workplace Training */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <div className="h-1 w-12 bg-[#0492D3] mb-4"></div>
              <h3 className="text-sm font-bold tracking-wider uppercase">Workplace Training</h3>
            </div>
            
            <ul className="space-y-3 text-sm font-normal">
              <li><a href="#" className="hover:text-[#0492D3]">Astutis Approved</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">Workplace Training</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">Consultation Service</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">Customised Courses</a></li>
            </ul>
            
            <div className="mt-8 mb-6">
              <div className="h-1 w-12 bg-[#0492D3] mb-4"></div>
              <h3 className="text-sm font-bold tracking-wider uppercase">About Us</h3>
            </div>
            
            <ul className="space-y-3 text-sm font-normal">
              <li><a href="#" className="hover:text-[#0492D3]">Our Teams</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">Reseller Network</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">Join our eNewsletter</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">Why Astutis?</a></li>
              <li><a href="#" className="hover:text-[#0492D3]">Careers</a></li>
            </ul>
          </div>
        </div>
        
        {/* Accreditors Section */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-sm font-bold tracking-wider uppercase mb-4">Accreditors</h4>
          <div className="flex flex-wrap gap-6">
            <div className=" p-2 w-16 h-16 flex items-center justify-center">
              <div className="text-xs text-navy-900"><img src={Logo1} alt="" /></div>
            </div>
            <div className=" p-2 w-16 h-16 flex items-center justify-center">
              <div className="text-xs text-navy-900"><img src={Logo2} alt="" /></div>
            </div>
            <div className=" p-2 w-16 h-16 flex items-center justify-center">
              <div className="text-xs text-navy-900"><img src={Logo3} alt="" /></div>
            </div>
            <div className=" p-2 w-16 h-16 flex items-center justify-center">
              <div className="text-xs text-navy-900"><img src={Logo4} alt="" /></div>
            </div>
          </div>
        </div>
        
        {/* Bottom Links */}
        <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="text-sm hover:text-[#0492D3]">Privacy Policy</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-sm hover:text-[#0492D3]">Terms & Conditions</a>
            <span className="text-gray-500">|</span>
            <a href="#" className="text-sm hover:text-[#0492D3]">Cookies</a>
          </div>
          
          <button className="bg-gray-700 text-white text-sm py-2 px-4 rounded">
            COOKIE SETTINGS
          </button>
        </div>
        
        {/* Chat Button - Fixed to bottom right */}
        <div className="fixed bottom-4 right-4">
          <button className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-lg shadow-lg flex items-center">
            <span className="mr-2">Leave a message</span>
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
}