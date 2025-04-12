import React from 'react';
import HomepageBanner from '../assets/Homepage-banner.png';

export default function Hero() {
  return (
    <div className="w-full bg-white font-sans">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          
          {/* Left Container - Text Content */}
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
            <div className="relative">
              <div className="absolute top-0 left-0 w-64 h-24 bg-[#0492D3] transform -skew-x-12 -ml-8 -mt-4 z-0 hidden md:block"></div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 relative z-10" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Health, Safety and<br />Environmental Training<br />Programmes
              </h1>
            </div>
            
            <p className="text-lg font-semibold text-gray-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Where every lesson is a chance to make a difference.
            </p>
            
            <p className="text-base text-gray-700 mb-4 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              At Astutis, we stand at the forefront of workplace health, safety, and environmental 
              training. With the trust of over 5,000 corporate clients and a track record of training 
              over 140,000 professionals just like you, we've earned our place as a trusted training 
              partner.
            </p>
            
            <p className="text-base text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Experience exceptional pass rates and enjoy our platinum award-winning customer 
              service, tailored to your success.
            </p>
            
            {/* Course Buttons */}
            <div className="flex flex-wrap font-normal text-sm gap-2 mb-6">
              <button className="px-4 py-2 bg-[#0492D3] text-white rounded-full hover:bg-purple-600 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                All Courses
              </button>
              <button className="px-4 py-2 bg-[#0492D3] text-white rounded-full hover:bg-purple-600 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                NEBOSH Courses
              </button>
              <button className="px-4 py-2 bg-[#0492D3] text-white rounded-full hover:bg-purple-600 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                IEMA Courses
              </button>
              <button className="px-4 py-2 bg-[#0492D3] text-white rounded-full hover:bg-purple-600 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                IOSH Courses
              </button>
              <button className="px-4 py-2 bg-[#0492D3] text-white rounded-full hover:bg-purple-600 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Short Courses
              </button>
            </div>
            
            {/* Action Buttons */}
            <div className="flex gap-4 font-normal text-sm">
              <button className="px-4 py-2 border border-[#0492D3] text-[#0492D3] rounded-full hover:bg-purple-50 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Contact Us
              </button>
              <button className="px-4 py-2 border border-[#0492D3] text-[#0492D3] rounded-full hover:bg-purple-50 transition-colors" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                LMS Login
              </button>
            </div>
          </div>
          
          {/* Right Container - Image */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative">
              <img 
                 src={HomepageBanner}
                alt="Don't Bish Bash Bosh It - NEBOSH IT" 
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
