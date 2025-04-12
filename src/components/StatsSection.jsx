import { useState, useEffect, useRef } from 'react';

const StatsSection = () => {
  const stats = [
    {
      number: "140000",
      formattedNumber: "140,000",
      title: "Qualified Learners",
      description: "Work with one of the leading HSE training providers in the world."
    },
    {
      number: "70000",
      formattedNumber: "70,000",
      title: "Online Learners",
      description: "We understand how people learn best, and how to remove traditional barriers to learning."
    },
    {
      number: "130",
      formattedNumber: "130",
      title: "Active Countries",
      description: "We have a vibrant international learning community, and deliver services around the world."
    },
    {
      number: "98",
      formattedNumber: "98%",
      title: "Customer Satisfaction",
      description: "We take pride in delivering quality services with complete reassurance for customers."
    }
  ];

  // For tracking if section is in view
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  // For counter states
  const [counters, setCounters] = useState([0, 0, 0, 0]);
  const [completed, setCompleted] = useState(false);
  
  // Function to format numbers with commas
  const formatNumberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  // Set up intersection observer to detect when section is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // If section comes into view and counters not already completed
        if (entry.isIntersecting && !completed) {
          setIsVisible(true);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Trigger when at least 10% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [completed]);

  // Handle counter animation
  useEffect(() => {
    if (!isVisible) return;

    const duration = 1000; // 2 seconds for the animation
    const frameRate = 30; // Updates per second
    const totalFrames = duration / 1000 * frameRate;
    
    let frame = 0;
    const targetValues = stats.map(stat => parseInt(stat.number));

    const timer = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      
      if (frame <= totalFrames) {
        const newCounters = targetValues.map(target => 
          Math.round(progress * target)
        );
        setCounters(newCounters);
      } else {
        // Ensure we reach exactly the target values
        setCounters(targetValues);
        setCompleted(true);
        clearInterval(timer);
      }
    }, 1000 / frameRate);

    return () => clearInterval(timer);
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="bg-white pb-14 px-4 sm:px-6 lg:px-8 font-montserrat">
      <div className="max-w-7xl mx-auto">
        {/* Header with blue underline */}
        <div className="text-center mb-6">
          <h3 className="text-sm font-semibold text-gray-800 uppercase mb-1">WHY ASTUTIS?</h3>
          <div className="w-16 h-1 bg-[#0492D3] mx-auto mb-6"></div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Years of Combined Experience
          </h2>
        </div>

        {/* Description Text */}
        <div className="text-center mb-10">
          <p className="text-gray-700 max-w-3xl mx-auto">
            Led by an experienced management team of industry professionals with a reputation 
            for delivering high-quality training over the last 15 years. We're extremely proud of the 
            reputation we've built. We value all our relationships and the difference we've made to 
            the lives, careers and performance of our customers.
          </p>
        </div>

        {/* Read More Button */}
        <div className="flex justify-center mb-16">
          <button className="bg-[#0492D3] text-white px-6 py-2 rounded-full font-medium hover:bg-purple-700 transition-colors">
            Read More
          </button>
        </div>

        {/* Stats Display - Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
          {stats.slice(0, 2).map((stat, index) => (
            <div key={index} className="flex flex-col">
              <div className="flex items-start mb-2">
                <div className="mr-4">
                  <div className="text-6xl font-bold text-gray-900">
                    {formatNumberWithCommas(counters[index])}
                    {stat.formattedNumber.includes('%') ? '%' : ''}
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mt-2">{stat.title}</div>
                </div>
                <div className="mt-4 text-[#0492D3] text-sm">
                  {stat.description}
                </div>
              </div>
              <div className="h-[2px] bg-[#0492D3] w-full mt-6"></div>
            </div>
          ))}
        </div>

        {/* Stats Display - Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-12">
          {stats.slice(2, 4).map((stat, index) => (
            <div key={index + 2} className="flex flex-col">
              <div className="flex items-start mb-2">
                <div className="mr-4">
                  <div className="text-6xl font-bold text-gray-900">
                    {formatNumberWithCommas(counters[index + 2])}
                    {stat.formattedNumber.includes('%') ? '%' : ''}
                  </div>
                  <div className="text-xl font-semibold text-gray-900 mt-2">{stat.title}</div>
                </div>
                <div className="mt-4 text-[#0492D3] text-sm">
                  {stat.description}
                </div>
              </div>
              <div className="h-[2px] bg-[#0492D3] w-full mt-6"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;