import { FaShoppingBasket, FaUser } from "react-icons/fa";
import { useState, useRef, useEffect } from "react";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState(null);
  const menuRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setActiveMenu(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleMenu = (menu) => {
    setActiveMenu(activeMenu === menu ? null : menu);
  };

  return (
    <header className="bg-white w-full font-[Montserrat] relative">
      {/* Top bar */}
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <div className="text-3xl">
          <img src="/Logo.png" alt="Astutis" />
        </div>

        {/* Search */}
        <div className="flex-grow max-w-sm w-full">
          <input
            type="text"
            placeholder="Search..."
            className="w-full px-5 py-2 rounded-full border border-gray-300 text-sm shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 font-[Montserrat]"
          />
        </div>

        {/* Contact Info */}
        <div className="hidden lg:flex items-center gap-6 text-sm text-[#15122E] font-medium">
          <div className="text-right leading-tight">
            <p>+44 (0)345 241</p>
            <p>3685</p>
          </div>
          <div className="h-6 border-l border-gray-300"></div>
          <div className="uppercase tracking-widest text-xs">
            ENQUIRIES@ASTUTIS.COM
          </div>
        </div>

        {/* Currency and Icons */}
        <div className="flex items-center gap-2">
          <select className="border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none font-[Montserrat]">
            <option>GBP</option>
          </select>

          {/* Cart Button */}
          <button className="bg-[#15122E] text-white p-2 rounded-full">
            <FaShoppingBasket size={16} />
          </button>

          {/* User Button */}
          <button className="bg-[#15122E] text-white p-2 rounded-full">
            <FaUser size={16} />
          </button>

          {/* Buy Button */}
          <button className="bg-gradient-to-r from-[#0492D3] to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold ml-2 font-[Montserrat]">
            Buy Courses
          </button>
        </div>
      </div>

      {/* Nav Links */}
      <nav className="bg-white border-t border-gray-200 font-[Montserrat] relative" ref={menuRef}>
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-28 px-4 py-3 font-semibold text-md text-[#15122E]">
          {/* All Courses */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveMenu('courses')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <a href="#" className={`hover:text-[#0492D3] ${activeMenu === 'courses' ? 'text-[#0492D3]' : ''}`}>
              All Courses
            </a>
          </div>

          {/* Workplace Training */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveMenu('workplace')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <a href="#" className={`hover:text-[#0492D3] ${activeMenu === 'workplace' ? 'text-[#0492D3]' : ''}`}>
              Workplace Training
            </a>
          </div>

          {/* About Us */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveMenu('about')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <a href="#" className={`hover:text-[#0492D3] ${activeMenu === 'about' ? 'text-[#0492D3]' : ''}`}>
              About Us
            </a>
          </div>

          {/* Exam Help Centre */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveMenu('exam')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <a href="#" className={`hover:text-[#0492D3] ${activeMenu === 'exam' ? 'text-[#0492D3]' : ''}`}>
              Exam Help Centre
            </a>
          </div>

          {/* Insights */}
          <div 
            className="relative group"
            onMouseEnter={() => setActiveMenu('insights')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <a href="#" className={`hover:text-[#0492D3] ${activeMenu === 'insights' ? 'text-[#0492D3]' : ''}`}>
              Insights
            </a>
          </div>

          {/* Contact (no dropdown) */}
          <div
            className="relative group"
            onMouseEnter={() => setActiveMenu('contact')}
            onMouseLeave={() => setActiveMenu(null)}
          >
            <a href="#" className="hover:text-[#0492D3]">Contact</a>
          </div>
        </div>

        {/* Dropdown Menus */}
        <div 
          className={`absolute w-full bg-[#15122E] text-white transition-all duration-300 ease-in-out overflow-hidden z-50 ${
            activeMenu ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="max-w-screen-xl mx-auto px-4 py-6">
            {/* All Courses Dropdown */}
            {activeMenu === 'courses' && (
              <div className="grid grid-cols-3 gap-16">
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">ACCREDITATION</h3>
                  <ul className="space-y-3 text-white">
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">NEBOSH Courses</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">IOSH Courses</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">IEMA Courses</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">CDM Courses</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">WORKPLACE TRAINING</h3>
                  <ul className="space-y-3 text-white">
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">In-Company Courses</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">Short Workplace Courses</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">Consultancy Services</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">Customised Courses</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">LEARNING METHOD</h3>
                  <ul className="space-y-3 text-white">
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">Online</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">Virtual</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">Distance</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">OnlinePlus+</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">Classroom</a></li>
                  </ul>
                </div>
              </div>
            )}

            {/* Workplace Training Dropdown */}
            {activeMenu === 'workplace' && (
              <div className="grid grid-cols-3 gap-16">
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">CONSULTATION SERVICE</h3>
                  <p className="text-gray-300">Practical and cost-effective solutions with HSE Professional support.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">CUSTOMISED COURSES</h3>
                  <p className="text-gray-300">A tailored package of support for your workforce.</p>
                </div>
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">WORKPLACE COURSES</h3>
                  <p className="text-gray-300">Off-the-shelf suite of courses designed for your business.</p>
                </div>
              </div>
            )}

            {/* About Us Dropdown */}
            {activeMenu === 'about' && (
              <div className="grid grid-cols-5 gap-4">
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">WHY ASTUTIS?</h3>
                  <p className="text-gray-300">5,000 Corporate Customers</p>
                </div>
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">OUR TEAMS</h3>
                  <p className="text-gray-300">Experienced teams of industry professionals with over 100+ years of combined experience in HSE</p>
                </div>
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">OUR VISION</h3>
                  <p className="text-gray-300">People come first — everything else is secondary</p>
                </div>
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">OUR NEWSLETTER</h3>
                  <p className="text-gray-300">Become an industry leader and stay up-to-date with the latest industry developments!</p>
                </div>
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">CAREERS</h3>
                  <p className="text-gray-300">Interested in working for a leading Global HSE training provider? View our live vacancies</p>
                </div>
              </div>
            )}

            {/* Exam Help Centre Dropdown */}
            {activeMenu === 'exam' && (
              <div className="grid grid-cols-4 gap-8">
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">EXAM HUB</h3>
                  <ul className="space-y-3 text-white">
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">NEBOSH Level 6 Diploma</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">NEBOSH General Certificate</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">IOSH Exams</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">IEMA Foundation</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">Book Your Exam</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">WAYS TO STUDY</h3>
                  <ul className="space-y-3 text-white">
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">Online</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">Virtual</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">In-Company</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">OnlinePlus+</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">Classroom</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">FUNDING OPTIONS</h3>
                  <ul className="space-y-3 text-white">
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">ReAct</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">ELCAS</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">Flexible Skills Programme FSP (Wales)</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">Personal Learning Account</a></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">FAQS</h3>
                  <ul className="space-y-3 text-white">
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">NEBOSH</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">IOSH</a></li>
                    <li><a href="#" className="hover:text-[#0492D3] text-gray-300">IEMA</a></li>
                  </ul>
                </div>
              </div>
            )}

            {/* Insights Dropdown */}
            {activeMenu === 'insights' && (
              <div className="grid grid-cols-3 gap-16">
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">NEWS</h3>
                  <p className="text-gray-300">Stayed informed by keeping up to date with our latest news features</p>
                </div>
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">BLOG</h3>
                  <p className="text-gray-300">Read our thought-leadership articles from across the globe</p>
                </div>
                <div>
                  <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">CASE STUDIES</h3>
                  <p className="text-gray-300">Businesses and individuals have rated us excellent - Read our case studies</p>
                </div>
              </div>
            )}

            {/* Contact Dropdown */}
            {activeMenu === 'contact' && (
              <div className="max-w-2xl">
                <h3 className="font-bold mb-6 text-white pb-2 border-b border-gray-700">CONTACT</h3>
                <p className="text-gray-300">Get in touch - We're here to help. Speak to one of our highly skilled course advisors, who will be happy to help answer any questions you may have.</p>
              </div>
            )}
          </div>
        </div>
      </nav>

      {/* Bottom Bar */}
      <div className="bg-[#15122E] text-white text-sm font-semibold text-center py-2 px-4 flex flex-wrap justify-between items-center max-w-full mx-auto font-[Montserrat]">
        <span>COURSES AVAILABLE ONLINE, VIRTUALLY AND CLASSROOM</span>
        <span>FULLY CERTIFIED NEBOSH, IOSH, IEMA ACCREDITED</span>
        <span>7-DAY CUSTOMER SERVICE</span>
      </div>
    </header>
  );
};

export default Navbar;