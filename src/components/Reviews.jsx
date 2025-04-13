import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Reviews() {
  const testimonials = [
    {
      id: 1,
      rating: 5,
      comment: "Clear and concise. A lot of information delivered in an easy to digest format...",
      author: "KERRINA",
      date: "09.04.2025"
    },
    {
      id: 2,
      rating: 5,
      comment: "Clear and concise. A lot of information delivered in an easy to digest format...",
      author: "KERRINA",
      date: "09.04.2025"
    },
    {
      id: 3,
      rating: 5,
      comment: "Excellent trainer, easy to follow and good mixture of team discussions.",
      author: "KEITH",
      date: "03.04.2025"
    },
    {
      id: 4,
      rating: 4,
      comment: "Covered a lot of critical tasks, easy to follow for first weeks.",
      author: "KEITH",
      date: "03.04.2025"
    },
    {
      id: 5,
      rating: 5,
      comment: "Very informative course and excellent trainer!",
      author: "SARAH",
      date: "01.04.2025"
    }
  ];

  const PrevArrow = ({ onClick }) => (
    <button 
      onClick={onClick} 
      className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-[#F16F22] rounded-full p-2 shadow-md hover:bg-[#0492D3] z-10"
    >
      <ChevronLeft className="h-6 w-6 text-[#FFFFFF]" />
    </button>
  );

  const NextArrow = ({ onClick }) => (
    <button 
      onClick={onClick} 
      className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-[#F16F22] rounded-full p-2 shadow-md hover:bg-[#0492D3] z-10"
    >
      <ChevronRight className="h-6 w-6 text-[#FFFFFF]  " />
    </button>
  );

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 }
      },
      {
        breakpoint: 640,
        settings: { slidesToShow: 1 }
      }
    ]
  };

  const StarRating = ({ rating }) => (
    <div className="flex mb-4">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );

  return (
    <section className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 font-montserrat">
      <div className="text-center mb-16">
        <p className="text-sm font-semibold text-[#0492D3] uppercase">WHAT PEOPLE SAY</p>
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Hear what our Learners have to say</h2>
        <p className="mt-4 max-w-4xl mx-auto text-base text-gray-500">
          98% of our learners rated their experience as good or outstanding. Here's what they had to say.
        </p>
      </div>

      <div className="relative max-w-7xl mx-auto">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-3">
              <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col justify-between">
                <StarRating rating={testimonial.rating} />
                <p className="text-gray-600 mb-6 h-28 overflow-hidden text-sm">"{testimonial.comment}"</p>
                <div>
                  <p className="text-[#0492D3] font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.date}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-[#0492D3] hover:bg-purple-600 text-white font-medium py-2 px-8 rounded-full">
          Read More Reviews
        </button>
      </div>
    </section>
  );
}
