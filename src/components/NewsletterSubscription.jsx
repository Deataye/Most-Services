import React from 'react'; 
import NewsletterImg from '../assets/Newsletter-news_1667x875.jpg';

export default function NewsletterSubscription() {
  return (
    <div className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8">
          {/* Left Column - Text Content */}
          <div className="w-full lg:w-1/2">
            <div className="w-16 h-1 bg-[#0492D3] mb-6"></div>
            <h2 className="text-3xl font-semibold text-gray-900 mb-6">
              Join the Astutis HSE Professional Community
            </h2>
            <p className="text-gray-700 font-normal  mb-4">
              Join our professional HSE community by subscribing to our newsletter! We're thrilled to 
              offer you exclusive access to the latest industry insights and expert advice tailored just 
              for you.
            </p>
            <p className="text-gray-700 mb-8">
              Find out more and subscribe free of charge by clicking the button below.
            </p>
            <button className="bg-[#0492D3] hover:bg-purple-600 text-white font-medium py-2 px-6 rounded-full transition duration-300">
              Subscribe Now
            </button>
          </div>
          
          {/* Right Column - Image */}
          <div className="w-full lg:w-1/2 mt-8 lg:mt-0">
            <img src={NewsletterImg} alt="Newsletter" />
          </div>
        </div>
      </div>
    </div>
  );
}
