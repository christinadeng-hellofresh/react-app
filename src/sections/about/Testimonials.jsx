import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination } from "swiper";
import testimonials from "./data";
import { Rating } from "flowbite-react";
import Card from "../../components/Card";
import { FaGoogle } from "react-icons/fa6";
import { Blockquote } from "flowbite-react";

const Testimonials = () => {
  return (
    <div
      id="testimonials"
      className="text-center pt-32 shadow-lg relative z-10 pb-0"
    >
      <h3 className="text-2xl text-center text-gray-800 mb-2 font-semibold">
        Customer Reviews
      </h3>
      <p className="italic mt-4 text-center text-gray-800 pb-4">
        These are unbiased testimonials from some of my clients
      </p>
      <Rating className="flex justify-center pb-4">
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <Rating.Star />
        <p className="ml-2 text-sm font-bold text-gray-900">5.0</p>
        <span className="mx-1.5 h-1 w-1 rounded-full bg-gray-500 dark:bg-gray-400" />
        <a
          href="https://g.co/kgs/F198tRU"
          className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-white"
        >
          76 reviews
        </a>
      </Rating>
      <div className="p-8 md:p-20">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          breakpoints={{
            601: { slidesPerView: 2 },
            1025: { slidesPerView: 3 },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          className="h-[30rem] pt-4 mySwiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id} className="cursor-grab">
              <Card className="bg-white flex flex-col items-center text-center p-4 shadow-lg rounded-lg h-auto overflow-hidden relative z-10">
                <figure className="mx-auto max-w-screen-md text-center flex flex-col justify-center h-full">
                  <svg
                    className="mx-auto mb-3 h-10 w-10 text-gray-400 dark:text-gray-600"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 14"
                  >
                    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
                  </svg>
                  <Blockquote className="h-48 overflow-scroll">
                    <p className="text-base font-medium italic text-gray-900">
                      {testimonial.quote}
                    </p>
                  </Blockquote>
                  <figcaption className="mt-6 flex items-center justify-center gap-4">
                    <FaGoogle
                      className="h-5 w-5"
                      style={{
                        color: "#3C5B6F",
                      }}
                    />
                    <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                      <cite
                        className="pr-3 font-medium text-base"
                        style={{
                          color: "#3C5B6F",
                        }}
                      >
                        {testimonial.name}
                      </cite>
                    </div>
                  </figcaption>
                </figure>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
