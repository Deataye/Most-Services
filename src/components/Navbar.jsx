import { FaShoppingBasket, FaUser } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="bg-white w-full font-[Montserrat]">
      {/* Top bar */}
      <div className="max-w-screen-xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-4">
        
        {/* Logo */}
        <div className="text-3xl ">
         <img src= "/Logo.png" />
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

      {/* Nav Links with Dropdowns */}
      <nav className="bg-white border-t border-gray-200 font-[Montserrat]">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-center gap-28 px-4 py-3 font-semibold text-md text-[#15122E]">
          
          {/* All Courses Dropdown */}
          <div className="relative group">
            <a href="#" className="hover:text-[#0492D3]">All Courses</a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-6 w-max z-50 -ml-20">
              <div className="flex gap-8">
                {/* Accreditation Column */}
                <div>
                  <h3 className="font-bold mb-3 text-[#0492D3]">ACCREDITATION</h3>
                  <ul className="space-y-2 text-sm">
                    {["NEBOSH Courses", "IOSH Courses", "IEMA Courses", "CDM Courses"].map((item) => (
                      <li key={item}><a href="#" className="hover:text-[#0492D3]">{item}</a></li>
                    ))}
                  </ul>
                </div>

                {/* Workplace Training Column */}
                <div>
                  <h3 className="font-bold mb-3 text-[#0492D3]">WORKPLACE TRAINING</h3>
                  <ul className="space-y-2 text-sm">
                    {["In-Company Courses", "Short Workplace Courses", "Consultancy Services", "Customised Courses"].map((item) => (
                      <li key={item}><a href="#" className="hover:text-[#0492D3]">{item}</a></li>
                    ))}
                  </ul>
                </div>

                {/* Learning Method Column */}
                <div>
                  <h3 className="font-bold mb-3 text-[#0492D3]">LEARNING METHOD</h3>
                  <ul className="space-y-2 text-sm">
                    {["Online", "Virtual", "Distance", "OnlinePlus+", "Classroom"].map((item) => (
                      <li key={item}><a href="#" className="hover:text-[#0492D3]">{item}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Workplace Training Dropdown */}
          <div className="relative group">
            <a href="#" className="hover:text-[#0492D3]">Workplace Training</a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-6 w-80 z-50 -ml-20">
              <div className="space-y-4">
                {[
                  ["CONSULTATION SERVICE", "Practical and cost-effective solutions with HSE Professional support"],
                  ["CUSTOMISED COURSES", "A tailored package of support for your workforce"],
                  ["WORKPLACE COURSES", "Off-the-shelf suite of courses designed for your business"]
                ].map(([title, desc]) => (
                  <div key={title}>
                    <h3 className="font-bold text-[#0492D3]">{title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* About Us Dropdown */}
          <div className="relative group">
            <a href="#" className="hover:text-[#0492D3]">About Us</a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-6 w-80 z-50 -ml-20">
              <div className="space-y-4">
                {[
                  ["WHY ASTUTIS?", "5,000 Corporate Customers"],
                  ["OUR TEAMS", "100+ years of combined experience in HSE"],
                  ["OUR VISION", "People come first — everything else is secondary"],
                  ["NEWSLETTER", "Stay updated with industry developments"],
                  ["CAREERS", "View our current vacancies"]
                ].map(([title, desc]) => (
                  <div key={title}>
                    <h3 className="font-bold text-[#0492D3]">{title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Exam Help Centre Dropdown */}
          <div className="relative group">
            <a href="#" className="hover:text-[#0492D3]">Exam Help Centre</a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-6 w-max z-50 -ml-20">
              <div className="flex gap-8">
                {[
                  ["EXAM HUB", ["NEBOSH Level 6", "Diploma", "NEBOSH General Certificate", "IOSH Exams", "IEMA Foundation", "Book Your Exam"]],
                  ["WAYS TO STUDY", ["Online Virtual", "In-Company", "OnlinePlus+", "Classroom"]],
                  ["FUNDING OPTIONS", ["ReAct", "ELCAS", "Personal Learning Account"]],
                  ["FAQS", ["NEBOSH", "IOSH", "IEMA"]]
                ].map(([title, items]) => (
                  <div key={title}>
                    <h3 className="font-bold mb-3 text-[#0492D3]">{title}</h3>
                    <ul className="space-y-2 text-sm">
                      {items.map((item) => (
                        <li key={item}><a href="#" className="hover:text-[#0492D3]">{item}</a></li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Insights Dropdown */}
          <div className="relative group">
            <a href="#" className="hover:text-[#0492D3]">Insights</a>
            <div className="absolute hidden group-hover:block bg-white shadow-lg p-6 w-80 z-50 -ml-20">
              <div className="space-y-4">
                {[
                  ["NEWS", "Stay informed with our latest news features"],
                  ["BLOG", "Thought-leadership articles from experts"],
                  ["CASE STUDIES", "Read our excellent client reviews"]
                ].map(([title, desc]) => (
                  <div key={title}>
                    <h3 className="font-bold text-[#0492D3]">{title}</h3>
                    <p className="text-sm text-gray-600 mt-1">{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact (no dropdown) */}
          <a href="#" className="hover:text-[#0492D3]">Contact</a>
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
