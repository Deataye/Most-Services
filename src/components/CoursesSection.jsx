import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import Card1 from '../assets/NEBOSH_Diploma-for-Occupational-Health-and-Safety-Management-Professionals.jpg';
import Card2 from '../assets/NEBOSH_General-Certificate-in-Occupational-Health-and-Safety.jpg';
import Card3 from '../assets/IOSH-Managing-Safely.jpg';
import Card4 from '../assets/IEMA_Foundation-Certificate-in-Environmental-Management.jpg';

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

const CoursesSection = () => {
  const courses = [
    {
      title: "NEBOSH National General Certificate in Occupational Health and Safety",
      description: "One of the most widely held health and safety certifications in the world. It will give you the skills and knowledge to create a safe and healthy place for people to work and visit.",
      price: "£495.00",
      passRate: "92%" ,
      image: Card1
    },
    {
      title: "NEBOSH Level 6 National Diploma for Occupational Health and Safety Management Professionals",
      description: "A perfect choice if you want to make health and safety your career.",
      price: "£1,760.00",
      passRate: "92%",
      image: Card2
    },
    {
      title: "IOSH Managing Safety",
      description: "Basic risk management health and safety certificate offering managers understanding of practical actions needed for team safety. Includes free human factors learning module.",
      price: "£380.00",
      passRate: "95%",
      image: Card3
    },
    {
      title: "IEMA Foundation Certificate in Environmental Management",
      description: "The perfect way to show you have the knowledge and skills to begin your career in sustainability.",
      price: "£675.00",
      passRate: "100%",
      image: Card4
    }
  ];

  const settings = {
    dots: false, // No pagination
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    focusOnSelect: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-full mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-gray-900 mb-2">
            CHOOSE FROM OVER 100 COURSES
          </h2>
          <p className="text-3xl font-semibold text-gray-900 mb-6">
            Our Popular Courses
          </p>
          <button className="bg-[#0492D3] text-white px-6 py-2 rounded-full font-semibold hover:bg-purple-700 transition-colors mb-12">
            View All Courses
          </button>
        </div>

        {/* Carousel for Courses */}
        <div className="mb-16  relative">
          <Slider {...settings}>
          {courses.map((course, index) => (
  <div key={index} className="px-3">
  <div className="h-full flex flex-col bg-white rounded-lg ">

      {/* Image and Pass Rate */}
      <div className="relative">
        <img src={course.image} alt={course.title} className="w-full h-48 object-cover rounded-t-lg" />
        <div className="absolute top-0 rounded-sm bg-[#0492D3] text-white px-4 py-2 text-lg font-bold">
          {course.passRate}
        </div>
      </div>

      {/* Course Title and Description */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">{course.title}</h3>
        <p className="text-gray-600 mb-4">{course.description}</p>
        <div className="mt-6">
          <p className="text-gray-600 mb-2">PRICES START FROM (EX VAT)</p>
          <p className="text-2xl font-bold text-[#F16F22]">{course.price}</p>
        </div>
      </div>
    </div>
  </div>
))}
            
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
