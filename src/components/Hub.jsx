import React from 'react';
import Autistis from '../assets/Website_Astutis-Achieves-Cyber-Essentials-Certification-for-2025-2026.jpg'
import Mental from '../assets/Website_Mental-Health-UK-Reports-a-Breakdown-in-Trust-Between-Employers-and-Youn.jpg'
import Howlong from '../assets/How-long-does-the-nebosh-diploma-take-to-complete_blog-1667x875.jpg'
import Howhard from '../assets/How-Hard-is-the-NEBOSH-Diploma-blog_1667x875.jpg'

const Hub = () => {
  const newsItem = {
    date: '10.04.25',
    title: 'Astutis Achieves Cyber Essentials Certification for 2025-2026',
    category: 'NEWS',
    bgImage: Autistis
  };

  const blogs = [
    {
      date: '09.04.25',
      title: 'How Long Does the NEBOSH Diploma Take to Complete?',
      category: 'BLOG',
      bgImage: Howlong
    },
    {
      date: '09.04.25',
      title: 'Mental Health UK Reports a Breakdown in Trust Between Employers and Younger Workers',
      category: 'BLOG',
      bgImage: Mental
    },
    {
      date: '07.04.25',
      title: 'How Hard Is the NEBOSH Diploma to Complete?',
      category: 'BLOG',
      bgImage: Howhard
    }
  ];

  return (
    <div className="bg-gray-900 min-h-screen py-12 px-4 font-montserrat">
      {/* Header Section */}
      <div className="text-center mb-16">
        <div className="w-16 h-1 bg-[#0492D3] mx-auto mb-6"></div>
        <h2 className="text-4xl font-semibold text-white mb-6">
          Astutis Hub
        </h2>
        <p className="text-base text-white mb-12">
          Dive into the Astutis Hub. Here you will find the latest <br /> news, blogs, videos and podcasts.
        </p>
        <button className="bg-[#0492D3] text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors">
          Read The Latest
        </button>
      </div>

      {/* Cards Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-3">
        
        {/* News Card - Left side, spans full height */}
        <div className="md:col-span-5 p-2  bg-white rounded-lg overflow-hidden">
          <div className="relative overflow-hidden h-50">
            <img 
              src={newsItem.bgImage} 
              alt="News background" 
              className="w-full h-full object-cover  rounded-lg "
            />
           
          </div>
          <div className="p-6">
            <div className="flex items-center mb-2 text-xs">
              <span className="font-semibold text-gray-600">NEWS</span>
              <span className="mx-2 text-gray-400">|</span>
              <span className="text-gray-600">{newsItem.date}</span>
            </div>
            <h3 className="text-xl font-bold text-gray-900">{newsItem.title}</h3>
          </div>
        </div>
        
        {/* Middle Column - Blog */}
        <div className="md:col-span-3  flex flex-col space-y-6">
          {/* First Blog Card */}
          <div className="bg-white p-2  rounded-lg overflow-hidden h-full">
            <div className="relative  overflow-hidden h-36">
              <img 
                src={blogs[0].bgImage} 
                alt="Blog background" 
                className="w-full h-ful rounded-lg object-cover"
              />
              
            </div>
            <div className="p-4">
              <div className="mb-2 text-xs">
                <div className="flex items-center">
                  <span className="font-semibold text-gray-600">BLOG</span>
                  <span className="mx-2 text-gray-400">|</span>
                  <span className="text-gray-600">{blogs[0].date}</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900">How Long Does the NEBOSH Diploma Take to Complete?</h3>
            </div>
          </div>
        </div>
        
        {/* Right Column - Multiple Blog Posts */}
        <div className="md:col-span-4 flex flex-col space-y-6">
          {/* Second Blog Card - White background */}
          <div className="bg-white rounded-lg p-2 overflow-hidden flex flex-row">
            <div className="w-1/2">
              <div className="relative overflow-hidden h-full">
                <img 
                  src={blogs[1].bgImage} 
                  alt="Blog background" 
                  className="w-full h-full rounded-lg  object-cover"
                />
                
              </div>
            </div>
            <div className="w-1/2 p-4">
              <div className="text-xs mb-1">
                <span className="font-semibold text-gray-600">BLOG</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-600">{blogs[1].date}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900">Mental Health UK Reports a Breakdown in Trust Between Employers and Younger Workers</h3>
            </div>
          </div>
          
          {/* Third Blog Card - White background */}
          <div className="bg-white rounded-lg p-2 overflow-hidden flex flex-row">
            <div className="w-1/2 ">
              <div className="relative overflow-hidden h-full">
                <img 
                  src={blogs[2].bgImage} 
                  alt="Blog background" 
                  className="w-full h-full rounded-lg object-left object-cover"
                />
                
              </div>
            </div>
            <div className="w-1/2 p-4">
              <div className="text-xs mb-1">
                <span className="font-semibold text-gray-600">BLOG</span>
                <span className="mx-2 text-gray-400">|</span>
                <span className="text-gray-600">{blogs[2].date}</span>
              </div>
              <h3 className="text-base font-bold text-gray-900">How Hard Is the NEBOSH Diploma to Complete?</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hub;