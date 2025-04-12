import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import Amazon from '../assets/amazon.png';
import Northeren from '../assets/northeren.png';
import Coop from '../assets/coop.png';
import Thamas from '../assets/thamas.png';

// Custom Arrows
const PrevArrow = ({ onClick }) => (
  <div onClick={onClick} className="absolute z-10 left-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white bg-[#F16F22] p-3 rounded-full hover:bg-purple-700">
    <FaArrowLeft />
  </div>
);

const NextArrow = ({ onClick }) => (
  <div onClick={onClick} className="absolute z-10 right-0 top-1/2 transform -translate-y-1/2 cursor-pointer text-white bg-[#F16F22] p-3 rounded-full hover:bg-purple-700">
    <FaArrowRight />
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      logo: Amazon,
      content: "Astutis are the global health and safety training provider of one of the most prominent confectionery ownership groups in the world."
    },
    {
      logo: Northeren,
      content: "Astutis trained over 900 workers in the Gist organisation to establish a sounder health and safety footing."
    },
    {
      logo: Coop,
      content: "Astutis have been working with Bentley Motors since 2016. We have trained several courses to their workforce ensuring compliance and Health and Safety excellence."
    },
    {
      logo: Thamas,
      content: "Our partnership with CHEP included a catalogue of training solutions to drastically enhance safety and efficiency."
    }
  ];

  const settings = {
    dots: false, // No pagination
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="bg-[#0C0A28] py-16 px-4 sm:px-6 lg:px-0 font-montserrat">
      <div className="max-w-[1400px] mx-auto relative">
        <div className="text-center mb-12">
        <div className="w-16 h-1 bg-[#0492D3] mx-auto mb-6"></div>
          <h2 className="text-sm font-bold text-white mb-4">
            WHAT PEOPLE SAY
          </h2>
          <p className="text-3xl font-semibold text-white mb-4">
            Trusted by Thousands of Businesses
          </p>
          <div className=" mb-10">
          <p className="text-white max-w-3xl mx-auto">
          Customer feedback is very important to us. 98% of our customers have said they would recommend us. Take a read of our customers testimonials to find out why.
          </p>
        </div>
          <button className="bg-[#0492D3] text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors">
            Case Studies
          </button>
        </div>

        <div className="mt-16 h-[350px]">
          <Slider {...settings}>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-3">
                <div className="bg-white p-6 w-full rounded-2xl shadow-md h-[300px]">
                  <div className="mb-4 h-20 flex items-center justify-center">
                    <img 
                      src={testimonial.logo} 
                      alt="Client logo" 
                      className="h-16 w-auto object-contain"
                    />
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">
                    {testimonial.content}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
