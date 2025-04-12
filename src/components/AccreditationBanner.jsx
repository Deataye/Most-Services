import React from 'react';
import IEMA from '../assets/IEMALOGO_Training-Centre-web.png'
import IOSH from '../assets/IOSH-logo-02-web.png'
import NEBOSH from '../assets/NEBOSH-Certified-Gold807-web.png'
import Platinum from '../assets/Platinum-Trusted-Service-Award-2025-Badge-1x1.png'
import websitebar from '../assets/website-ribbon_astutis-usps_feefo5.jpg'

export default function AccreditationBanner() {
  return (
    <div className="w-full font-sans">
      {/* Top Accreditors Section */}
      <div className="container mx-auto py-4 px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0">
            <h3 className="text-[#0492D3] font-medium text-sm" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              OFFICIAL ACCREDITORS
            </h3>
          </div>
          
          <div className="flex flex-wrap justify-center md:justify-center gap-4 md:gap-28">
            {/* NEBOSH Logo */}
            <div className="flex items-center">
              <img src={NEBOSH} alt="NEBOSH Learning Partner Gold" className="h-16" />
            </div>
            
            {/* IOSH Logo */}
            <div className="flex items-center">
              <img src={IOSH} alt="IOSH Approved Training Provider" className="h-16" />
            </div>
            
            {/* IEMA Logo */}
            <div className="flex items-center">
              <img src={IEMA} alt="IEMA Training Partner" className="h-16" />
            </div>
            
            {/* Platinum Trusted Service Logo */}
            <div className="flex items-center">
              <img src={Platinum} alt="Feefo Platinum Trusted Service" className="h-16" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Features Bar */}
      <div>
        <img src={websitebar} alt="" />
      </div>
    </div>
  );
}
